//href
function Language() {
  window.location.href = "/../cn/contact.html";
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

function EdEffect() {}

$(document).ready(function () {
  $(".H1").fadeIn(1000, function () {
    $(".H2").fadeIn(1000, function () {
      $(".H3").fadeIn(500);
      $(".access").fadeIn(500);
    });
  });
});

$(window).scroll(function () {
  var ExShow = 0;
  var SkillShow = 0;
});
