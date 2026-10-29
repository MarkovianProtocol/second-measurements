# Men's testosterone in NHANES: low levels are common, treatment is rare, and the trend depends on the lab method

Markovian Protocol, 28 October 2026. A data note on two sentences from NIH Director Jay Bhattacharya (Fox News Digital interview, republished by FOX 11 Los Angeles, 24 October 2026): "testosterone levels in the American male population have been declining over the last decades" and "There are under-diagnosed testosterone deficiencies."

The national data supports the second sentence. About one in five men has a morning testosterone level below 300 ng/dL, and about one or two in a hundred of them take testosterone. The first sentence needs care. NHANES, the CDC survey that draws blood from a national sample, changed lab methods between 2004 and 2011. On a single method, levels rose from 2011 to 2023. The published support for a decline over decades is a Massachusetts cohort study, 1987–2004.

| NHANES cycle | Lab method | Men 20+ tested | Median total testosterone (ng/dL) | Men 20–39 | Untreated men below 300, morning draw | Of men below 300 (morning), share with a testosterone prescription |
|---|---|---|---|---|---|---|
| 1999–2000 | Roche Elecsys immunoassay (surplus serum) | 246 | 521 | 591 | 9.4% | 0 of 29 |
| 2001–2002 | same | 366 | 471 | 528 | 14.8% | 0 of 67 |
| 2003–2004 | same | 326 | 484 | 530 | 14.7% | 0 of 49 |
| 2011–2012 | CDC isotope-dilution LC-MS/MS | 2,409 | 384 | 417 | 21.9% | 1.5% (1 of 294) |
| 2013–2014 | same | 2,533 | 388 | 413 | 17.9% | 2.3% (3 of 225) |
| 2015–2016 | same | 2,467 | 394 | 422 | 20.1% | 0.8% (3 of 256) |
| 2021–2023 | same | 2,514 | 429 | 445 | 19.6% (all men; no prescription data) | not recorded (no drug names in this cycle's file) |

Medians and percentages use the survey's sample weights. NHANES 2017–2018 measured no total testosterone.

- **Under-diagnosis: supported.** In every cycle since 2011, about a fifth of men 20 and older not taking testosterone (all men in 2021–2023) had a morning level below 300 ng/dL, the cut-off in the American Urological Association's 2018 guideline. Of all men below 300 in a morning draw, 0.8% to 2.3% reported a testosterone prescription. One blood draw is not a diagnosis (guidelines ask for two low morning readings and symptoms), so not every man below 300 here is deficient. The gap between low levels and treatment is still large.
- **The decline: worth knowing before someone uses it against the claim.** Set the NHANES cycles side by side and the median falls from about 500 to 384, but the drop falls in the 2004–2011 gap where CDC switched from an immunoassay to mass spectrometry, so it cannot be read as a change in men. On the same method, the median rose from 384 (2011–2012) to 429 (2021–2023), and for men 20–39 from 417 to 445. Anyone who wants to dispute the decline will reach for this series. The firmer ground is Travison and colleagues (Journal of Clinical Endocrinology & Metabolism, 2007): in the Massachusetts Male Aging Study, men 45–79 near Boston, 1987–2004, "The age-matched time trend is −1.2% per year", and the authors found "a substantial age-independent decline in T that does not appear to be attributable" to the health and lifestyle changes they measured.
- **A number in the same article that the data does not support.** Adm. Brian Christine, quoted in the same piece, said average male testosterone was "well over 650" in the mid-1970s and is "approaching 350" now. In NHANES the national median has been 384 to 429 ng/dL since 2011. NHANES has no 1970s testosterone measurements to check the first figure against.

What we could not check: testosterone before 1999 in a national sample; how the 1999–2004 immunoassay compares with mass spectrometry on the same blood; and prescriptions in 2021–2023.

Sources: CDC NHANES laboratory files SSCHL_A/B/C (1999–2004), TST_G/H/I (2011–2016), TST_L (2021–2023), with DEMO, the fasting questionnaire (session) and prescription files for each cycle, wwwn.cdc.gov/nchs/nhanes, downloaded 28 October 2026; FOX 11 Los Angeles, "Trump officials warn decades-long decline among American men could carry national security consequences", 24 October 2026 (from Fox News Digital); Travison TG et al., "A population-level decline in serum testosterone levels in American men", J Clin Endocrinol Metab 2007;92(1):196–202 (PubMed 17062768). The script (analyze.py), a download script for the 27 CDC files it reads (fetch.sh), its output (results.json) and checksums of every file are in the folder beside this note (testosterone-nhanes-2026-10-28/). Run: sh fetch.sh && shasum -a 256 -c SHA256SUMS && python3 analyze.py (needs pandas and numpy).
