video = false

$(document).ready ->
  overlayImg = ->
    width = $(window).width()
    height = $(window).height()
    $("#overlay-img").css "width", width
    $("#overlay-img").css "min-height", height

  overlay = ->
      width = $(window).width()
      height = $(window).height()
      $("#overlay").css "width", width
      $("#overlay").css "min-height", height

  overlay()
  overlayImg()

  $(window).resize ->
    overlayImg()
    overlay()

if Modernizr.touch or video is false
  $('#overlay-img').show()
  $('#overlay').fadeTo(0, 0.4)
else
  $('body').loadie()

  $ ->
    BV = new $.BigVideo()
    BV.init()
    BV.show 'https://s3-eu-west-1.amazonaws.com/bxxc/bxxcbg.mp4', {doLoop:true, ambient:true}
    setTimeout (->
      $('#overlay-img').fadeIn(3000)
      setTimeout (->
        BV.getPlayer().dispose()
      ), 3000
    ), 25000
    
  $(document).ready ->
    loading = ->
      width = $(window).width()
      height = $(window).height()
      $("#loading").css "width", width
      $("#loading").css "min-height", height

    loading()

    $(window).resize ->
      loading()

    $('body').loadie(0.40)

    check = setInterval (->
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

destroyAll = (except) ->
  console.log('Destroy All')
  $("div.player.jquery-youtube-tubeplayer").each ->
    video = $(this).attr("data-video")
    $(this).tubeplayer "destroy" if except isnt video

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

$('.player').click ->

  width = $(this).closest('.video-col').width()
  width = width-4
  ratio = 480/270
  height = Math.round(width/ratio)
  bigger = 480/width

  video = $(this).attr("data-video")
  destroyAll video

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