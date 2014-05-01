express     = require 'express'
dust        = require 'dustjs-linkedin'
dust.helper = require 'dustjs-helpers'
moment      = require 'moment'
cons        = require 'consolidate'
request     = require 'request'
fs          = require 'fs'
b64url      = require 'b64url'

app = express()

app.use (req, res, next) ->
  fs.readFile __dirname + "/app/globals.json", "utf8", (err, data) ->
    throw err  if err
    res.locals.globals = JSON.parse(data)
    next()

app.engine 'dust', cons.dust
app.listen config.port