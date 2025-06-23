![image](https://github.com/user-attachments/assets/36af231d-2610-451f-8fe7-d8af6e7a2a12)
# Geo-Guilder
This code allows to simulate Geolocation events about People walking, moving vehicles, airplane taxiing and taking off/ landing... or pretty much anything that moves and produces events!. There is also a html/javascript client to visualize events on a google map. This work is easily usable to represent geo events anywhere in the world

It can be used to: 
* simulate / generate geo location events
* publish (**liberate**) these events to a Solace Event Broker
* visualize these events on a Google Maps with moving icons
* enable **democratize** of geo location events to any applications with Solace Native Multi protocol capabilities 
* support polygons for fence detection to detect object entering a geographical 'zone' and **react** creating events back to the Solace broker


***Anybody*** can try generating / visualizing / consuming geo location events with **geoBuilder** with 3 to 5 simple steps:
1. *[OPTIONAL]* if you do not have access to geo location events, you can design them by using the [Google Maps Designer](https://www.google.com/maps/about/mymaps/)
2. Set up a Solace broker (check the [try Solace page](https://solace.com/try-it-now/) for a free trial)
3. *[OPTIONAL]* run the geo location event generator to publish events to the Solace Broker
4. Use a HTML/javascript client template to visualize geo location events in a web browser
5. Leverage geographical Fences with Polygons designed in Google Maps Designer (step 1) to detect moving Objects entering a geographical zone and react by publishing new events to the Solace Broker

**INSTRUCTIONS**
In order to experience Geo Location Events you can use geoBuilder, A Solace Broker and a web browser
- *[OPTIONAL]* In case you do not have access to applications that generate geo location events, Google Maps Editor allow to create vector paths and polygons for geofences
  - Open [Google Maps Designer](https://www.google.com/maps/about/mymaps/)
  ![image](https://github.com/user-attachments/assets/d7d47e56-5184-4f4b-a86c-dcb8814e8d9a)
  - log in to the Editor
  ![image](https://github.com/user-attachments/assets/507ed8a3-e482-40bd-ae74-2d2ac987a4e2)  
  - Draw your vector path and polygonsin different 'levels' (eg. People, Vehicles, planes, polygons etc..)
  ![image](https://github.com/user-attachments/assets/cf72f3b1-1fbb-449a-a85c-6bf46025235c)
  - Export your vector path and polygons 'levels' to csv files
  ![image](https://github.com/user-attachments/assets/be2358d3-5a92-4b53-9d21-a358ec1c0e48)


- Set up a Solace Broker (if you do not have access to an existing Solace broker)
  - go to [try Solace page](https://solace.com/try-it-now/) and choose betweem a Self Managed or Cloud Managed broker and follow insructions
  ![image](https://github.com/user-attachments/assets/9e609873-ced3-4b9a-84f1-d8b89378b0fc)

- *[OPTIONAL]* if you have designed you own vector path and polygons using the Google maps editor and exported them to csv you can run the geo location event generator
  - donwload docker container image of the geoBuilder geo locaion event Generator and fence detection engine
  - run the docker container:
    
      `sudo docker run --rm -v **<googleMapsExportFilePath>**:/usr/src/myapp/geofiles --name geoBuilder solace-geo-events-manager
       **<tcps://SMFSolaceBrokerURL:SMFsolaceBrokerPort>** **<solaceBrokerVPNName>** **<MQTTsolaceBrokerURL:MQTTsolaceBrokerPort>** **<solaceUSer>**
       **<solacePassword>** **<numberOfPeople>** **<peopleWalkingPathFile>** **<numberOfPlanesTaxiing>** **<planesTaxiingPathFile>** **<numberOfPlanesTakingOff>**
       **<planesTakingOffPathFile>** **<numberOfVehicles>** **<VehiclesPathFile>**` 

      `sudo docker run --rm -v /mnt/d/Solace/Software/demo/Rome-Airport-ADR/adr1/googleGeoPath/pathfiles:/usr/src/myapp/geofiles --name geoBuilder solace-geo-events-manager         tcps://mr-connection-sc3xt4qdp5v.messaging.solace.cloud:55443 perftestdemo mr-connection-sc3xt4qdp5v.messaging.solace.cloud:1883 solace-cloud-client
       ltg0ugtodbfe6pina9p7a2qb0b 20 walkpath10.csv 10 planetaxipath.csv 5 planetakeoffpath.csv 10 vehiclePath.csv` 


