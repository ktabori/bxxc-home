require 'newrelic'

path      = require 'path'
rootPath  = path.normalize(__dirname + '/..')
env       = process.env.NODE_ENV || 'development'

config =
    development:
        root: rootPath
        app: 
            name: 'bxxc'
        port: 3000
        mongoURL: 'mongodb://localhost:27017/vulp'

    test:
        root: rootPath
        app:
            name: 'bxxc'
        port: 3000

    production:
        root: rootPath
        app:
            name: 'bxxc'
        port: process.env.PORT || 3000
        mongoURL: 'mongodb://bxxc:NNG7JJgo4b@oceanic.mongohq.com:10022/vulp'

config = config[env]
