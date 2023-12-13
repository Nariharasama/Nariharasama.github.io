//href
function Language() {
  window.location.href = "/../cn/index.html";
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

function MenuBar() {
  if ($("#bar").css("display") === "block") {
    $("#bar").hide();
  } else {
    $("#bar").show();
  }
}

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
function EdEffect() {
  $(".education-expereince").fadeIn(500);
  $(".experience-area").fadeIn(500);
}

//Start animation
function Next() {
  var Fullcontent = "Hi! I’m Hu shengyuan,";
  var FullcontentSplit = Fullcontent.split(" ");
  if (window.len < FullcontentSplit.length) {
    var Com = "";
    for (var s = 0; s < window.len; s++) {
      Com += FullcontentSplit[s] + "&nbsp";
    }
    Com += FullcontentSplit[window.len].substr(0, window.num + 1);
    if (window.num == FullcontentSplit[window.len].length) {
      window.num = 0;
      window.len += 1;
    } else {
      num += 1;
    }
    $(".h-1").html(Com + "_");
    setTimeout(Next, 100);
  } else {
    var bli = setInterval("Blick()", 700);
    $(".h-2").fadeIn(1000, function () {
      $(".h-3").fadeIn(1000);
      $(".access-1").fadeIn(1000, function () {
        $(".to-work-botton-hero-area").fadeIn(500);
      });
    });
  }
}

function Blick() {
  console.log(window.stat);
  if (window.stat === 0) {
    $(".h-1").html("Hi! I’m Hu shengyuan,");
    window.stat = 1;
  } else {
    $(".h-1").html("Hi! I’m Hu shengyuan,_");
    window.stat = 0;
  }
}
function Init_Animate() {
  $(".h-1").html("_");
  window.num = 0;
  window.len = 0;
  window.stat = 0;
  Next();
}
//Circle initialize
function Init_Circle() {
  var Toplimit = $(".header-edge").css("top");
  var Toplimitpure = parseInt(Toplimit.substr(0, Toplimit.indexOf("p")));
  var Bottomlimit = $(".divideline-1").css("top");
  var Bottomlimitpure = parseInt(
    Bottomlimit.substr(0, Bottomlimit.indexOf("p")),
  );
  var Width = $(window).width();
  //set the area
  $("#Circles").css({
    top: Toplimitpure,
    height: Bottomlimitpure - Toplimitpure,
    width: Width,
  });
  //first 10 circles
  var sizemin = 20;
  var sizemax = 50;
  var size = 0;
  var posX = 0;
  var posY = 0;
  Thiscircle = "";
  //small ones
  for (var i = 0; i < 15; i++) {
    size = parseInt(Math.random() * (sizemax - sizemin) + sizemin);
    posX = parseInt(Math.random() * Width);
    posY = parseInt(Math.random() * (Bottomlimitpure - Toplimitpure));
    Thiscircle =
      '<div class="circlesmall" style="left:' +
      posX +
      "px;top:" +
      posY +
      "px;height: " +
      size +
      "px;width:" +
      size +
      'px"></div>';
    $("#Circles").append(Thiscircle);
  }
  //big ones
  for (var i = 0; i < 7; i++) {
    size = parseInt(Math.random() * (sizemax - sizemin) * 2 + sizemin) + 100;
    posX = parseInt(Math.random() * Width);
    posY = parseInt(Math.random() * (Bottomlimitpure - Toplimitpure));
    Thiscircle =
      '<div class="circlebig" style="left:' +
      posX +
      "px;top:" +
      posY +
      "px;height: " +
      size +
      "px;width:" +
      size +
      'px"></div>';
    $("#Circles").append(Thiscircle);
  }
  var timeset = 0;
  //animation
  for (var i = 0; i < 15; i++) {
    timeset = parseInt(Math.random() * 3000 + 500);
    $(".circlesmall:eq(" + i + ")")
      .animate({ opacity: "0.05" }, timeset)
      .animate({ opacity: "0.5" }, timeset)
      .animate({ opacity: "0" }, timeset);
  }
  for (var i = 0; i < 7; i++) {
    timeset = parseInt(Math.random() * 5000 + 2000);
    $(".circlebig:eq(" + i + ")")
      .animate({ opacity: "0.05" }, timeset)
      .animate({ opacity: "0.5" }, timeset)
      .animate({ opacity: "0" }, timeset);
  }
}

//update circles
function Update_Circle() {
  var small = 0;
  var big = 0;
  var Toplimit = $(".header-edge").css("top");
  var Toplimitpure = parseInt(Toplimit.substr(0, Toplimit.indexOf("p")));
  var Bottomlimit = $(".divideline-1").css("top");
  var Bottomlimitpure = parseInt(
    Bottomlimit.substr(0, Bottomlimit.indexOf("p")),
  );
  var Width = $(window).width();
  var sizemin = 20;
  var sizemax = 50;
  var size = 0;
  var posX = 0;
  var posY = 0;
  var timeset = 0;
  //small ones
  $(".circlesmall").each(function (index, el) {
    if ($(el).css("opacity") == 0) {
      size = parseInt(Math.random() * (sizemax - sizemin) + sizemin);
      posX = parseInt(Math.random() * Width);
      posY = parseInt(Math.random() * (Bottomlimitpure - Toplimitpure));
      timeset = parseInt(Math.random() * 3000 + 500);
      $(el).css({ top: posY, left: posX, width: size, height: size });
      $(el)
        .animate({ opacity: "0.05" }, timeset)
        .animate({ opacity: "0.5" }, timeset)
        .animate({ opacity: "0" }, timeset);
    }
  });
  //big ones
  $(".circlebig").each(function (index, el) {
    if ($(el).css("opacity") == 0) {
      size = parseInt(Math.random() * (sizemax - sizemin) * 2 + sizemin) + 100;
      posX = parseInt(Math.random() * Width);
      posY = parseInt(Math.random() * (Bottomlimitpure - Toplimitpure));
      timeset = parseInt(Math.random() * 5000 + 2000);
      $(el).css({ top: posY, left: posX, width: size, height: size });
      $(el)
        .animate({ opacity: "0.05" }, timeset)
        .animate({ opacity: "0.5" }, timeset)
        .animate({ opacity: "0" }, timeset);
    }
  });
}

var root = document.querySelector(":root");
var mouseon = [0, 0, 0, 0];
var status = 0;

$(document).ready(function () {
  var timer1 = setInterval(checkon, 20); //change botton
  Init_Animate();
  //circles
  Init_Circle();
  setInterval(Update_Circle, 100);
});

$(window).scroll(function () {
  var ExShow = 0;
  var SkillShow = 0;
  var scrollTop = $(window).scrollTop();
  //console.log(scrollTop);
  var exhei = $(window).height();
  //Experience Fadein
  var fullpage = $(".wireframe-home").height();
  if (exhei + scrollTop >= (1200 * fullpage) / 2200 && ExShow == 0) {
    EdEffect();
    ExShow = 1;
  }
});
