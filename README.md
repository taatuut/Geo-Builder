![image](https://github.com/user-attachments/assets/36af231d-2610-451f-8fe7-d8af6e7a2a12)
# Geo-Guilder
This code allows to simulate Geolocation events about People walking, moving vehicles, airplane taxiing and taking off/ landing... or pretty much anything that moves and produces events!. There is also a html/javascript client to visualize events on a google map. This work is easily usable to represent geo events anywhere in the world

It can be used to: 
* simulate / generate geo location events
* publish (**liberate**) these events to a Solace Event Broker
* visualize these events on a Google Maps with moving icons
* enable **democratize** of geo location events to any applications with Solace Native Multi protocol capabilities 
* support polygons for fence detection to detect object entering a geographical 'zone' and **react** creating events back to the Solace broker

Anybody can try generating / visualizing / consuming geo location events with **geoBuilder** with 3 simple steps:
1. [OPTIONAL] if you do not have access to geo location events, you can simulate them by using the Google Maps Designer
2. Set up a Solace broker (check the [try Solace page](https://solace.com/try-it-now/) for a free trial)
