class Init

  constructor: ->
    @$background = $('#background')
    @$overlay = $('#overlay')

    @randomBackground()
    @outdated()

  randomBackground: ->
    randomNumber  = Math.floor(Math.random() * 50) + 1
    backgroundUri = "url(/img/bg/#{randomNumber}.png) no-repeat center center fixed"
    @$background.css "background", backgroundUri

  outdated: ->
    outdatedBrowser
      bgColor: "#f25648"
      color: "#ffffff"
      lowerThan: "transform"
      languagePath: "public/libs/lang/en.html"

$(document).ready ->
  new Init()
