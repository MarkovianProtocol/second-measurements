# DigiD availability, with and without the maintenance windows

Markovian Protocol, 30 October 2026. A data note on Bert Hubert's "De IT-onmacht van de Nederlandse overheid" (berthub.eu, 26 October 2026), which quotes DigiD's availability as 99.56% with planned maintenance left out, and a member of parliament saying maintenance alone sometimes takes 12 hours a week.

The public records support both points and add a third. The ministry's figure is 99.57% for 2026 through August, down from 99.93% in 2024. Counting the maintenance windows, it would be at most 97.93%. And the outages Logius lists publicly add up to about 9 hours, against the roughly 25 that 99.57% implies.

| | Figure | Source |
|---|---|---|
| Availability 2024 / 2025 / 2026 (to August), maintenance windows excluded | 99.93% / 99.65% / 99.57% | Ministry of the Interior, answers to parliamentary questions, 2026D49475 |
| Norm | 99.5%, since 2012 | same |
| Planned maintenance | second Monday and second Wednesday of every month, 00:00–06:00; half of each window reserved for rollback | same; Logius maintenance calendar |
| Maintenance hours, January–August 2026 | 96 (8 months × 2 windows × 6 hours) | from the published calendar |
| Availability counting the windows as down, January–August | at most 97.93% | 99.57% × (5,832 − 96) / 5,832 hours |
| DigiD downtime implied by 99.57%, January–August | about 24.7 hours | (1 − 0.9957) × 5,736 hours |
| DigiD outages on Logius's public archive, 9 February–31 August | 5 entries, 9.2 hours (longest: 30–31 August, 4.5 hours; 6 May, 3.3 hours) | logius.nl/storing-en-onderhoud/archief, read 30 October |
| werkenvoornederland.nl served through Cloudflare | yes (Cloudflare addresses, `server: cloudflare`) | DNS and HTTP, 30 October |

- **"12 hours a week": right, in 8 of 12 months.** In 2026 the second Monday and the second Wednesday fall in the same week in 8 months, so that week carries 12 hours of planned maintenance; in April, July, September and December they fall a week apart. Over a year it is 144 hours, about six days.
- **The windows matter.** 99.57% only counts the time outside the windows. If DigiD is unavailable for the whole of each window, availability over the full clock is at most 97.93%. If the work takes less, it is between the two. The ministry's answer says half of each window is reserved for rollback but not how long DigiD is actually down.
- **Worth knowing: about 15 hours of 2026 downtime are not in the public outage list.** The ministry's 99.57% implies about 24.7 hours of downtime January to August. Logius's public archive lists 9.2 hours for DigiD from 9 February (where the archive begins) to 31 August. January and partial outages could account for some of the difference; the ministry's answer itself says an outage "does not immediately mean nobody can log in". Which hours make up the rest is a question for Logius.

What we could not check: whether DigiD is offline during the windows (its login service refuses automated requests, so we did not probe it), and January 2026, which predates the public archive.

Sources: B. Hubert, "De IT-onmacht van de Nederlandse overheid", 26 October 2026; Tweede Kamer documents 2026D44063 (questions) and 2026D49475 (answers), via berthub.eu/tkconv; Logius, Storingen en onderhoud, archief and onderhoudskalender (read 30 October 2026, saved copies in the folder beside this note, digid-availability-2026-10-30/).
