# Elon Musk's federal contributions, 2025-2026 cycle, from FEC Schedule A (processed + e-filed), deduplicated.
import json, os, collections
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')
P = json.load(open(os.path.join(D, 'schedule_a_processed.json'))); E = json.load(open(os.path.join(D, 'schedule_a_efile.json')))
def norm(r, src):
    return dict(src=src, cid=r['committee_id'], name=((r.get('committee') or {}).get('name') or '').strip(), date=r['contribution_receipt_date'][:10],
                amt=round(float(r['contribution_receipt_amount']), 2), memo=r.get('memo_code') == 'X', text=(r.get('memo_text') or '').strip())
rows = {}
for r in [norm(x, 'processed') for x in P] + [norm(x, 'efile') for x in E]:
    if r['date'] < '2025-01-01': continue
    k = (r['cid'], r['date'], r['amt'], r['memo'])
    rows.setdefault(k, r)
cash = [r for r in rows.values() if not r['memo']]
inkind = [r for r in rows.values() if r['memo'] and r['text'].upper().startswith('INKIND')]
other_memo = [r for r in rows.values() if r['memo'] and not r['text'].upper().startswith('INKIND')]
by = collections.defaultdict(float)
for r in cash: by[r['name']] += r['amt']
tot = sum(by.values())
print('Direct contributions (non-memo), %d rows, 1 Jan 2025 - %s: $%.2fM' % (len(cash), max(r['date'] for r in cash), tot / 1e6))
for k, v in sorted(by.items(), key=lambda x: -x[1]):
    if v >= 1e6: print('  %-34s $%.2fM' % (k, v / 1e6))
small = sum(v for v in by.values() if v < 1e6); print('  %-34s $%.2fM (%d committees)' % ('candidate committees etc.', small / 1e6, sum(1 for v in by.values() if v < 1e6)))
ik = sum(r['amt'] for r in inkind)
print('In-kind to America PAC attributed to Musk via a partnership (memo lines): $%.2fM in %d lines' % (ik / 1e6, len(inkind)))
print('Other memo lines (earmark/split notes, already in the totals above or duplicates): %d, $%.2fM' % (len(other_memo), sum(r['amt'] for r in other_memo) / 1e6))
print('Total incl. in-kind attributions: $%.2fM' % ((tot + ik) / 1e6))
print('Through the pre-general reports (latest receipt %s); post-general reports covering 15 Oct - 23 Nov are due 3 Dec.' % max(r['date'] for r in rows.values()))
# --- Texas Senate (Paxton vs Talarico): where Musk money went
tp = json.load(open(os.path.join(D, 'texas_pac_receipts_efile.json')))
tpr = sorted({(r['contribution_receipt_date'][:10], r.get('contributor_name'), float(r['contribution_receipt_amount'])) for r in tp if r.get('memo_code') != 'X'})
print('Texas PAC (C00960211) receipts:', tpr)
slf_in = sorted((r['date'], r['amt']) for r in cash if r['cid'] == 'C00571703')
print('Musk -> Senate Leadership Fund:', slf_in)
ie = json.load(open(os.path.join(D, 'tx_senate_ie_efile.json'))); seen = set(); byc = collections.defaultdict(float)
for r in ie:
    k = (r.get('committee_id'), r.get('transaction_id'), r.get('expenditure_amount'), r.get('candidate_id'))
    if k in seen: continue
    seen.add(k)
    pro = (r.get('candidate_id') == 'S6TX00388') == (r.get('support_oppose_indicator') == 'S')
    if pro: byc[(r.get('committee') or {}).get('name')] += float(r['expenditure_amount'] or 0)
print('Pro-Paxton / anti-Talarico independent spending, 24/48-hour reports, by committee ($M):', {k: round(v / 1e6, 2) for k, v in sorted(byc.items(), key=lambda x: -x[1])[:8]})
px = json.load(open(os.path.join(D, 'paxton_candidate_totals.json')))['results'][0]
print('Paxton campaign committee receipts, cycle to %s: $%.2fM' % (px['coverage_end_date'][:10], px['receipts'] / 1e6))
