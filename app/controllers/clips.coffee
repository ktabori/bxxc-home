express   = require 'express'
unirest   = require 'unirest'
router    = express.Router()
api       = 'http://vulp.li/bxxc/xbox'

module.exports = (app) ->
  app.use '/', router

router.get '/clips', (req, res, next) ->

  unirest.get api
    .end (response)->
      data = response.body
      data.pageTitle = 'Clips'
      res.setHeader 'Cache-Control', 'public, max-age=31557600'
      res.render 'clips', data
