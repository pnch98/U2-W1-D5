window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.querySelector("nav").classList.add("scrollDown");
    document.querySelector("nav .btn").classList.add("scrollDownBtn");
  } else {
    document.querySelector("nav").classList.remove("scrollDown");
    document.querySelector("nav .btn").classList.remove("scrollDownBtn");
  }
};

window.onload = function () {
  const array = [];
  const ggs = document.querySelectorAll("g[style='display: block']");

  const hide = setInterval(function () {
    const rand = Math.round(Math.random() * ggs.length + 1);
    if (ggs[rand].getAttribute("opacity") == 1) {
      ggs[rand].setAttribute("opacity", 0);
    }
  }, 100);

  const show = setInterval(function () {
    const rand = Math.round(Math.random() * ggs.length + 1);
    if (ggs[rand].getAttribute("opacity") == 0) {
      ggs[rand].setAttribute("opacity", 1);
    }
  }, 50);
};
