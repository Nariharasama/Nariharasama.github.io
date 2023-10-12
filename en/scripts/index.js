//href
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

//color change    color->string   data->Array
function ChangeStart(id) {
  mouseon[id - 1] = 1;
  //console.log(mouseon);
}

function Changeover(id) {
  mouseon[id - 1] = 0;
  //console.log(mouseon);
}

function ClickCursor() {}

function Change(id) {
  //get current color
  var btn = document.getElementById(id);
  var nowcolor = window.getComputedStyle(btn).background;
  var newcolor = nowcolor;
  var nowdata = getRGB(nowcolor);
  var newdata = nowdata;
  //standardcolor
  var rootcolor = window.getComputedStyle(root);
  var startcolor = rootcolor.getPropertyValue("--secondary");
  var endcolor = rootcolor.getPropertyValue("--primary");
  var startdata = getRGB(startcolor);
  var enddata = getRGB(endcolor);
  var standardspeed = new Array(3);
  for (i = 0; i < 3; i++) {
    standardspeed[i] = parseInt((enddata[i] - startdata[i]) / 20);
  }

  //
  function Changebit() {
    nowcolor = window.getComputedStyle(btn).background;
    nowdata = getRGB(nowcolor);
    //update color
    for (i = 0; i < 3; i++) {
      newdata[i] = nowdata[i] + standardspeed[i];
    }
    if (newdata[0] < enddata[0]) {
      newdata[0] = enddata[0];
    }
    if (newdata[1] < enddata[1]) {
      newdata[1] = enddata[1];
    }
    if (newdata[2] < enddata[2]) {
      newdata[2] = enddata[2];
    }
    newcolor = "rgb(" + newdata[0] + "," + newdata[1] + "," + newdata[2] + ")";
    btn.style.background = newcolor;
  }
  Changebit();
}

function ChangeBack(id) {
  //get current color
  var btn = document.getElementById(id);
  var nowcolor = window.getComputedStyle(btn).background;
  var newcolor = nowcolor;
  var nowdata = getRGB(nowcolor);
  var newdata = nowdata;
  //standardcolor
  var rootcolor = window.getComputedStyle(root);
  var startcolor = rootcolor.getPropertyValue("--primary");
  var endcolor = rootcolor.getPropertyValue("--secondary");
  var startdata = getRGB(startcolor);
  var enddata = getRGB(endcolor);
  var standardspeed = new Array(3);
  for (i = 0; i < 3; i++) {
    standardspeed[i] = parseInt((enddata[i] - startdata[i]) / 20);
  }

  //
  function Changebit() {
    nowcolor = window.getComputedStyle(btn).background;
    nowdata = getRGB(nowcolor);
    //update color
    for (i = 0; i < 3; i++) {
      newdata[i] = nowdata[i] + standardspeed[i];
    }
    if (newdata[0] > startdata[0]) {
      newdata[0] = enddata[0];
    }
    if (newdata[1] > startdata[1]) {
      newdata[1] = enddata[1];
    }
    if (newdata[2] > startdata[2]) {
      newdata[2] = enddata[2];
    }
    newcolor = "rgb(" + newdata[0] + "," + newdata[1] + "," + newdata[2] + ")";
    btn.style.background = newcolor;
  }
  Changebit();
}

function Changeover(id) {
  mouseon[id - 1] = 0;
  //console.log(mouseon);
}

//get RGB data fron string
function getRGB(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  var red = parseInt(rgb[1]);
  var green = parseInt(rgb[2]);
  var blue = parseInt(rgb[3]);
  //console.log(red);
  //console.log(green);
  //console.log(blue);
  var data = new Array(3);
  data[0] = red;
  data[1] = green;
  data[2] = blue;
  return data;
}

function checkon() {
  for (var i = 0; i < 1; i++) {
    if (mouseon[i] == 1) {
      Change(i + 1);
    } else {
      ChangeBack(i + 1);
    }
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
  $(".education-expereince").fadeIn(500);
  $(".experience-area").fadeIn(500);
}

$(document).ready(function () {
  var timer1 = setInterval(checkon, 20); //change botton
  $(".h-1").fadeIn(500, function () {
    $(".h-2").fadeIn(1000, function () {
      $(".h-3").fadeIn(1000);
      $(".access-1").fadeIn(1000, function () {
        $(".to-work-botton-hero-area").fadeIn(500);
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
  //Experience Fadein
  if (exhei + scrollTop >= 1200 && ExShow == 0) {
    EdEffect();
    ExShow = 1;
  }
});
