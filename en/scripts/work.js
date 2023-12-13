//href
function Language() {
  window.location.href = "/../cn/work.html";
}

function TOWORK() {
  window.location.href = "./work.html";
}

function TOHOME() {
  window.location.href = "./index.html";
}

function TOCONTACT() {
  window.location.href = "./contact.html";
}

function Github() {
  window.open("https://github.com/Nariharasama");
}

function Privacy() {
  window.open("https://docs.github.com/en/site-policy");
}

function Portfolio() {
  window.open("https://share.weiyun.com/xLxuNTgE");
}

function MenuBar() {
  if ($("#bar").css("display") === "block") {
    $("#bar").hide();
  } else {
    $("#bar").show();
  }
}

function easycheck1(id) {
  var btn = document.getElementById(id);
  btn.style.color = "rgb(199, 0, 57)";
}
function easycheck2(id) {
  var btn = document.getElementById(id);
  btn.style.color = "rgb(39, 32, 34)";
}

var root = document.querySelector(":root");
var mouseon = [0, 0, 0, 0];
var status = 0;

function EdEffect() {
  $(".mainly").fadeIn(700, function () {
    $(".ae").fadeIn(1000);
    $(".ai").fadeIn(1000);
    $(".ps").fadeIn(1000);
    $(".figma").fadeIn(1000);
    $(".after-effect").fadeIn(1000);
    $(".adobe-illustrator").fadeIn(1000);
    $(".adobe-photoshop").fadeIn(1000);
    $(".figma2").fadeIn(1000, function () {
      $(".css").fadeIn(1000);
      $(".html").fadeIn(1000);
      $(".js").fadeIn(1000);
      $(".jquery").fadeIn(1000);
      $(".python").fadeIn(1000);
      $(".css2").fadeIn(1000);
      $(".html2").fadeIn(1000);
      $(".javascript").fadeIn(1000);
      $(".j-query").fadeIn(1000);
      $(".python-3").fadeIn(1000, function () {
        $(".others").fadeIn(500);
      });
    });
  });
}

$(document).ready(function () {
  //$(".app1 > img").hide();
  $(".ae").hide();
  $(".ai").hide();
  $(".ps").hide();
  $(".figma").hide();
  //$(".app2 > img").hide();
  $(".css").hide();
  $(".html").hide();
  $(".js").hide();
  $(".jquery").hide();
  $(".python").hide();
  $(".h-1").fadeIn(500, function () {
    $(".h-2").fadeIn(1000, function () {
      $(".h-3").fadeIn(1000);
      $(".h-4").fadeIn(1000, function () {
        $(".portfolio-botton ").fadeIn(500);
        $(".share-square ").fadeIn(500);
      });
    });
  });
});

$(window).scroll(function () {
  var ExShow = 0;
  var SkillShow = 0;
  var scrollTop = $(window).scrollTop();
  //console.log(scrollTop);
  var exhei = $(window).height();
  var fullpage = $(".wireframe-home").height();
  //Experience Fadein
  if (exhei + scrollTop >= (1200 * fullpage) / 2200 && ExShow == 0) {
    EdEffect();
    ExShow = 1;
  }
});
