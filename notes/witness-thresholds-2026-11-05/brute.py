"""Brute force: with n witnesses, m malicious, threshold t, can two consumers accept different checkpoints?
A split view needs two quorums (size >= t) whose overlap holds no honest witness (honest witnesses sign one view only).
Checks every malicious set and every pair of t-subsets; compares with Lavagnino's t >= (n+m+1)/2."""
from itertools import combinations
def split_possible(n, m, t):
    W = range(n); bad = set(range(m))  # by symmetry any m witnesses
    for A in combinations(W, t):
        for B in combinations(W, t):
            if not (set(A) & set(B)) - bad: return True
    return False
mism = 0
for n in range(1, 10):
    for m in range(0, n + 1):
        for t in range(1, n + 1):
            if split_possible(n, m, t) == (t >= (n + m + 1) / 2): mism += 1; print("MISMATCH", n, m, t)
print("checked n=1..9 every m,t; mismatches:", mism)
for t in range(1, 8):
    ok = [m for m in range(8) if not split_possible(7, m, t)]
    print(f"7 witnesses, threshold {t}: survives up to {max(ok) if ok else 'none (even 0 fails)'} malicious")
