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
      res.render 'index', data
