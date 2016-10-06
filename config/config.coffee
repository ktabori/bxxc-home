path     = require 'path'
rootPath = path.normalize __dirname + '/..'
env      = process.env.NODE_ENV || 'development'

config =
  development:
    root: rootPath
    app:
      name: 'bxxc'
    port: 3000
    api: 'http://dash.ktabori.me'


  test:
    root: rootPath
    app:
      name: 'bxxc'
    port: 3000
    api: 'http://dash.ktabori.me'


  production:
    root: rootPath
    app:
      name: 'bxxc'
    port: process.env.PORT || 3000
    api: 'http://dash.ktabori.me'

module.exports = config[env]
