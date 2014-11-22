express   = require 'express'
unirest   = require 'unirest'
router    = express.Router()
api       = 'http://vulp.li/bxxc/xbox'

module.exports = (app) ->
  app.use '/', router

router.get '/video', (req, res, next) ->

  unirest.get api
    .end (response)->
      data = response.body
      res.setHeader 'Cache-Control', 'public, max-age=31557600'
      res.render 'video', data
