var root = document.querySelector(":root");
var mouseon = [0, 0, 0, 0];

function TOWORK() {
  window.location.href = "./Work";
}

function TOHOME() {
  window.location.href = "./";
}

function TOCONTACT() {
  window.location.href = "./Contact";
}

function HomeChange() {
  var btm = document.getElementById("HOME");
  btm.addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
    this;
  });
}

//color change    color->string   data->Array
function ChangeStart(id) {
  mouseon[id - 1] = 1;
  //console.log(mouseon);
}

function Change(id) {
  //get current color
  var btn = document.getElementById(id);
  var nowcolor = window.getComputedStyle(btn).color;
  var newcolor = nowcolor;
  var nowdata = getRGB(nowcolor);
  var newdata = nowdata;
  //standardcolor
  var rootcolor = window.getComputedStyle(root);
  var startcolor = rootcolor.getPropertyValue("--primary-dark-grey");
  var endcolor = rootcolor.getPropertyValue("--primary-deep-red");
  var startdata = getRGB(startcolor);
  var enddata = getRGB(endcolor);
  var standardspeed = new Array(3);
  for (i = 0; i < 3; i++) {
    standardspeed[i] = parseInt((enddata[i] - startdata[i]) / 15);
  }

  //
  function Changebit() {
    nowcolor = window.getComputedStyle(btn).color;
    nowdata = getRGB(nowcolor);
    //update color
    for (i = 0; i < 3; i++) {
      newdata[i] = nowdata[i] + standardspeed[i];
    }
    if (newdata[0] > enddata[0]) {
      newdata[0] = enddata[0];
    }
    if (newdata[1] < enddata[1]) {
      newdata[1] = enddata[1];
    }
    if (newdata[2] < enddata[2]) {
      newdata[2] = enddata[2];
    }
    newcolor = "rgb(" + newdata[0] + "," + newdata[1] + "," + newdata[2] + ")";
    btn.style.color = newcolor;
  }
  Changebit();
}

function ChangeBack(id) {
  //get current color
  var btn = document.getElementById(id);
  var nowcolor = window.getComputedStyle(btn).color;
  var newcolor = nowcolor;
  var nowdata = getRGB(nowcolor);
  var newdata = nowdata;
  //standardcolor
  var rootcolor = window.getComputedStyle(root);
  var startcolor = rootcolor.getPropertyValue("--primary-dark-grey");
  var endcolor = rootcolor.getPropertyValue("--primary-deep-red");
  var startdata = getRGB(startcolor);
  var enddata = getRGB(endcolor);
  var standardspeed = new Array(3);
  for (i = 0; i < 3; i++) {
    standardspeed[i] = parseInt((enddata[i] - startdata[i]) / 15);
  }

  //
  function Changebit() {
    nowcolor = window.getComputedStyle(btn).color;
    nowdata = getRGB(nowcolor);
    //update color
    for (i = 0; i < 3; i++) {
      newdata[i] = nowdata[i] - standardspeed[i];
    }
    if (newdata[0] < startdata[0]) {
      newdata[0] = startdata[0];
    }
    if (newdata[1] > startdata[1]) {
      newdata[1] = startdata[1];
    }
    if (newdata[2] > startdata[2]) {
      newdata[2] = startdata[2];
    }
    newcolor = "rgb(" + newdata[0] + "," + newdata[1] + "," + newdata[2] + ")";
    btn.style.color = newcolor;
  }
  Changebit();
}

function Changeover(id) {
  mouseon[id - 1] = 0;
  //console.log(mouseon);
}

//get RGB data fron string
function getRGB(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
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

function check() {
  for (var i = 1; i < 4; i++) {
    if (mouseon[i] == 1) {
      Change(i + 1);
    } else {
      ChangeBack(i + 1);
    }
  }
}

function wordin() {
  $(".big-welcome").fadeIn(500);
  $(".p-1").fadeIn(700);
  $(".p-2").fadeIn(700, function () {
    btnin();
  });
}

function btnin() {
  $(".let-s-go").fadeIn(500);
}

window.onload = function () {
  var timer = setInterval(check, 20);
  //$("#shapes > div").hide();
  $("#pic1").hide();
  $("#pic2").hide();
  $("#pic3").hide();
  $("#pic4").hide();
  $(".big-welcome").hide();
  $(".p-1").hide();
  $(".p-2").hide();
  //$(".let-s-go").hide();
  //show everything
  $("#shapes > div").fadeIn(700);
  $("#pic1").fadeIn(1000);
  $("#pic2").fadeIn(1000);
  $("#pic3").fadeIn(1000);
  $("#pic4").fadeIn(1000, function () {
    setTimeout(wordin(), 1000);
  });
};

$(document).ready(function () {
  //hide everything
});
