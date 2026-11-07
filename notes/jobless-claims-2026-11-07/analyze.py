# Recount of Wolf Richter, "A Phenomenon: Initial Applications ... Lowest since 1969" (Wolf Street, 5 Nov 2026)
# Inputs: FRED CSVs in data/ (DOL weekly claims ICSA IC4WSA CCSA CC4WSA IURSA; BLS PAYEMS CLF16OV CES9091000001 CES9092000001)
import csv,collections,os
D=os.path.join(os.path.dirname(os.path.abspath(__file__)),'data')
def load(f): return list(csv.DictReader(open(os.path.join(D,f))))
wk=load('fred_claims_weekly_2026-11-07.csv'); iu=load('fred_iursa_weekly_2026-11-07.csv')
pm={r['observation_date'][:7]:(float(r['PAYEMS']),float(r['CLF16OV'])) for r in load('fred_payems_clf_monthly_2026-11-07.csv') if r['PAYEMS'] and r['CLF16OV']}
gov={r['observation_date'][:7]:r for r in load('fred_gov_jobs_monthly_2026-11-07.csv')}
def ser(rows,k,f=int): return [(r['observation_date'],f(r[k])) for r in rows if r[k]]
def lower(s):
    d,v=s[-1]; lo=[x for x in s[:-1] if x[1]<v]
    return d,v,len(lo),dict(collections.Counter(x[0][:4] for x in lo)),(lo[-1] if lo else None)
for k in ('IC4WSA','ICSA','CC4WSA','CCSA'): print(k,*lower(ser(wk,k)))
print('IURSA',*lower(ser(iu,'IURSA',float)))
rel=[]
for d,v in ser(wk,'IC4WSA'):
    ym=d[:7] if d[:7] in pm else max(k for k in pm if k<=d[:7]); p,c=pm[ym]
    rel.append((d,v,v/p/1000*1e4,v/c/1000*1e4))
for i,n in ((2,'per10k_payroll'),(3,'per10k_laborforce')):
    s=[(r[0],r[i]) for r in rel]; d,v,nl,_,_=lower(s)
    m69=min((x for x in s if x[0][:4]=='1969'),key=lambda x:x[1])
    print(n,d,round(v,2),'weeks_lower',nl,'1969_min',m69[0],round(m69[1],2))
for col,name in (('CES9091000001','federal'),('CES9092000001','state')):
    for base in ('2025-01','2024-12'):
        for end in ('2026-09','2026-10'):
            print(name,base,'->',end,int(gov[end][col])-int(gov[base][col]),'k')
