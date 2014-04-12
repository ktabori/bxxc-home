# TODO: Remove this auth stuff later
# if env is 'production'
#    auth = require 'http-auth'
#    basic = auth.basic realm: "BXXC", (username, password, callback) ->
#        callback(username is "bxxc" and password is "testbxxc")
#    app.use auth.connect(basic)

class Router
    routes:
        #Main pages
        '/'  :  'index'

    constructor: ->
        @app = express.Router()

        @setupPageRoutes()
        @setupErrorRoutes()

        return @app

    setupPageRoutes: ->
        for route, pageName of @routes
            controller = @getController pageName
            @app.get route, controller pageName

    setupErrorRoutes: ->
        @app.use (req, res) ->
            res.status(404).render 'errors/404', title: '404'

    getController: (pageName) ->
        controller = pageController
        return controller