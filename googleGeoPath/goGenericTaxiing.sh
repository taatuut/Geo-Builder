# Command line arguments: <PATHNUMBER> <PATHFILE> <MQTTHOST> <USER> <PASSWORD>
nohup /bin/perl generateGeolocationEvents.pl AIRCRAFT TAXIING $1 $2 $3 $4 $5 & 
