cd ~/second-measurements/rpki
P=/Users/colinwinter/venv313/bin/python
$P rrdp_manifests.py registro_br https://rpki-repo.registro.br/rrdp/notification.xml
$P rrdp_manifests.py idnic https://rpki-rrdp.idnic.net/rrdp/notification.xml
$P rrdp_manifests.py twnic https://rrdp.twnic.tw/rrdp/notification.xml
$P rrdp_manifests.py ripe_paas https://rrdp.paas.rpki.ripe.net/notification.xml
$P rrdp_manifests.py arin_rps https://rrdp-rps.arin.net/notification.xml
$P rrdp_manifests.py ripe https://rrdp.ripe.net/notification.xml
$P rrdp_manifests.py arin https://rrdp.arin.net/notification.xml
$P rrdp_manifests.py apnic https://rrdp.apnic.net/notification.xml
$P rrdp_manifests.py lacnic https://rrdp.lacnic.net/rrdp/notification.xml
$P rrdp_manifests.py afrinic https://rrdp.afrinic.net/notification.xml
echo ALLDONE
