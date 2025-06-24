# [BUILD] sudo docker build -f Dockerfile -t solace-geo-events-manager .
# [EXECUTE] sudo docker run --rm -v /mnt/d/Solace/Software/demo/Rome-Airport-ADR/adr1/googleGeoPath/pathfiles:/usr/src/myapp/geofiles --name geoBuilder solace-geo-events-manager tcps://mr-connection-sc3xt4qdp5v.messaging.solace.cloud:55443 perftestdemo mr-connection-sc3xt4qdp5v.messaging.solace.cloud:1883 solace-cloud-client ltg0ugtodbfe6pina9p7a2qb0b 20 walkpath10.csv 10 planetaxipath.csv 5 planetakeoffpath.csv 10 vehiclePath.csv
# [CLI] sudo docker exec -it geoBuilder /bin/bash
# [STOP] sudo docker stop geoBuilder


FROM ubuntu:24.04
WORKDIR /usr/src/myapp
RUN mkdir -p /usr/src/myapp/geofiles
ADD googleGeoPath /usr/src/myapp

ADD CAGFence /usr/src/myapp


RUN apt-get --assume-yes update
RUN apt-get --assume-yes install perl 
RUN apt-get --assume-yes install cpanminus
RUN apt-get --assume-yes install build-essential
RUN cpanm --force Net::MQTT::Simple 
RUN cpanm --force Getopt::Long 
RUN cpanm --force Time::HiRes 
RUN cpanm --force Net::MAC 
RUN cpanm --force Math::Trig 
RUN cpanm --force Geo::Calc::XS
RUN apt-get  --assume-yes install openjdk-8-jdk-headless


ENTRYPOINT [ "/bin/bash", "iterateKiosk.sh"]
CMD [""]