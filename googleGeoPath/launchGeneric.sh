# Command line arguments: <MQTTHOST> <USER> <PASSWORD> <PEOPLENUMBER> <WALKPATHFILE> <PLANETAXINUMBER> <PLANETAXIPATHFILE> <PLANETAKEOFFNUMBER> <PLANETAKEOFFPATHFILE> <VEHICLENUMBER> <VEHICLEPATHFILE>


# launch asyncronously instances of single people walking along paths in input csv file (google maps export)
for z in `seq 1 $4`; do sh ./goGenericPeople.sh ./geofiles/$5 $1 $2 $3; done
# launch asyncronously instances of single planes taxiing along paths in input csv file (google maps export)
for i in `seq 1 $6`; do sh ./goGenericTaxiing.sh $i ./geofiles/$7 $1 $2 $3; done
# launch asyncronously instances of single vehicles driving along path in input csv file (google maps export)
for t in `seq 1 ${10}`; do sh ./goGenericVehicle.sh $t ./geofiles/${11} $1 $2 $3;done
# launch syncronously instances of single planes in runways along patch in input csv file (google maps export)
for y in `seq 1 $8`; do sh ./goGenericRunway.sh $y ./geofiles/$9 $1 $2 $3; done
