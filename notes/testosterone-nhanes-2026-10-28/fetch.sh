#!/bin/sh
# Downloads the CDC NHANES files analyze.py reads into nhanes/. Check them against SHA256SUMS.
mkdir -p nhanes
curl -sf -o nhanes/SSCHL_A.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/1999/DataFiles/SSCHL_A.xpt
curl -sf -o nhanes/SSCHL_B.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2001/DataFiles/SSCHL_B.xpt
curl -sf -o nhanes/SSCHL_C.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2003/DataFiles/SSCHL_C.xpt
curl -sf -o nhanes/TST_G.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2011/DataFiles/TST_G.xpt
curl -sf -o nhanes/TST_H.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/TST_H.xpt
curl -sf -o nhanes/TST_I.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2015/DataFiles/TST_I.xpt
curl -sf -o nhanes/TST_L.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2021/DataFiles/TST_L.xpt
curl -sf -o nhanes/DEMO.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/1999/DataFiles/DEMO.xpt
curl -sf -o nhanes/DEMO_B.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2001/DataFiles/DEMO_B.xpt
curl -sf -o nhanes/DEMO_C.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2003/DataFiles/DEMO_C.xpt
curl -sf -o nhanes/DEMO_G.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2011/DataFiles/DEMO_G.xpt
curl -sf -o nhanes/DEMO_H.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DEMO_H.xpt
curl -sf -o nhanes/DEMO_I.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2015/DataFiles/DEMO_I.xpt
curl -sf -o nhanes/DEMO_L.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2021/DataFiles/DEMO_L.xpt
curl -sf -o nhanes/PH.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/1999/DataFiles/PH.xpt
curl -sf -o nhanes/PH_B.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2001/DataFiles/PH_B.xpt
curl -sf -o nhanes/PH_C.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2003/DataFiles/PH_C.xpt
curl -sf -o nhanes/FASTQX_G.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2011/DataFiles/FASTQX_G.xpt
curl -sf -o nhanes/FASTQX_H.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/FASTQX_H.xpt
curl -sf -o nhanes/FASTQX_I.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2015/DataFiles/FASTQX_I.xpt
curl -sf -o nhanes/FASTQX_L.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2021/DataFiles/FASTQX_L.xpt
curl -sf -o nhanes/RXQ_RX.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/1999/DataFiles/RXQ_RX.xpt
curl -sf -o nhanes/RXQ_RX_B.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2001/DataFiles/RXQ_RX_B.xpt
curl -sf -o nhanes/RXQ_RX_C.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2003/DataFiles/RXQ_RX_C.xpt
curl -sf -o nhanes/RXQ_RX_G.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2011/DataFiles/RXQ_RX_G.xpt
curl -sf -o nhanes/RXQ_RX_H.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/RXQ_RX_H.xpt
curl -sf -o nhanes/RXQ_RX_I.xpt https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2015/DataFiles/RXQ_RX_I.xpt
