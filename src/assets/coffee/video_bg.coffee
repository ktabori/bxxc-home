$('body').loadie()

$ ->
  BV = new $.BigVideo()
  BV.init()
  BV.show "https://s3-eu-west-1.amazonaws.com/bxxc/bxxcbg.mp4", {doLoop:true}

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
      $('body').loadie(0.80)
      setTimeout (->
        $('body').loadie(1)
      ), 3000
  ), 100

  setTimeout (->
    clearInterval(check)
  ), 5000