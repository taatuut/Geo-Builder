# VIDEO

https://www.youtube.com/watch?v=Bu5GTQPmkqU

# CHECK DIFF

Command:

```
diff -r --exclude=".git" /Users/emilzegers/GitHub/acagnetti/Geo-Builder /Users/emilzegers/GitHub/taatuut/Geo-Builder > /Users/emilzegers/GitHub/taatuut/Geo-Builder/ezdiff.log
```

# (RE)BUILD DOCKER IMAGE

Clean first

Command:

```
docker builder prune -af && docker rm -f geoBuilder && docker rmi -f solace-geo-events-manager && docker image prune -f
```

Response (depending if both container and image exist) like:

```
ID                                              RECLAIMABLE     SIZE            LAST ACCESSED
nyx35v6a5p36i1251745gfpuw                       true    7.084MB         7 minutes ago
...
3g18m57g90833zbxcxfaodo7h                       true    179.7kB         7 minutes ago
Total:  557.9MB
Error response from daemon: No such container: geoBuilder
Untagged: solace-geo-events-manager:latest
Deleted: sha256:2ad94c2ece2167b83a6ab64ad946eb06589b789dcffa326400ac83beba23af17
...
Deleted: sha256:3290ae9701096532b1e1631db98e0dec3bf3a4ff679110dba62fa0b161e7fb30
Total reclaimed space: 0B
```

Command:

```
docker build -f Dockerfile -t solace-geo-events-manager .
```

# (RE)RUN DOCKER CONTAINER TO CREATE POLYGONS

Command:

```
docker run --rm --name geoBuilder -v /Users/emilzegers/GitHub/taatuut/Geo-Builder/data/Amsterdam-Airport-Schiphol-AMS:/usr/src/myapp/geofiles solace-geo-events-manager GEOFENCEONLY SECURITY ./geofiles/walkpaths.csv TAXIING ./geofiles/taxipaths.csv RUNWAY ./geofiles/runways.csv SHOP ./geofiles/shops.csv > js/genPolygons.js
```

Response `//... done Geofencing code generation, Exiting!`

# (RE)RUN DOCKER CONTAINER TO CREATE MENU

Command:

```
docker run --rm --name geoBuilder -v /Users/emilzegers/GitHub/taatuut/Geo-Builder/data/Amsterdam-Airport-Schiphol-AMS:/usr/src/myapp/geofiles solace-geo-events-manager GEOFENCEBUTTONSONLY SECURITY ./geofiles/walkpaths.csv TAXIING ./geofiles/taxipaths.csv RUNWAY ./geofiles/runways.csv SHOP ./geofiles/shops.csv > menu.html
```

Response `<!-- GEOFENCE PANEL HTML CODE GENERATION DONE! -->`

# (RE)RUN DOCKER CONTAINER WITH PEOPLE, PLANES, VEHICLES MOVING

Source environemtn variables first `source .env`

Command:

```
docker rm -f geoBuilder && docker run --rm --name $SOLACE_NAME -v /Users/emilzegers/GitHub/taatuut/Geo-Builder/data/Amsterdam-Airport-Schiphol-AMS:/usr/src/myapp/geofiles solace-geo-events-manager $SOLACE_TCP_PROTOCOL$SOLACE_HOST:$SOLACE_SMF_PORT $SOLACE_MESSAGE_VPN $SOLACE_HOST:$SOLACE_MQTT_PORT $SOLACE_USER $SOLACE_PASS 20 walkpaths.csv 3 taxipaths.csv 4 runways.csv 5 vehiclepaths.csv
```

NOTE: add ` > ez$SOLACE_NAME.log 2>&1` after command to direct output to log, use either `>` or `>>` to overwrite or append.

With 10.5 dev SA broker seems to start well:

```
rm: cannot remove 'nohup.out': No such file or directory
<!--6 arguments passed to script-->
<!--Geolocation Type selected: AIRCRAFT-->
requested to add Flight Number: 1
connnecting to ez-dt.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/taxipaths.csv
new Plane with flight number 1
MQTT broker disconnected! 
<!--6 arguments passed to script-->
<!--Geolocation Type selected: AIRCRAFT-->
requested to add Flight Number: 2
connnecting to ez-dt.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/taxipaths.csv
new Plane with flight number 2
MQTT broker disconnected! 
<!--5 arguments passed to script-->
<!--Geolocation Type selected: VEHICLE-->
requested to add Vehicle Number: 3
connnecting to ez-dt.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/vehiclepaths.csv
new Vehicle with number 3
MQTT broker disconnected! 
<!--5 arguments passed to script-->
<!--Geolocation Type selected: VEHICLE-->
requested to add Vehicle Number: 1
connnecting to ez-dt.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/vehiclepaths.csv
new Vehicle with number 1
MQTT broker disconnected! 
<!--5 arguments passed to script-->
<!--Geolocation Type selected: VEHICLE-->
requested to add Vehicle Number: 2
connnecting to ez-dt.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/vehiclepaths.csv
new Vehicle with number 2
MQTT broker disconnected! 
<!--5 arguments passed to script-->
<!--Geolocation Type selected: VEHICLE-->
requested to add Vehicle Number: 5
connnecting to ez-dt.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/vehiclepaths.csv
new Vehicle with number 5
MQTT broker disconnected! 
<!--6 arguments passed to script-->
<!--Geolocation Type selected: AIRCRAFT-->
requested to add Flight Number: 3
connnecting to ez-dt.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/taxipaths.csv
new Plane with flight number 3
MQTT broker disconnected! 
Aug 12, 2025 10:33:26 AM com.solacesystems.jcsmp.protocol.impl.TcpClientChannel info
INFO: Client-1: Connecting to host 'orig=tcps://ez-dt.messaging.solace.cloud:55443, scheme=tcps://, host=ez-dt.messaging.solace.cloud, port=55443' (host 1 of 1, smfclient 1, attempt 1 of 1, this_host_attempt: 1 of 1)
Aug 12, 2025 10:33:26 AM com.solacesystems.jcsmp.protocol.smf.SNIUtil setServerNames
INFO: Server Name Indication (SNI) automatically applied by using provided hostname
Aug 12, 2025 10:33:26 AM com.solacesystems.jcsmp.protocol.smf.SSLSmfClient logProtocols
INFO: SSLEngine Supported Protocols: [SSLV3, TLSV1, TLSV1.1, TLSV1.2]
Aug 12, 2025 10:33:26 AM com.solacesystems.jcsmp.protocol.smf.SSLSmfClient logProtocols
INFO: Application Specified Protocols: [SSLv3, TLSv1, TLSv1.1, TLSv1.2]
Aug 12, 2025 10:33:26 AM com.solacesystems.jcsmp.protocol.smf.SSLSmfClient logProtocols
INFO: Enabled Protocols: [SSLv3, TLSv1, TLSv1.1, TLSv1.2]
Aug 12, 2025 10:33:26 AM com.solacesystems.jcsmp.protocol.smf.SSLSmfClient logSuites
INFO: The following specified cipher suites are not supported: [TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA, SSL_RSA_WITH_3DES_EDE_CBC_SHA, SSL_RSA_WITH_RC4_128_SHA, SSL_RSA_WITH_RC4_128_MD5]
Aug 12, 2025 10:33:26 AM com.solacesystems.jcsmp.protocol.smf.SSLSmfClient logSuites
INFO: SSLEngine Supported Cipher Suites: [TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384, TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_128_CBC_SHA256, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256, TLS_RSA_WITH_AES_128_GCM_SHA256, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_256_GCM_SHA384, TLS_RSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384, TLS_RSA_WITH_AES_256_CBC_SHA]
Aug 12, 2025 10:33:26 AM com.solacesystems.jcsmp.protocol.smf.SSLSmfClient logSuites
INFO: Application Specified Cipher Suites: [TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA, SSL_RSA_WITH_3DES_EDE_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA256, TLS_RSA_WITH_AES_128_CBC_SHA, SSL_RSA_WITH_RC4_128_SHA, SSL_RSA_WITH_RC4_128_MD5, TLS_RSA_WITH_AES_128_GCM_SHA256, TLS_RSA_WITH_AES_256_GCM_SHA384, TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256, TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384]
Aug 12, 2025 10:33:26 AM com.solacesystems.jcsmp.protocol.smf.SSLSmfClient logSuites
INFO: Enabled Cipher Suites: [TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA256, TLS_RSA_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_AES_128_GCM_SHA256, TLS_RSA_WITH_AES_256_GCM_SHA384, TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256, TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384]
```
Then errors:

```
Aug 12, 2025 10:33:56 AM com.solacesystems.jcsmp.protocol.impl.TcpClientChannel info
INFO: Client-1: Connection attempt failed to host 'ez-dt.messaging.solace.cloud' ConnectException com.solacesystems.jcsmp.JCSMPTransportException: (Client name: e039fb44c783/7/000a0001/YWI_1WcmOs   Local port: -1   Remote addr: ez-dt.messaging.solace.cloud  Remote port: 55443) - Error communicating with the router. cause: java.nio.channels.IllegalBlockingModeException ((Client name: e039fb44c783/7/000a0001/YWI_1WcmOs   Local port: -1   Remote addr: ez-dt.messaging.solace.cloud  Remote port: 55443) - )
Aug 12, 2025 10:33:59 AM com.solacesystems.jcsmp.protocol.impl.TcpClientChannel info
INFO: Client-1: Channel Closed (smfclient 1)
Exception in thread "main" com.solacesystems.jcsmp.JCSMPTransportException: (Client name: e039fb44c783/7/000a0001/YWI_1WcmOs   Local port: -1   Remote addr: ez-dt.messaging.solace.cloud  Remote port: 55443) - Error communicating with the router.
        at com.solacesystems.jcsmp.protocol.impl.TcpChannel.executePostOnce(TcpChannel.java:253)
        at com.solacesystems.jcsmp.protocol.impl.ChannelOpStrategyClient.performOpen(ChannelOpStrategyClient.java:97)
        at com.solacesystems.jcsmp.protocol.impl.TcpClientChannel.performOpenSingle(TcpClientChannel.java:413)
        at com.solacesystems.jcsmp.protocol.impl.TcpClientChannel.access$800(TcpClientChannel.java:109)
        at com.solacesystems.jcsmp.protocol.impl.TcpClientChannel$ClientChannelConnect.call(TcpClientChannel.java:2495)
        at com.solacesystems.jcsmp.protocol.impl.TcpClientChannel.open(TcpClientChannel.java:389)
        at com.solacesystems.jcsmp.impl.JCSMPBasicSession.sniffRouter(JCSMPBasicSession.java:379)
        at com.solacesystems.jcsmp.impl.JCSMPBasicSession.connect(JCSMPBasicSession.java:1230)
        at CAGFence.main(CAGFence.java:81)
Caused by: java.nio.channels.IllegalBlockingModeException
        at sun.nio.ch.SocketAdaptor.connect(SocketAdaptor.java:103)
        at com.solacesystems.jcsmp.protocol.smf.SimpleSmfClient.open(SimpleSmfClient.java:896)
        at com.solacesystems.jcsmp.protocol.smf.ZSmfClient.open(ZSmfClient.java:62)
        at com.solacesystems.jcsmp.protocol.smf.SSLSmfClient.open(SSLSmfClient.java:89)
        at com.solacesystems.jcsmp.protocol.smf.SSLSmfClient.doPostNoResponse(SSLSmfClient.java:240)
        at com.solacesystems.jcsmp.protocol.smf.SimpleSmfClient.doPost(SimpleSmfClient.java:233)
        at com.solacesystems.jcsmp.protocol.impl.TcpChannel.executePostOnce(TcpChannel.java:196)
        ... 8 more
```

Then keeps saying:

```
generateGeolocationEvents.pl: connect: Connection refused
generateGeolocationEvents.pl: connect: Connection refused
generateGeolocationEvents.pl: connect: Connection refused
```

Because of SMF TLS? Can connect, see below:

```
nc -vz ez-dt.messaging.solace.cloud 55443
Connection to ez-dt.messaging.solace.cloud port 55443 [tcp/*] succeeded!
```

Test with SMF plain text port instead. Again errors:

```
rm: cannot remove 'nohup.out': No such file or directory
<!--6 arguments passed to script-->
<!--Geolocation Type selected: AIRCRAFT-->
requested to add Flight Number: 3
connnecting to ez-dt.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/taxipaths.csv
new Plane with flight number 3
MQTT broker disconnected! 
<!--6 arguments passed to script-->
<!--Geolocation Type selected: AIRCRAFT-->
requested to add Flight Number: 2
connnecting to ez-dt.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/taxipaths.csv
new Plane with flight number 2
MQTT broker disconnected! 
<!--6 arguments passed to script-->
<!--Geolocation Type selected: AIRCRAFT-->
requested to add Flight Number: 1
connnecting to ez-dt.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/taxipaths.csv
new Plane with flight number 1
MQTT broker disconnected! 
<!--5 arguments passed to script-->
<!--Geolocation Type selected: VEHICLE-->
requested to add Vehicle Number: 4
connnecting to ez-dt.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/vehiclepaths.csv
new Vehicle with number 4
MQTT broker disconnected! 
<!--5 arguments passed to script-->
<!--Geolocation Type selected: VEHICLE-->
requested to add Vehicle Number: 2
connnecting to ez-dt.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/vehiclepaths.csv
new Vehicle with number 2
MQTT broker disconnected! 
Aug 12, 2025 10:53:30 AM com.solacesystems.jcsmp.protocol.impl.TcpClientChannel info
INFO: Client-1: Connecting to host 'orig=tcp://ez-dt.messaging.solace.cloud:55555, scheme=tcp://, host=ez-dt.messaging.solace.cloud, port=55555' (host 1 of 1, smfclient 1, attempt 1 of 1, this_host_attempt: 1 of 1)
Aug 12, 2025 10:54:00 AM com.solacesystems.jcsmp.protocol.impl.TcpClientChannel info
INFO: Client-1: Connection attempt failed to host 'ez-dt.messaging.solace.cloud' ConnectException com.solacesystems.jcsmp.JCSMPTransportException: (Client name: 74ce131a74be/7/000a0001/2JOYbfW2ZC   Local port: -1   Remote addr: ez-dt.messaging.solace.cloud  Remote port: 55555) - Error communicating with the router. cause: java.nio.channels.IllegalBlockingModeException ((Client name: 74ce131a74be/7/000a0001/2JOYbfW2ZC   Local port: -1   Remote addr: ez-dt.messaging.solace.cloud  Remote port: 55555) - )
Aug 12, 2025 10:54:03 AM com.solacesystems.jcsmp.protocol.impl.TcpClientChannel info
INFO: Client-1: Channel Closed (smfclient 1)
Exception in thread "main" com.solacesystems.jcsmp.JCSMPTransportException: (Client name: 74ce131a74be/7/000a0001/2JOYbfW2ZC   Local port: -1   Remote addr: ez-dt.messaging.solace.cloud  Remote port: 55555) - Error communicating with the router.
        at com.solacesystems.jcsmp.protocol.impl.TcpChannel.executePostOnce(TcpChannel.java:253)
        at com.solacesystems.jcsmp.protocol.impl.ChannelOpStrategyClient.performOpen(ChannelOpStrategyClient.java:97)
        at com.solacesystems.jcsmp.protocol.impl.TcpClientChannel.performOpenSingle(TcpClientChannel.java:413)
        at com.solacesystems.jcsmp.protocol.impl.TcpClientChannel.access$800(TcpClientChannel.java:109)
        at com.solacesystems.jcsmp.protocol.impl.TcpClientChannel$ClientChannelConnect.call(TcpClientChannel.java:2495)
        at com.solacesystems.jcsmp.protocol.impl.TcpClientChannel.open(TcpClientChannel.java:389)
        at com.solacesystems.jcsmp.impl.JCSMPBasicSession.sniffRouter(JCSMPBasicSession.java:379)
        at com.solacesystems.jcsmp.impl.JCSMPBasicSession.connect(JCSMPBasicSession.java:1230)
        at CAGFence.main(CAGFence.java:81)
Caused by: java.nio.channels.IllegalBlockingModeException
        at sun.nio.ch.SocketAdaptor.connect(SocketAdaptor.java:103)
        at com.solacesystems.jcsmp.protocol.smf.SimpleSmfClient.open(SimpleSmfClient.java:896)
        at com.solacesystems.jcsmp.protocol.smf.SimpleSmfClient.doPostNoResponse(SimpleSmfClient.java:316)
        at com.solacesystems.jcsmp.protocol.smf.SimpleSmfClient.doPost(SimpleSmfClient.java:233)
        at com.solacesystems.jcsmp.protocol.impl.TcpChannel.executePostOnce(TcpChannel.java:196)
        ... 8 more
```

Was relatively old broker version. Test with 10.25 Ent 250 HA, Enable SMF Host plain text, use port 55555, Enable MQTT Host plain text, use port 1883.

Still same error but continues:

```
rm: cannot remove 'nohup.out': No such file or directory
<!--5 arguments passed to script-->
<!--Geolocation Type selected: VEHICLE-->
requested to add Vehicle Number: 2
connnecting to mr-connection-fow7imlj00r.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/vehiclepaths.csv
new Vehicle with number 2
MQTT broker disconnected! 
Aug 12, 2025 11:14:16 AM com.solacesystems.jcsmp.protocol.impl.TcpClientChannel info
INFO: Client-1: Connecting to host 'orig=tcp://mr-connection-fow7imlj00r.messaging.solace.cloud:55555, scheme=tcp://, host=mr-connection-fow7imlj00r.messaging.solace.cloud, port=55555' (host 1 of 1, smfclient 1, attempt 1 of 1, this_host_attempt: 1 of 1)
Aug 12, 2025 11:14:46 AM com.solacesystems.jcsmp.protocol.impl.TcpClientChannel info
INFO: Client-1: Connection attempt failed to host 'mr-connection-fow7imlj00r.messaging.solace.cloud' ConnectException com.solacesystems.jcsmp.JCSMPTransportException: (Client name: 093b3221f426/7/000a0001/gVQlD_YH2z   Local port: -1   Remote addr: mr-connection-fow7imlj00r.messaging.solace.cloud  Remote port: 55555) - Timeout happened when reading response from the router. cause: java.net.SocketTimeoutException ((Client name: 093b3221f426/7/000a0001/gVQlD_YH2z   Local port: -1   Remote addr: mr-connection-fow7imlj00r.messaging.solace.cloud  Remote port: 55555) - )
Aug 12, 2025 11:14:49 AM com.solacesystems.jcsmp.protocol.impl.TcpClientChannel info
INFO: Client-1: Channel Closed (smfclient 1)
Exception in thread "main" com.solacesystems.jcsmp.JCSMPTransportException: (Client name: 093b3221f426/7/000a0001/gVQlD_YH2z   Local port: -1   Remote addr: mr-connection-fow7imlj00r.messaging.solace.cloud  Remote port: 55555) - Timeout happened when reading response from the router.
        at com.solacesystems.jcsmp.protocol.impl.TcpChannel.executePostOnce(TcpChannel.java:240)
        at com.solacesystems.jcsmp.protocol.impl.ChannelOpStrategyClient.performOpen(ChannelOpStrategyClient.java:97)
        at com.solacesystems.jcsmp.protocol.impl.TcpClientChannel.performOpenSingle(TcpClientChannel.java:413)
        at com.solacesystems.jcsmp.protocol.impl.TcpClientChannel.access$800(TcpClientChannel.java:109)
        at com.solacesystems.jcsmp.protocol.impl.TcpClientChannel$ClientChannelConnect.call(TcpClientChannel.java:2495)
        at com.solacesystems.jcsmp.protocol.impl.TcpClientChannel.open(TcpClientChannel.java:389)
        at com.solacesystems.jcsmp.impl.JCSMPBasicSession.sniffRouter(JCSMPBasicSession.java:379)
        at com.solacesystems.jcsmp.impl.JCSMPBasicSession.connect(JCSMPBasicSession.java:1230)
        at CAGFence.main(CAGFence.java:81)
Caused by: java.net.SocketTimeoutException
        at sun.nio.ch.SocketAdaptor.connect(SocketAdaptor.java:129)
        at com.solacesystems.jcsmp.protocol.smf.SimpleSmfClient.open(SimpleSmfClient.java:896)
        at com.solacesystems.jcsmp.protocol.smf.SimpleSmfClient.doPostNoResponse(SimpleSmfClient.java:316)
        at com.solacesystems.jcsmp.protocol.smf.SimpleSmfClient.doPost(SimpleSmfClient.java:233)
        at com.solacesystems.jcsmp.protocol.impl.TcpChannel.executePostOnce(TcpChannel.java:196)
        ... 8 more
<!--4 arguments passed to script-->
<!--Geolocation Type selected: PEOPLE-->
connnecting to mr-connection-fow7imlj00r.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/walkpaths.csv
new person with mac address 6A:0B:33:FB:E0:F4
random Chosen path 5 for person 6A:0B:33:FB:E0:F4 between 7 paths that includes 5 coordinates
person with mac address 6A:0B:33:FB:E0:F4 moved in path number 5 to longitude 4.7609446 and latitude 52.3127359
person with mac address 6A:0B:33:FB:E0:F4 moved in path number 5 to longitude 4.760966 and latitude 52.3128408
person with mac address 6A:0B:33:FB:E0:F4 moved in path number 5 to longitude 4.7614488 and latitude 52.3129556
person with mac address 6A:0B:33:FB:E0:F4 moved in path number 5 to longitude 4.7618297 and latitude 52.3124407
person with mac address 6A:0B:33:FB:E0:F4 moved in path number 5 to longitude 4.7618994 and latitude 52.3115585
MQTT broker disconnected! 
<!--4 arguments passed to script-->
<!--Geolocation Type selected: PEOPLE-->
connnecting to mr-connection-fow7imlj00r.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/walkpaths.csv
new person with mac address F8:88:11:0D:87:FB
random Chosen path 5 for person F8:88:11:0D:87:FB between 7 paths that includes 5 coordinates
person with mac address F8:88:11:0D:87:FB moved in path number 5 to longitude 4.7609446 and latitude 52.3127359
person with mac address F8:88:11:0D:87:FB moved in path number 5 to longitude 4.760966 and latitude 52.3128408
person with mac address F8:88:11:0D:87:FB moved in path number 5 to longitude 4.7614488 and latitude 52.3129556
person with mac address F8:88:11:0D:87:FB moved in path number 5 to longitude 4.7618297 and latitude 52.3124407
person with mac address F8:88:11:0D:87:FB moved in path number 5 to longitude 4.7618297 and latitude 52.3124407
person with mac address F8:88:11:0D:87:FB moved in path number 5 to longitude 4.7618994 and latitude 52.3115585
MQTT broker disconnected! 
<!--4 arguments passed to script-->
<!--Geolocation Type selected: PEOPLE-->
connnecting to mr-connection-fow7imlj00r.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/walkpaths.csv
new person with mac address 55:16:58:9C:FD:3C
random Chosen path 7 for person 55:16:58:9C:FD:3C between 7 paths that includes 5 coordinates
person with mac address 55:16:58:9C:FD:3C moved in path number 7 to longitude 4.7618297 and latitude 52.3115749
person with mac address 55:16:58:9C:FD:3C moved in path number 7 to longitude 4.7609446 and latitude 52.3127359
person with mac address 55:16:58:9C:FD:3C moved in path number 7 to longitude 4.7609446 and latitude 52.3127359
person with mac address 55:16:58:9C:FD:3C moved in path number 7 to longitude 4.760966 and latitude 52.3128408
person with mac address 55:16:58:9C:FD:3C moved in path number 7 to longitude 4.7614488 and latitude 52.3129556
person with mac address 55:16:58:9C:FD:3C moved in path number 7 to longitude 4.7614488 and latitude 52.3129556
person with mac address 55:16:58:9C:FD:3C moved in path number 7 to longitude 4.76176 and latitude 52.3123981
person with mac address 55:16:58:9C:FD:3C moved in path number 7 to longitude 4.76176 and latitude 52.3123981
person with mac address 55:16:58:9C:FD:3C moved in path number 7 to longitude 4.76176 and latitude 52.3123981
person with mac address 55:16:58:9C:FD:3C moved in path number 7 to longitude 4.76176 and latitude 52.3123981
person with mac address 55:16:58:9C:FD:3C moved in path number 7 to longitude 4.7618297 and latitude 52.3115749
MQTT broker disconnected! 
<!--4 arguments passed to script-->
<!--Geolocation Type selected: PEOPLE-->
connnecting to mr-connection-fow7imlj00r.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/walkpaths.csv
new person with mac address 06:C9:BF:17:AB:22
random Chosen path 7 for person 06:C9:BF:17:AB:22 between 7 paths that includes 5 coordinates
person with mac address 06:C9:BF:17:AB:22 moved in path number 7 to longitude 4.7609446 and latitude 52.3127359
person with mac address 06:C9:BF:17:AB:22 moved in path number 7 to longitude 4.760966 and latitude 52.3128408
person with mac address 06:C9:BF:17:AB:22 moved in path number 7 to longitude 4.760966 and latitude 52.3128408
person with mac address 06:C9:BF:17:AB:22 moved in path number 7 to longitude 4.7614488 and latitude 52.3129556
person with mac address 06:C9:BF:17:AB:22 moved in path number 7 to longitude 4.76176 and latitude 52.3123981
person with mac address 06:C9:BF:17:AB:22 moved in path number 7 to longitude 4.76176 and latitude 52.3123981
person with mac address 06:C9:BF:17:AB:22 moved in path number 7 to longitude 4.76176 and latitude 52.3123981
person with mac address 06:C9:BF:17:AB:22 moved in path number 7 to longitude 4.7618297 and latitude 52.3115749
MQTT broker disconnected! 
<!--4 arguments passed to script-->
<!--Geolocation Type selected: PEOPLE-->
connnecting to mr-connection-fow7imlj00r.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/walkpaths.csv
new person with mac address FE:9D:E7:A1:30:5C
random Chosen path 6 for person FE:9D:E7:A1:30:5C between 7 paths that includes 4 coordinates
person with mac address FE:9D:E7:A1:30:5C moved in path number 6 to longitude 4.7618297 and latitude 52.3115749
person with mac address FE:9D:E7:A1:30:5C moved in path number 6 to longitude 4.761245 and latitude 52.3121915
person with mac address FE:9D:E7:A1:30:5C moved in path number 6 to longitude 4.761245 and latitude 52.3121915
person with mac address FE:9D:E7:A1:30:5C moved in path number 6 to longitude 4.7612396 and latitude 52.3123161
person with mac address FE:9D:E7:A1:30:5C moved in path number 6 to longitude 4.7612396 and latitude 52.3123161
person with mac address FE:9D:E7:A1:30:5C moved in path number 6 to longitude 4.7612396 and latitude 52.3123161
person with mac address FE:9D:E7:A1:30:5C moved in path number 6 to longitude 4.7612396 and latitude 52.3123161
person with mac address FE:9D:E7:A1:30:5C moved in path number 6 to longitude 4.76176 and latitude 52.3123259
person with mac address FE:9D:E7:A1:30:5C moved in path number 6 to longitude 4.7618297 and latitude 52.3115749
MQTT broker disconnected! 
<!--4 arguments passed to script-->
<!--Geolocation Type selected: PEOPLE-->
connnecting to mr-connection-fow7imlj00r.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/walkpaths.csv
new person with mac address 5C:C3:27:55:7D:F3
random Chosen path 6 for person 5C:C3:27:55:7D:F3 between 7 paths that includes 4 coordinates
person with mac address 5C:C3:27:55:7D:F3 moved in path number 6 to longitude 4.761245 and latitude 52.3121915
person with mac address 5C:C3:27:55:7D:F3 moved in path number 6 to longitude 4.7612396 and latitude 52.3123161
person with mac address 5C:C3:27:55:7D:F3 moved in path number 6 to longitude 4.7612396 and latitude 52.3123161
person with mac address 5C:C3:27:55:7D:F3 moved in path number 6 to longitude 4.7612396 and latitude 52.3123161
person with mac address 5C:C3:27:55:7D:F3 moved in path number 6 to longitude 4.7612396 and latitude 52.3123161
person with mac address 5C:C3:27:55:7D:F3 moved in path number 6 to longitude 4.7612396 and latitude 52.3123161
person with mac address 5C:C3:27:55:7D:F3 moved in path number 6 to longitude 4.7612396 and latitude 52.3123161
person with mac address 5C:C3:27:55:7D:F3 moved in path number 6 to longitude 4.7612396 and latitude 52.3123161
person with mac address 5C:C3:27:55:7D:F3 moved in path number 6 to longitude 4.7612396 and latitude 52.3123161
person with mac address 5C:C3:27:55:7D:F3 moved in path number 6 to longitude 4.7612396 and latitude 52.3123161
person with mac address 5C:C3:27:55:7D:F3 moved in path number 6 to longitude 4.76176 and latitude 52.3123259
person with mac address 5C:C3:27:55:7D:F3 moved in path number 6 to longitude 4.7618297 and latitude 52.3115749
MQTT broker disconnected! 
<!--4 arguments passed to script-->
<!--Geolocation Type selected: PEOPLE-->
connnecting to mr-connection-fow7imlj00r.messaging.solace.cloud:1883...
logged in
Google maps export file filepath and name: ./geofiles/walkpaths.csv
new person with mac address 2A:F9:8A:E8:39:54
random Chosen path 7 for person 2A:F9:8A:E8:39:54 between 7 paths that includes 5 coordinates
person with mac address 2A:F9:8A:E8:39:54 moved in path number 7 to longitude 4.7618297 and latitude 52.3115749
person with mac address 2A:F9:8A:E8:39:54 moved in path number 7 to longitude 4.7618297 and latitude 52.3115749
person with mac address 2A:F9:8A:E8:39:54 moved in path number 7 to longitude 4.7618297 and latitude 52.3115749
person with mac address 2A:F9:8A:E8:39:54 moved in path number 7 to longitude 4.7618297 and latitude 52.3115749
person with mac address 2A:F9:8A:E8:39:54 moved in path number 7 to longitude 4.7618297 and latitude 52.3115749
person with mac address 2A:F9:8A:E8:39:54 moved in path number 7 to longitude 4.7609446 and latitude 52.3127359
person with mac address 2A:F9:8A:E8:39:54 moved in path number 7 to longitude 4.760966 and latitude 52.3128408
person with mac address 2A:F9:8A:E8:39:54 moved in path number 7 to longitude 4.760966 and latitude 52.3128408
person with mac address 2A:F9:8A:E8:39:54 moved in path number 7 to longitude 4.7614488 and latitude 52.3129556
person with mac address 2A:F9:8A:E8:39:54 moved in path number 7 to longitude 4.7614488 and latitude 52.3129556
person with mac address 2A:F9:8A:E8:39:54 moved in path number 7 to longitude 4.7614488 and latitude 52.3129556
person with mac address 2A:F9:8A:E8:39:54 moved in path number 7 to longitude 4.76176 and latitude 52.3123981
person with mac address 2A:F9:8A:E8:39:54 moved in path number 7 to longitude 4.76176 and latitude 52.3123981
person with mac address 2A:F9:8A:E8:39:54 moved in path number 7 to longitude 4.7618297 and latitude 52.3115749
MQTT broker disconnected! 
```

Strange, running again few more times and SMF error does not occur anymore. See log file `ezgeoBuilder.log`.

# START WEBSERVER

Open a terminal in repo home folder.

Command:

```
python3 -m http.server 23432 --directory .
```

`EOF`