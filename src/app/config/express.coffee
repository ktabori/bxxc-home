compress        = require 'compression'
favicon         = require 'static-favicon'
bodyParser      = require 'body-parser'
methodOverride  = require 'method-override'
serveStatic     = require 'serve-static'
morgan          = require 'morgan'
robots          = require 'robots.txt'

app.use compress()
app.use bodyParser()
app.use methodOverride()

app.use '/assets', serveStatic(config.root + '/src/assets')
app.use robots(config.root + '/src/assets/static/robot.txt')
app.use morgan('dev')
app.use favicon(config.root + '/src/assets/img/favicon.ico')

app.set 'port', config.port
app.set 'views', config.root + '/src/app/views'
app.set 'view engine', 'dust'

app.use '/', new Router()