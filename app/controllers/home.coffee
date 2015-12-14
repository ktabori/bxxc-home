express   = require 'express'
unirest   = require 'unirest'
router    = express.Router()

nav       = 'http://cms.dmngd.co/api/collection/ad07e5b43338eacbad3d0b7f6205546c/main-navigation/order/order'
api       = 'http://cms.dmngd.co/api/merged/ad07e5b43338eacbad3d0b7f6205546c/rendered'

module.exports = (app) ->
  app.use '/', router

  router.get '/', (req, res, next) ->

    unirest.get nav
      .end (navres) ->

        unirest.get api
          .end (response) ->
            data = response.body
            data.pageTitle = 'Home'
            data.navigation = navres.body.records
            console.log data
            res.render 'index', data
