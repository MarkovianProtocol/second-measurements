# Recount of Matt Stoller, "Monopoly Round-Up: Goodbye AI Bubble, Hello Real Economy" (BIG, 19 Oct 2026)
# Inputs: FRED CSVs in data/ (BLS PPI/CPI, Freddie Mac PMMS, Fed Z.1)
import csv,os
D=os.path.join(os.path.dirname(os.path.abspath(__file__)),'data')
m={r['observation_date'][:7]:r for r in csv.DictReader(open(os.path.join(D,'fred_monthly_2026-11-08.csv')))}
def ch(k,a,b): return (float(m[a][k])/float(m[b][k])-1)*100
print('PPI final demand (PPIFIS, SA): Sep 2026 vs Aug %.2f%%, vs Sep 2025 %.2f%%'%(ch('PPIFIS','2026-09','2026-08'),ch('PPIFIS','2026-09','2025-09')))
print('CPI-U all items: Sep 2026 vs Sep 2025 %.2f%% (SA), %.2f%% (NSA)'%(ch('CPIAUCSL','2026-09','2025-09'),ch('CPIAUCNS','2026-09','2025-09')))
print('CPI gasoline (SA): Sep vs Aug %.2f%%, vs Sep 2025 %.2f%%'%(ch('CUSR0000SETB01','2026-09','2026-08'),ch('CUSR0000SETB01','2026-09','2025-09')))
w=[(r['observation_date'],float(r['MORTGAGE30US'])) for r in csv.DictReader(open(os.path.join(D,'fred_mortgage_weekly_2026-11-08.csv'))) if r['MORTGAGE30US']]
pre=[x for x in w if x[0]<='2026-10-19']
print('Freddie Mac 30-yr: latest before 19 Oct',pre[-1],'| 2026 high',max((x for x in w if x[0]>='2026'),key=lambda x:x[1]),'| last week at or above 7.5',[x for x in w if x[1]>=7.5][-1])
q=[r for r in csv.DictReader(open(os.path.join(D,'fred_household_equity_quarterly_2026-11-08.csv'))) if r['TFAABSHNO']]
s=[(r['observation_date'],float(r['BOGZ1LM153064475Q'])/float(r['TFAABSHNO'])*100) for r in q]
print('Equities (direct+indirect) / financial assets: latest %s %.2f%%; 1945Q4 %.2f%%; all-time low %s %.2f%%; previous high %s %.2f%%'%(s[-1][0],s[-1][1],s[0][1],*min(s,key=lambda x:x[1]),*max(s[:-1],key=lambda x:x[1])))
print('1984 quarters:',[(d,round(v,2)) for d,v in s if d[:4]=='1984'],'| 1982:',[(d,round(v,2)) for d,v in s if d[:4]=='1982'])
print('Equity share at past peaks (highest quarter of each year), with $ held:')
for y in ('1968','2000','2007','2021'):
    b=max((r for r in q if r['observation_date'][:4]==y),key=lambda r:float(r['BOGZ1LM153064475Q'])/float(r['TFAABSHNO']))
    print('  %s %.2f%% $%.1fT'%(b['observation_date'],float(b['BOGZ1LM153064475Q'])/float(b['TFAABSHNO'])*100,float(b['BOGZ1LM153064475Q'])/1e6))
print('  %s %.2f%% $%.1fT (latest)'%(q[-1]['observation_date'],s[-1][1],float(q[-1]['BOGZ1LM153064475Q'])/1e6))
