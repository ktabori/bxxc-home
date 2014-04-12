express     = require 'express'
dust        = require 'dustjs-linkedin'
dust.helper = require 'dustjs-helpers'
moment      = require 'moment'
cons        = require 'consolidate'
request     = require 'request'
fs          = require 'fs'
b64url      = require 'b64url'
memjs       = require 'memjs'

client = memjs.Client.create()

app = express()

app.use (req, res, next) ->
  fs.readFile __dirname + "/app/globals.json", "utf8", (err, data) ->
    throw err  if err
    res.locals.globals = JSON.parse(data)
    res.locals.canonical =  req.protocol + '://' + req.get('host') + req.path
    next()

app.engine 'dust', cons.dust
app.listen config.port