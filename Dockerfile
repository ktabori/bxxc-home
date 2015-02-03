FROM stackbrew/ubuntu:trusty

RUN mkdir /srv/www/
RUN apt-get update && apt-get -y install git build-essential curl && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN curl -sL https://deb.nodesource.com/setup | sudo bash -
RUN apt-get install -y nodejs && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN npm install -g grunt-cli
RUN npm install -g forever

ADD . /srv/www/
RUN cd /srv/www/; npm install .; grunt prod

EXPOSE 80

WORKDIR /srv/www

CMD NODE_ENV="production" forever start app.js