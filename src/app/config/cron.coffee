touch       = require 'touch'
fs          = require 'fs'
request     = require 'request'

periode     = 1 * 60000 #5 minute

fetchSocialData

setInterval (
  fetchSocialData
), periode