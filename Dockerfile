FROM dockerfile/nodejs

WORKDIR /data

RUN npm install -g grunt-cli
RUN npm install -g forever

ADD package.json /data/package.json RUN npm install

ADD . /data

ENV NODE_ENV production

EXPOSE 1901

CMD ["grunt prod", "forever start app.js"]