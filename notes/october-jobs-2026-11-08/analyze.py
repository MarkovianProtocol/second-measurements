# Recount of E.J. Antoni, "Labor Market Roared in October" (Townhall, 7 Nov 2026), from BLS series via FRED/ALFRED (read 8 Nov 2026)
import csv,os
D=os.path.join(os.path.dirname(os.path.abspath(__file__)),'data')
r={}
for f in ('fred_jobs_2026-11-08.csv','fred_jobs_extra_2026-11-08.csv'):
    for x in csv.DictReader(open(os.path.join(D,f))): r.setdefault(x['observation_date'][:7],{}).update({k:v for k,v in x.items() if v})
v=lambda k,m: float(r[m][k]); d=lambda k,a,b: v(k,a)-v(k,b)
O,S,A,J='2026-10','2026-09','2026-08','2026-07'
vin={(x['vintage'],x['observation_date'][:7]):float(x['PAYEMS']) for x in csv.DictReader(open(os.path.join(D,'alfred_payems_vintages.csv')))}
print('Payrolls Oct: %+d k'%d('PAYEMS',O,S))
print('Revisions: Aug %+d k, Sep %+d k; Oct level minus Sep level as first published: %+d k'%(vin['2026-11-06','2026-08']-vin['2026-10-02','2026-08'],vin['2026-11-06','2026-09']-vin['2026-10-02','2026-09'],vin['2026-11-06','2026-10']-vin['2026-10-02','2026-09']))
print('Household employment: Oct %+d k, since Jul %+d k | payrolls since Jul %+d k'%(d('CE16OV',O,S),d('CE16OV',O,J),d('PAYEMS',O,J)))
print('Participation Jul-Oct',[r[m]['CIVPART'] for m in (J,A,S,O)],'| emp-pop',[r[m]['EMRATIO'] for m in (J,A,S,O)])
print('Full-time: Oct %+d k, since Jul %+d k | part-time: Oct %+d k, since Jul %+d k'%(d('LNS12500000',O,S),d('LNS12500000',O,J),d('LNS12600000',O,S),d('LNS12600000',O,J)))
print('Multiple jobholders Oct %+d k'%d('LNS12026619',O,S))
print('Private %+d k of %+d k = %.1f%%; government %+d k (federal %+d, state %+d, local %+d)'%(d('USPRIV',O,S),d('PAYEMS',O,S),d('USPRIV',O,S)/d('PAYEMS',O,S)*100,d('USGOVT',O,S),d('CES9091000001',O,S),d('CES9092000001',O,S),d('CES9093000001',O,S)))
mf=sorted((m,float(x['MANEMP'])) for m,x in r.items() if 'MANEMP' in x)
print('Manufacturing Oct %d k; last month at or above: %s; Jan 2023 %d k -> Dec 2025 %d k'%(v('MANEMP',O),[x for x in mf if x[1]>=v('MANEMP',O) and x[0]<O][-1],v('MANEMP','2023-01'),v('MANEMP','2025-12')))
print('Bachelor+ employed (25+): Oct %+d k, since Jul %+d k'%(d('LNS12027662',O,S),d('LNS12027662',O,J)))
q3n=[vin['2026-11-06',m]-vin['2026-11-06',p] for m,p in (('2026-08','2026-07'),('2026-09','2026-08'))]+[v('PAYEMS',J)-158892]
q3o=[vin['2026-10-02',m]-vin['2026-10-02',p] for m,p in (('2026-07','2026-06'),('2026-08','2026-07'),('2026-09','2026-08'))]
print('Q3 payroll gain per month: first published %.0f k, current %.0f k'%(sum(q3o)/3,sum(q3n)/3))
