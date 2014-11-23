var Init;

Init = (function() {
  function Init() {
    this.$background = $('#background');
    this.$overlay = $('#overlay');
    this.randomBackground();
    this.download();
    this.svgIcons();
  }

  Init.prototype.randomBackground = function() {
    var backgroundUri, randomNumber;
    randomNumber = Math.floor(Math.random() * 50) + 1;
    backgroundUri = "url(/img/bg/" + randomNumber + ".jpeg) no-repeat center center fixed";
    return this.$background.css("background", backgroundUri);
  };

  Init.prototype.download = function() {
    var hash;
    hash = location.hash;
    if (hash === '#download' || hash === '#d') {
      return $('.btn-download').each(function() {
        return $(this).removeClass('hidden');
      });
    }
  };

  Init.prototype.svgIcons = function() {
    return new svgIcon(document.querySelector(".si-icon-hamburger-cross"), svgIconConfig, {
      speed: 400,
      easing: mina.elastic,
      size: {
        w: 32,
        h: 32
      }
    });
  };

  return Init;

})();

$(document).ready(function() {
  return new Init();
});
