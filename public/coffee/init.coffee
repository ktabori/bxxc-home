class Init

  constructor: ->
    @$background = $('#background')
    @$overlay = $('#overlay')

    @randomBackground()
    @download()
    @svgIcons()

  randomBackground: ->
    randomNumber  = Math.floor(Math.random() * 50) + 1
    backgroundUri = "url(/img/bg/#{randomNumber}.jpeg) no-repeat center center fixed"
    @$background.css "background", backgroundUri

  download: ->
    hash = location.hash

    if hash is '#download' or hash is '#d'
      $('.btn-download').each ->
        $(this).removeClass('hidden')

  svgIcons: ->
    new svgIcon(document.querySelector(".si-icon-hamburger-cross"), svgIconConfig,
      speed : 400
      easing : mina.elastic
      size :
        w : 32
        h : 32
    )

$(document).ready ->
  new Init()
