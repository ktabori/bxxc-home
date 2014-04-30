cron        = require 'schedule'
touch       = require 'touch'
fs          = require 'fs'
request     = require 'request'

fetchSocialData 'Initial run'

if env == 'development'
  periode     = '5m'

cron.every(periode).do -> 
  fetchSocialData periode