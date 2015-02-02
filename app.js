require('coffee-script/register');
var Memcache = require('memcache');

var memcache = new Memcache.Client(19180, 'pub-memcache-19180.eu-west-1-2.1.ec2.garantiadata.com');

var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.coffee');
models.forEach(function (model) {
  require(model);
});
var app = express();

require('./config/express')(app, config);

app.listen(config.port);

