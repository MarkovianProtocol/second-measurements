import csv,sys,os
D=sys.argv[1]
def load(s):
    r={}
    for row in csv.reader(open(os.path.join(D,s+'.csv'))):
        if row[0][:2] in('19','20'):
            try: r[row[0][:7]]=float(row[1])
            except: pass
    return r
cpi=load('CPIAUCSL'); ahe=load('CES0500000003'); awe=load('CES0500000011'); pnw=load('AHETPI')
atl=load('FRBATLWGT3MMAUMHWGO'); atl12=load('FRBATLWGT12MMUMHGO')
ms=sorted(k for k in ahe if k>='2025-06')
def yoy(d,m):
    y=str(int(m[:4])-1)+m[4:]; return (d[m]/d[y]-1)*100 if y in d and m in d else None
def mom(d,m):
    if m not in d: return None
    i=sorted(d).index(m); p=sorted(d)[i-1]; return (d[m]/d[p]-1)*100
print("month   CPIyoy  realAHE_mom realAHE_yoy realAWE_mom realAWE_yoy realPNW_yoy  AtlFed3mma-CPIyoy AtlFed12m-CPIyoy")
for m in ms:
    c=yoy(cpi,m)
    if c is None: print(m,"CPI missing"); continue
    rA={k:{x:d[x]/cpi[x] for x in d if x in cpi} for k,d in (('ahe',ahe),('awe',awe),('pnw',pnw))}
    f=lambda v: f"{v:7.2f}" if v is not None else "   n/a"
    print(m, f(c), f(mom(rA['ahe'],m)), f(yoy(rA['ahe'],m)), f(mom(rA['awe'],m)), f(yoy(rA['awe'],m)), f(yoy(rA['pnw'],m)), f(atl[m]-c if m in atl else None), f(atl12[m]-c if m in atl12 else None))
# CPS quarterly real median weekly earnings
cps=load('LES1252881600Q'); cpq={}
for q in sorted(cps):
    y,mo=int(q[:4]),int(q[5:7]); mm=[f"{y}-{mo+i:02d}" for i in range(3)]
    if all(x in cpi for x in mm): cpq[q]=cps[q]/(sum(cpi[x] for x in mm)/3)
print("\nCPS median usual weekly earnings (nominal) deflated by quarterly-avg CPI-U, YoY %:")
for q in sorted(cpq)[-6:]:
    y=str(int(q[:4])-1)+q[4:]; print(q, cps[q], f"{(cpq[q]/cpq[y]-1)*100:.2f}" if y in cpq else '')
eci=load('ECIWAG'); print("\nECI wages&salaries (SA index) deflated, YoY %:")
for q in sorted(eci)[-6:]:
    y,mo=int(q[:4]),int(q[5:7]); mm=[f"{y}-{mo+i:02d}" for i in range(3)]; yy=str(y-1)+q[4:]
    mmy=[f"{y-1}-{mo+i:02d}" for i in range(3)]
    if all(x in cpi for x in mm+mmy) and yy in eci:
        print(q, f"{(eci[q]/eci[yy])/((sum(cpi[x] for x in mm))/(sum(cpi[x] for x in mmy)))*100-100:.2f}")
