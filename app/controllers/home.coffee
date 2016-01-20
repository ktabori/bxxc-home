express   = require 'express'
unirest   = require 'unirest'
router    = express.Router()

nav       = 'https://api.fieldbook.com/v1/567b1287206810030024cb49/main_navigation'
api       = 'http://cms.dmngd.co/api/merged/ad07e5b43338eacbad3d0b7f6205546c/rendered'

xboxApi   = 'http://cms.dmngd.co/xbox/users/'

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



  router.get '/members', (req, res, next) ->

    unirest.get nav
      .end (navres) ->

        unirest.get xboxApi + 'all'
          .end (xbox) ->
            data =
              data: xbox.body
              pageTitle: 'Xbox'
              navigation: navres.body

            res.render 'members', data

  router.get '/member/:member', (req, res, next) ->
    if req.params.member
      member = req.params.member
    else
      res.render "error"

    unirest.get nav
      .end (navres) ->

        unirest.get xboxApi + member
          .end (xbox) ->
            data =
              data: xbox.body
              pageTitle: 'Xbox'
              navigation: navres.body

            res.render 'member', data
