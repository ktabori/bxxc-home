express   = require 'express'
unirest   = require 'unirest'
router    = express.Router()
api       = 'http://api.dmngd.co/bxxc/xbox'

module.exports = (app) ->
  app.use '/', router

router.get '/aw', (req, res, next) ->

  unirest.get api
    .end (response)->
      data = response.body
      data.pageTitle = 'AW'
      res.render 'aw', data
