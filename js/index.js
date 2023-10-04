//responsible page
function checkwidth() {
  var ScreenWidth = $(window).width();
  //console.log(ScreenWidth);
  var newsize = (16 * ScreenWidth) / 1440;
  var newsizestr = newsize + "px";
  newsizestr = newsizestr.toString();
  $("html").css("font-size", newsizestr);
  //console.log(newsizestr);
  //console.log(typeof newsizestr);
}

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

function checkon() {
  for (var i = 1; i < 3; i++) {
    if (mouseon[i] == 1) {
      Change(i + 1);
    } else {
      ChangeBack(i + 1);
    }
  }
}

function OnloadEffect() {
  //hide everything
  $(".topic-area").hide();
  $(".skill-area").hide();
  $(".go-botton").hide();
  $(".myphoto").hide();
  $(".experience-1").hide();
  $(".experience-2").hide();
  $(".experience-3").hide();
  $(".skill-1").hide();
  $(".skill-2").hide();
  $(".skill-3").hide();
  $(".skill-32").hide();
  //Top effect 01
  var allwidth1 = $(".topic-area").css("width");
  //.match(/(\d+)rem/);
  var varnowwidth1 = 1.75;
  var varnowwidth2 = 1.125;
  $(".topic-area").css("width", "1.75rem");
  $(".topic-area").show();
  $(".skill-area").css("width", "1.125rem");
  $(".skill-area").show();

  var area2 = setInterval(function () {
    varnowwidth2 += 1;
    $(".skill-area").css("width", varnowwidth2 + "rem");
    if (varnowwidth2 >= 33.125) {
      clearInterval(area2);
    }
  }, 20);

  var area1 = setInterval(function () {
    varnowwidth1 += 1;
    $(".topic-area").css("width", varnowwidth1 + "rem");
    if (varnowwidth1 >= 53.75) {
      $(".myphoto").fadeIn(1000, function () {
        $(".go-botton").fadeIn(1500);
      });
      clearInterval(area1);
    }
  }, 20);

  console.log(allwidth1);
  allwidth1 = $(".topic-area").css("width");
  console.log(allwidth1);
}

function ExEffect() {
  $(".experience-1").fadeIn(700, function () {
    $(".experience-2").fadeIn(700, function () {
      $(".experience-3").fadeIn(700);
    });
  });
}

function SkillEffect() {
  $(".skill-1").fadeIn(500, function () {
    $(".skill-2").fadeIn(500, function () {
      $(".skill-3").fadeIn(500, function () {
        $(".skill-32").fadeIn(500);
      });
    });
  });
}

function btnon() {
  var nowdist = $(".arrow").css("left");
  //console.log(nowdist);
  var nowdistdata = nowdist.match(/\d+/);
  //console.log(parseInt(nowdistdata[0]));
  var newdata = parseInt(nowdistdata[0]);
  if (status == 1) {
    newdata += ($(window).width() / 1440) * 6;
  }
  if (status == -1) {
    newdata -= ($(window).width() / 1440) * 8;
  }
  var newdist = newdata + "px";
  if (status == 1 && newdata <= (15 * 16 * $(window).width()) / 1440) {
    $(".arrow").css("left", newdist);
  } else if (status == -1 && newdata >= (2.3 * 16 * $(window).width()) / 1440) {
    $(".arrow").css("left", newdist);
  }
}

var root = document.querySelector(":root");
var mouseon = [0, 0, 0, 0];
var status = 0;

$(document).ready(function () {
  var timer1 = setInterval(checkwidth, 100); //responsible width
  var timer2 = setInterval(checkon, 20); //Top Bar color change
  var timer3 = setInterval(btnon, 10); // explore botton
  OnloadEffect();
  $(".go-botton").mouseenter(function () {
    status = 1;
    console.log("in");
  });
  $(".go-botton").mouseleave(function () {
    status = -1;
    console.log("OUT");
  });
});

$(window).scroll(function () {
  var ExShow = 0;
  var SkillShow = 0;
  var scrollTop = $(window).scrollTop();
  //console.log(scrollTop);
  var hei1 = $(".experience").offset().top;
  var exhei = $(window).height();
  console.log(exhei);
  //Experience Fadein
  if (scrollTop + exhei >= 1.2 * hei1 && ExShow == 0) {
    ExEffect();
    ExShow = 1;
  }
  //Skill Fadein
  var hei2 = $(".skills").offset().top;
  if (scrollTop + exhei >= 1.2 * hei2 && SkillShow == 0) {
    SkillEffect();
    SkillShow = 1;
  }
});
