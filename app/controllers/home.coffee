express   = require 'express'
unirest   = require 'unirest'
router    = express.Router()
api       = 'http://api.dmngd.co/bxxc/all'

module.exports = (app) ->
  app.use '/', router

router.get '/', (req, res, next) ->

  unirest.get api
    .end (response)->
      data = response.body
      data.pageTitle = 'Home'
      res.setHeader 'Cache-Control', 'public, max-age=31557600'
      res.render 'index', data
