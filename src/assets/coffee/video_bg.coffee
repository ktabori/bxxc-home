$(document).ready ->
  $("#wrapper").tubular videoId: "aqHY9DRQtTY"
  overlay = ->
    width = $(window).width()
    height = $(window).height()
    $("#overlay").css "width", width
    $("#overlay").css "min-height", height

  overlay()
  
  $(window).resize ->
    overlay()
