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