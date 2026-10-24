"""Extract Rule 6(b) timing fields from Forum UDRP decisions (raw/*.htm, cp1252)."""
import os,re,html,json,datetime,statistics,collections,sys
MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December']
def mpat(m): return r'\s?'.join(m)
MRE='('+'|'.join(mpat(m) for m in MONTHS)+r')'
DATE=MRE+r'\s*(\d\s?\d?)\s*(?:,|\s)\s*(\d\s?\d\s?\d\s?\d)'
def pd(m):
    mon=MONTHS.index(re.sub(r'\s','',m.group(1)).capitalize())+1
    try: return datetime.date(int(re.sub(r'\s','',m.group(3))),mon,int(re.sub(r'\s','',m.group(2))))
    except ValueError: return None   # impossible date as written in the decision (e.g. June 31); counted as unreadable
def txt(fn):
    b=open(fn,'rb').read()
    try: t=b.decode('utf-8')
    except UnicodeDecodeError: t=b.decode('cp1252','replace')
    t=re.sub(r'<[^>]+>',' ',t);t=html.unescape(t);return re.sub(r'\s+',' ',t)
def first(pat,s,flags=re.I,last=False):
    m=re.search(pat,s,flags)
    if not m: return None,None
    ds=list(re.finditer(DATE,m.group(0),re.I))
    if not ds: return None,m.group(0)
    return pd(ds[-1] if last else ds[0]), m.group(0)
def nosp(s): return re.sub(r'\s','',s).lower()
def extract(t):
    i=t.find('PROCEDURAL HISTORY')
    j=min([k for k in (t.find('RELIEF SOUGHT',i),t.find('FINDINGS',i)) if k>0] or [i+6000])
    ph=t[i:j] if i>=0 else ''
    r={}
    r['complaint_received'],_=first(r'submitted a Complaint to (?:the )?Forum (?:electronically )?on\s*'+DATE,ph)
    r['commencement'],_=first(r'On\s*'+DATE+r'[^.]{0,40}?,?\s*(?:the )?Forum served the Complaint',ph)
    r['response_deadline'],_=first(r'setting a deadline of\s*'+DATE,ph)
    # response received
    rr=None;rq=None
    for pat in [r'(?:A |An )?(?:timely |late |deficient |)Response was received[^.]{0,120}?'+DATE,
                r'Respondent (?:submitted|filed) (?:a|its|an?)[^.]{0,40}Response[^.]{0,80}?'+DATE,
                r'On\s*'+DATE+r'[^.]{0,30}?,?\s*Respondent (?:submitted|filed)[^.]{0,30}Response',
                r'Response[^.]{0,60}?received[^.]{0,60}?'+DATE]:
        rr,rq=first(pat+r'[^.]*',ph,last=True)
        if rr: break
    r['response_received']=rr; r['response_quote']=rq
    n=nosp(ph)
    r['default']='notificationofrespondentdefault' in n
    ap,aq=first(r'O\s?n\s*'+DATE+r'[^.]{0,200}?Forum appointed',ph)
    r['appoint_year_inferred']=False
    if not ap:
        m=re.search(r'O\s?n\s*'+MRE+r'\s*(\d\s?\d?)\s*,?[^.]{0,200}?Forum appointed',ph,re.I)
        dl=re.search(r'setting a deadline of\s*'+DATE,ph,re.I)
        if m and dl and pd(dl):
            y=pd(dl).year; mon=MONTHS.index(re.sub(r'\s','',m.group(1)).capitalize())+1
            try:
                ap=datetime.date(y,mon,int(re.sub(r'\s','',m.group(2))))
                if ap<pd(dl): ap=datetime.date(y+1,mon,ap.day)
                aq=m.group(0); r['appoint_year_inferred']=True
            except ValueError: ap=None
    r['appointed']=ap; r['appoint_quote']=aq
    r['three']='three-memberpanel' in n or 'threememberpanel' in n
    r['single']=('single-memberpanel' in n or 'singlememberpanel' in n) and not r['three']
    r['extension']=bool(re.search(r'extension|extended|stay|stayed|suspend|amended Complaint|deficien',ph,re.I))
    r['ext_quote']=[m.group(0) for m in re.finditer(r'[^.]{0,120}(?:extension|extended|stay(?:ed)?|suspend\w*|amended Complaint|deficien\w*)[^.]{0,120}',ph,re.I)][:4]
    r['additional_submission']=bool(re.search(r'Additional Submission',ph,re.I))
    dds=list(re.finditer(r'Dated\s?:?\s*'+DATE,t,re.I)); dd=dds[-1] if dds else None
    r['decision_date_text']=pd(dd) if dd else None
    r['ph_len']=len(ph)
    return r
# Use rebuild.py (from forum_procedural_history.jsonl) or build_text.py + rebuild.py (from raw/*.htm); both apply the SM-026 start rule.
