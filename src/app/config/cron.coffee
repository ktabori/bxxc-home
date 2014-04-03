cron        = require 'schedule'
mongodb     = require 'mongodb'
touch       = require 'touch'
fs          = require 'fs'
MongoClient = mongodb.MongoClient

fetchSocialData 'Initial run'

if env == 'development'
  periode     = '600s'
else
  periode     = '1200s'

cron.every(periode).do -> 
  fetchSocialData periode