FROM dockerfile/ubuntu



RUN apt-get update
RUN apt-get -y install git build-essential curl nodejs
RUN apt-get clean 
RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN curl -sL https://deb.nodesource.com/setup | sudo bash -

RUN npm install -g grunt-cli
RUN npm install -g forever

RUN mkdir /srv/www/
ADD . /srv/www/
RUN cd /srv/www/
RUN npm install
RUN grunt prod

EXPOSE 1901

WORKDIR /srv/www

CMD NODE_ENV="production" forever start app.js