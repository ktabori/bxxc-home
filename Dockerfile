FROM dockerfile/ubuntu



RUN apt-get update
RUN apt-get -y install git build-essential curl
RUN apt-get -y install nodejs
RUN apt-get -y install npm
RUN apt-get clean 
RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN npm install -g grunt-cli
RUN npm install -g forever

RUN mkdir /srv/www/
ADD . /srv/www/
RUN cd /srv/www/; npm install .; grunt prod

EXPOSE 1901

RUN cd /srv/www/; NODE_ENV="production" forever start app.js