# Statically scan package archives for PEM certificates; no downloaded code is executed.
import sys,os,io,re,zipfile,tarfile,gzip,hashlib,base64,subprocess,json,datetime
ROOT=sys.argv[1]
PEM=re.compile(rb'-----BEGIN CERTIFICATE-----\s+([A-Za-z0-9+/=\s]+?)-----END CERTIFICATE-----')
def certs_in_bytes(b):
    out=[]
    for m in PEM.finditer(b):
        try: der=base64.b64decode(re.sub(rb'\s',b'',m.group(1)))
        except Exception: continue
        out.append(der)
    return out
def walk_blob(name,b,depth=0,acc=None):
    acc=acc if acc is not None else {}
    if depth>4: return acc
    bio=io.BytesIO(b)
    if zipfile.is_zipfile(bio):
        with zipfile.ZipFile(bio) as z:
            for i in z.infolist():
                if i.file_size>50_000_000: continue
                walk_blob(name+'!'+i.filename,z.read(i),depth+1,acc)
        return acc
    try:
        with tarfile.open(fileobj=io.BytesIO(b)) as t:
            for m in t.getmembers():
                if m.isfile() and m.size<50_000_000:
                    walk_blob(name+'!'+m.name,t.extractfile(m).read(),depth+1,acc)
        return acc
    except Exception: pass
    if b[:2]==b'\x1f\x8b':
        try: return walk_blob(name+'!gunzip',gzip.decompress(b),depth+1,acc)
        except Exception: pass
    for der in certs_in_bytes(b):
        acc.setdefault(hashlib.sha256(der).hexdigest(),(name,der))
    return acc
info_cache={}
def info(der):
    h=hashlib.sha256(der).hexdigest()
    if h in info_cache: return info_cache[h]
    p=subprocess.run(['openssl','x509','-inform','DER','-noout','-subject','-enddate','-text'],input=der,capture_output=True)
    s=p.stdout.decode(errors='ignore')
    subj=re.search(r'subject= ?(.*)',s); end=re.search(r'notAfter=(.*)',s)
    ca='CA:TRUE' in s
    try: na=datetime.datetime.strptime(end.group(1).strip(),'%b %d %H:%M:%S %Y %Z')
    except Exception: na=None
    info_cache[h]=(subj.group(1).strip() if subj else '?',na,ca)
    return info_cache[h]
pkgs={}
for d in sorted(os.listdir(ROOT)):
    p=os.path.join(ROOT,d)
    if not os.path.isdir(p): continue
    acc={}
    for f in os.listdir(p): walk_blob(f,open(os.path.join(p,f),'rb').read(),0,acc)
    pkgs[d]=acc
latest=[d for d in pkgs if d.startswith('pypi_certifi_2026.10')][0]
cur=set(pkgs[latest])
hist=set()
for d in pkgs:
    if 'certifi' in d and d!=latest: hist|=set(pkgs[d])
now=datetime.datetime(2026,10,27)
removed_unexp={h for h in hist-cur if (info(pkgs_der:= next(pkgs[d][h][1] for d in pkgs if h in pkgs[d]))[1] or now)>now}
def find(sub):
    return {h for d in pkgs for h in pkgs[d] if sub in info(pkgs[d][h][1])[0]}
EM=find('emSign ECC Root CA - G3'); AAA=find('AAA Certificate Services')
print('certifi-route baseline: historical roots', len(hist),' current', len(cur),' removed&unexpired(27 Oct)', len(removed_unexp))
print('emSign ECC G3 fps:',[h[:16] for h in EM],' AAA fps:',[h[:16] for h in AAA])
print('%-36s %5s %5s %8s %6s %4s'%('package','certs','CAs','rem_unexp','emSign','AAA'))
for d,acc in pkgs.items():
    if d.startswith('hist_') or 'certifi' in d: 
        if not d.startswith('pypi_certifi'): continue
    cas=[h for h in acc if info(acc[h][1])[2]]
    print('%-36s %5d %5d %8d %6s %4s'%(d,len(acc),len(cas),len(set(acc)&removed_unexp),'Y' if set(acc)&EM else '-','Y' if set(acc)&AAA else '-'))
