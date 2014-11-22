var Init;

Init = (function() {
  function Init() {
    this.$background = $('#background');
    this.$overlay = $('#overlay');
    this.randomBackground();
    this.outdated();
    this.download();
  }

  Init.prototype.randomBackground = function() {
    var backgroundUri, randomNumber;
    randomNumber = Math.floor(Math.random() * 50) + 1;
    backgroundUri = "url(/img/bg/" + randomNumber + ".png) no-repeat center center fixed";
    return this.$background.css("background", backgroundUri);
  };

  Init.prototype.outdated = function() {
    return outdatedBrowser({
      bgColor: "#f25648",
      color: "#ffffff",
      lowerThan: "transform",
      languagePath: "public/libs/lang/en.html"
    });
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

  return Init;

})();

$(document).ready(function() {
  return new Init();
});
