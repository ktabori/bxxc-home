express   = require 'express'
unirest   = require 'unirest'
router    = express.Router()
api       = 'http://vulp.li/bxxc/xbox'

module.exports = (app) ->
  app.use '/', router

router.get '/aw', (req, res, next) ->

  unirest.get api
    .end (response)->
      data = response.body
      data.pageTitle = 'AW'
      res.setHeader 'Cache-Control', 'public, max-age=31557600'
      res.render 'aw', data
