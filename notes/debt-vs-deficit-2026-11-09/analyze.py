# Recount of Peter Schiff (Peter Schiff Show, 3 Nov 2026): "For the most recent fiscal year, the national debt rose by 2.5 trillion. Now, the official budget deficit was only 2 trillion"
# Inputs: Treasury Fiscal Data API pulls in data/ (Debt to the Penny, Monthly Treasury Statement Table 1, Daily Treasury Statement operating cash balance)
import json, os
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')
debt = {r['record_date']: r for r in json.load(open(os.path.join(D, 'debt_to_penny.json')))['data']}
a, b = debt['2025-09-30'], debt['2026-09-30']
f = lambda r, k: float(r[k]) / 1e9
tot = f(b, 'tot_pub_debt_out_amt') - f(a, 'tot_pub_debt_out_amt')
pub = f(b, 'debt_held_public_amt') - f(a, 'debt_held_public_amt')
gov = f(b, 'intragov_hold_amt') - f(a, 'intragov_hold_amt')
mts = [r for r in json.load(open(os.path.join(D, 'mts_table_1.json')))['data'] if r['classification_desc'] == 'Year-to-Date' and r['sequence_number_cd'] == '2.13'][0]
deficit = float(mts['current_month_dfct_sur_amt']) / 1e9
cash = {r['record_date']: float(r['open_today_bal']) / 1e3 for r in json.load(open(os.path.join(D, 'dts_cash.json')))['data'] if 'Closing Balance' in r['account_type']}
tga = cash['2026-09-30'] - cash['2025-09-30']
print('Total public debt 30 Sep 2025 %.1f bn -> 30 Sep 2026 %.1f bn: +%.1f bn' % (f(a, 'tot_pub_debt_out_amt'), f(b, 'tot_pub_debt_out_amt'), tot))
print('  held by the public +%.1f bn, held by government accounts (trust funds) +%.1f bn' % (pub, gov))
print('FY2026 deficit (MTS, Oct 2025-Sep 2026): %.1f bn' % deficit)
print('Gap total debt - deficit: %.1f bn' % (tot - deficit))
print('  trust-fund holdings +%.1f bn | Treasury cash (TGA) %.1f -> %.1f bn: +%.1f bn | everything else (loans, other means of financing) %.1f bn' % (gov, cash['2025-09-30'], cash['2026-09-30'], tga, tot - deficit - gov - tga))
t6 = {r['classification_desc']: r for r in json.load(open(os.path.join(D, 'mts_table_6.json')))['data']}
g = lambda k: float(t6[k]['fytd_net_txn_amt']) / 1e9
print('MTS Table 6 fiscal-year items: direct loan financing +%.1f bn, discount on Treasury securities %.1f bn, misc liability accounts %.1f bn' % (g('Net Activity, Direct Loan Financing (See Schedule E)'), g('Less Discount on Treasury Securities'), g('Miscellaneous Liability Accounts (Includes Checks Outstanding Etc.)')))
