//href

function Language() {
  window.location.href = "/../en/contact.html";
}

function TOWORK() {
  window.location.href = "./work.html";
}

function TOHOME() {
  window.location.href = "./";
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
  $(".h-1").fadeIn(1000, function () {
    $(".h-2").fadeIn(1000, function () {
      $(".h-3").fadeIn(500);
      $(".h-4").fadeIn(500);
    });
  });
});

$(window).scroll(function () {
  var ExShow = 0;
  var SkillShow = 0;
});
