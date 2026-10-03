# Review gate

No page in this repository is published, and no null row is posted, until an independent pass has done the following against the page and its `exhibits/` folder, and every finding has been fixed:

1. Extract every number, count, percentage, date and named entity on the page (lede, short version, tables, exhibits, questions, limits).
2. Re-derive each from the exhibit files or by reading the script that computed it. A number with no file behind it is an error until the file is added.
3. Check every quotation against the saved copy of its source, word for word.
4. Check internal consistency: lede, short version, tables, exhibits, README and dataset row must agree; "all N" must be backed by the full data.
5. Verify `exhibits/SHA256SUMS` against the files, and that every quoted source and every API response behind a headline number is in the folder.
6. Run the same pass again after the fixes.

Corrections found after publication are made on the page, re-stamped, and recorded under "Our own mistakes" on the track record. The first full pass, on 3 October 2026, found errors on twelve of fifteen pages, six of them changing a finding; all are listed there.
