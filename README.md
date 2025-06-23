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
3. *[OPTIONAL]* run the geo location generator to publish events to the Solace Broker
4. Use a HTML/javascript client template to visualize geo location events in a web browser
5. Leverage geographical Fences with Polygons designed in Google Maps Designer (step 1) to detect moving Objects entering a geographical zone and react by publishing new events to the Solace Broker

**INSTRUCTIONS**
In order to experience Geo Location Events you can use geoBuilder, A Solace Broker and a web browser
- *[OPTIONAL]* In case you do not have access to applications that generate geo location events, Google Maps Editor allow to create vector paths and polygons for geofences  
![image](https://github.com/user-attachments/assets/cf72f3b1-1fbb-449a-a85c-6bf46025235c)


