video = true

if video == true
  $('body').loadie()

  $ ->
    BV = new $.BigVideo()
    BV.init()
    if Modernizr.touch
      BV.show 'https://s3-eu-west-1.amazonaws.com/bxxc/bg.jpg'
    else
      BV.show 'https://s3-eu-west-1.amazonaws.com/bxxc/bxxcbg.mp4', {doLoop:true, ambient:true}

  #$ ->
  #  BV = new $.BigVideo()
  #  vids = [
  #    "https://s3-eu-west-1.amazonaws.com/bxxc/bxxcbg.mp4"
  #  ]
  #  vids.sort -> # random order on load
  #    0.5 - Math.random()

  #  BV.init()
  #  BV.show vids,
  #    ambient: true

  $(document).ready ->
    overlay = ->
      width = $(window).width()
      height = $(window).height()
      console.log width
      console.log height
      $("#overlay").css "width", width
      $("#overlay").css "min-height", height

    loading = ->
      width = $(window).width()
      height = $(window).height()
      $("#loading").css "width", width
      $("#loading").css "min-height", height

    loading()
    overlay()

    $(window).resize ->
      overlay()
      loading()

    $('body').loadie(0.40)

    check = setInterval (->
      console.log 'Check'
      if $('.vjs-user-inactive').length > 0
        $('#loading').delay(2000).fadeOut(2000)
        $('#overlay').fadeTo(0, 0.4)
        $('body').loadie(0.80)

        setTimeout (->
          $('body').loadie(1)
        ), 3000
    ), 100

    setTimeout (->
      clearInterval(check)
    ), 5000

# Video player
stopAll = (except) ->
  $(".player").each ->
    video = $(this).attr("data-video")
    $(this).tubeplayer "pause"  if except isnt video

destroyAll = ->
  $(".player").each ->
    $(this).tubeplayer "destroy"

$(".player").each ->

  width = $(this).closest('.video-col').width()
  width = width-4
  ratio = 480/270
  height = Math.round(width/ratio)
  bigger = 480/width

  video = $(this).attr("data-video")
  thumbnail = "https://s3-eu-west-1.amazonaws.com/bxxc/" + video + ".jpg"

  $(this).css "background-image", "url(" + thumbnail + ")"
  $(this).css "width", width
  $(this).css "height", height

  $(this).click ->
    stopAll video
    $(this).tubeplayer
      width: width
      height: height
      allowFullScreen: false
      initialVideo: video
      theme: "light"
      color: "white"
      autoPlay: true
      iframed: true
      onPlayerPlaying: ->
        $('#overlay').fadeTo(2000, 1)

      onPlayerEnded: ->
        $(this).tubeplayer "destroy"
        $('#overlay').fadeTo(2000, 0.4)

      onPlayerPaused: ->
        $('#overlay').fadeTo(2000, 0.4)

  $(window).resize ->
    destroyAll()

    $(".player").each ->

      width = $(this).closest('.video-col').width()
      width = width-4
      ratio = 480/270
      height = Math.round(width/ratio)

      $(this).css "width", width
      $(this).css "height", height

      $('#overlay').fadeTo(2000, 0.4)