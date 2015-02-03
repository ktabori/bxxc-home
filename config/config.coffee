path     = require 'path'
rootPath = path.normalize __dirname + '/..'
env      = process.env.NODE_ENV || 'development'

config =
  development:
    root: rootPath
    app:
      name: 'bxxc'
    port: 3000
    api: 'http://api.dmngd.co/bxxc/all'
    db: 'mongodb://localhost/bxxc-development'


  test:
    root: rootPath
    app:
      name: 'bxxc'
    port: 3000
    api: 'http://api.dmngd.co/bxxc/all'
    db: 'mongodb://localhost/bxxc-test'


  production:
    root: rootPath
    app:
      name: 'bxxc'
    port: process.env.PORT || 3000
    api: 'http://api.dmngd.co/bxxc/all'
    db: 'mongodb://bxxc_mongo:NNG7Jgoo4b@dogen.mongohq.com:10064/bxxc'

module.exports = config[env]
