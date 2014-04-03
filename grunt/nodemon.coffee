module.exports =
    dev:
        script: 'server.js'
        options:
            callback: (nodemon) ->
                nodemon.on 'config:update', ->
                    open = ->
                        require('open')('http://localhost:3000/')
                    setTimeout open, 1000