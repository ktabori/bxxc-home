express   = require 'express'
unirest   = require 'unirest'
router    = express.Router()

nav       = 'https://api.fieldbook.com/v1/567b1287206810030024cb49/main_navigation'
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
            data.navigation = navres.body
            console.log data
            res.render 'index', data
