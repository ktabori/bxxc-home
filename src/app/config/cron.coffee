touch       = require 'touch'
fs          = require 'fs'
request     = require 'request'

periode     = 5 * 60000 #5 minute

fetchSocialData

setInterval (
  fetchSocialData
), periode