import sqlite3
c = sqlite3.connect("file:/home/mkv/markovian/witness/witness.db?mode=ro", uri=True)
q = """select date(cosigned_at,'unixepoch') d, count(*), count(distinct size), min(size), max(size)
       from cosigned_history where origin='whisper.online/ledger/g2' group by d order by d"""
for r in c.execute(q): print(*r, sep="\t")
