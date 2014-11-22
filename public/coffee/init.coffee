class Init

  constructor: ->
    @$background = $('#background')
    @$overlay = $('#overlay')

    @randomBackground()
    @outdated()
    @download()

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

  download: ->
    hash = location.hash

    if hash is '#download' or hash is '#d'
      $('.btn-download').each ->
        $(this).removeClass('hidden')

$(document).ready ->
  new Init()
