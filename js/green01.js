function getScrollHeight() {
  var scrollh = 0,
    bodyh = 0,
    docuh = 0;
  bodyh = document.documentElement.scrollTop;
  return bodyh;
}

function fadein(id) {
  var m;
  var val;
  m = document.getElementById(id);
  val = m.style.opacity * 100;
  if (val <= 100) {
    val += 1;
    m.style.opacity = val / 100;
    console.log(val);
    val += 10;
    m.style.opacity = val / 100;
    setTimeout(function () {
      fadein(id);
    }, 150);
  }
}

function display(g) {
  if (g >= 200) {
    fadein(1);
  }
  if (g >= 500) {
    fadein(2);
  }
  if (g >= 700) {
    fadein(3);
  }
  if (g >= 1000) {
    fadein(4);
  }
  if (g >= 1200) {
    fadein(5);
  }
  if (g >= 1200) {
    fadein(6);
  }
}

window.onload = function () {
  var timer = 0;
  window.onscroll = function () {
    display(getScrollHeight());
  };
};
