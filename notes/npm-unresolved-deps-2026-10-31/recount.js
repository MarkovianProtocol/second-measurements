// recount.js: of npm versions published in [START, END), how many had a direct registry dependency
// (dependencies, peerDependencies, optionalDependencies) that no published version satisfied at the version's publish time?
// Usage: node recount.js 2026-10-30T00:00:00Z 2026-10-31T00:00:00Z ../data
// Route: replicate.npmjs.com _changes (each doc listed at its latest change) -> full packuments from registry.npmjs.org
// -> publish times in packument.time. Needs npm's bundled semver.
const fs=require('fs'), zlib=require('zlib'), path=require('path');
const semver=require(process.env.SEMVER||'/opt/homebrew/lib/node_modules/npm/node_modules/semver');
const [START,END,OUT]=[Date.parse(process.argv[2]),Date.parse(process.argv[3]),process.argv[4]];
const UA={'user-agent':'second-measurements recount (markovianprotocol.com; hello@markovianprotocol.com)'};
const CACHE=path.join(OUT,'cache'); fs.mkdirSync(CACHE,{recursive:true});
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function get(url,json=true){for(let i=0;i<6;i++){try{const r=await fetch(url,{headers:{...UA,accept:'application/json'}});
  if(r.status===404) return null; if(r.ok) return json?await r.json():await r.text();}catch(e){} await sleep(1000*2**i);} throw new Error('fetch failed '+url);}
// full (slim) packument from disk cache or registry; not held in memory
const inflight=new Map();
function pkFull(name){ const f=path.join(CACHE,encodeURIComponent(name)+'.json.gz');
  if(fs.existsSync(f)){const s=zlib.gunzipSync(fs.readFileSync(f)).toString(); return Promise.resolve(s==='null'?null:JSON.parse(s));}
  if(inflight.has(name)) return inflight.get(name);
  const p=(async()=>{const d=await get('https://registry.npmjs.org/'+name.replace('/','%2f'));
    const s=d?slim(d):null; fs.writeFileSync(f,zlib.gzipSync(JSON.stringify(s))); inflight.delete(name); return s;})();
  inflight.set(name,p); return p;}
// dependency index held in memory: just [version, publish ms] pairs
const mem=new Map();
function pk(name){ if(mem.has(name)) return mem.get(name);
  const p=pkFull(name).then(d=>d?Object.keys(d.versions).map(v=>[v,Date.parse(d.time[v])]).filter(x=>x[1]):null);
  mem.set(name,p); return p;}
// keep only what the count needs: times, and per version the three dependency maps
function slim(d){ if(!d||!d.time) return {time:{},versions:{}}; const v={};
  for(const [k,x] of Object.entries(d.versions||{})) v[k]={d:x.dependencies||{},p:x.peerDependencies||{},o:x.optionalDependencies||{}};
  return {time:d.time,versions:v};}
async function seqAt(t){ // smallest seq whose doc's time.modified >= t (doc at a seq = doc whose latest change is that seq)
  const top=(await get('https://replicate.npmjs.com/registry/')).update_seq; let lo=top-4000000, hi=top;
  while(hi-lo>2000){const mid=Math.floor((lo+hi)/2); const r=await get(`https://replicate.npmjs.com/registry/_changes?since=${mid}&limit=1`);
    const x=r.results[0]; const p=await get('https://registry.npmjs.org/'+x.id.replace('/','%2f')); const m=Date.parse(p&&p.time&&p.time.modified);
    if(m>=t) hi=mid; else lo=mid;} return lo;}
function classify(spec){ // registry spec -> {name?,range} or null for non-registry
  if(typeof spec!=='string') return {bad:'nonstring'};
  if(/^(git|git\+|github:|gitlab:|bitbucket:|https?:|file:|link:)/.test(spec)||/^[^@\s]+\/[^@\s]+(#.*)?$/.test(spec)&&!spec.startsWith('@')) return null;
  if(spec.startsWith('workspace:')) return {bad:'workspace'};
  let name=null, r=spec; const m=spec.match(/^npm:((?:@[^/]+\/)?[^@]+)(?:@(.*))?$/); if(m){name=m[1]; r=m[2]||'*';}
  return {name, range:r};}
(async()=>{
  const IDF=path.join(OUT,'ids.txt'); let ids;
  if(fs.existsSync(IDF)){ ids=new Set(fs.readFileSync(IDF,'utf8').split('\n').filter(Boolean)); console.error('reusing',IDF); } else {
  const S=await seqAt(START-3600e3); console.error('since seq',S);
  ids=new Set(); let since=S;
  for(;;){const r=await get(`https://replicate.npmjs.com/registry/_changes?since=${since}&limit=10000`); for(const x of r.results) ids.add(x.id);
    if(!r.results.length||r.last_seq===since) break; since=r.last_seq; process.stderr.write(`\rids ${ids.size} seq ${since}`);}
  console.error(''); fs.writeFileSync(IDF,[...ids].join('\n')); }
  const RW=fs.createWriteStream(path.join(OUT,'rows.jsonl')); let nrows=0, nun=0; const list=[...ids]; let done=0;
  async function worker(){ while(list.length){ const id=list.pop(); const d=await pkFull(id); done++; if(done%500===0) process.stderr.write(`\rpkgs ${done}/${ids.size} rows ${nrows}`);
    if(!d) continue;
    for(const [v,ts] of Object.entries(d.time)){ if(v==='created'||v==='modified'||!d.versions[v]) continue; const t=Date.parse(ts); if(t<START||t>=END) continue;
      const row={pkg:id,version:v,published:ts,deps:0,unresolved:[]};
      for(const [kind,map] of Object.entries(d.versions[v])) for(const [dn,spec] of Object.entries(map)){
        const c=classify(spec); if(c===null) continue; row.deps++;
        if(c.bad){row.unresolved.push({kind,dep:dn,spec,why:c.bad,first_ok:null}); continue;}
        const name=c.name||dn; const dd=await pk(name);
        if(!dd||!dd.length){row.unresolved.push({kind,dep:dn,spec,why:'no such package',first_ok:null}); continue;}
        const isTag=!semver.validRange(c.range);
        // earliest publish time of any version that satisfies the range (tags: any version at all, history unknown)
        let first=Infinity; for(const [x,tx] of dd){
          if(isTag||semver.satisfies(x,c.range)) first=Math.min(first,tx);}
        if(first>t) row.unresolved.push({kind,dep:dn,spec,why:first===Infinity?'no satisfying version':'not yet published',first_ok:first===Infinity?null:new Date(first).toISOString()});
      }
      RW.write(JSON.stringify(row)+'\n'); nrows++; if(row.unresolved.length) nun++;}}}
  await Promise.all(Array.from({length:12},worker));
  console.error('');
  await new Promise(r=>RW.end(r));
  console.log(JSON.stringify({window:[process.argv[2],process.argv[3]],packages_changed:ids.size,versions:nrows,unresolved:nun,share:+(nun/nrows).toFixed(4)}));
})();
