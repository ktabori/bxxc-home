FROM dockerfile/nodejs

RUN npm install -g grunt-cli
RUN npm install -g forever

# Define working directory.
WORKDIR /data

# Define default command.
RUN npm install .; grunt prod
CMD NODE_ENV="production" forever start app.js