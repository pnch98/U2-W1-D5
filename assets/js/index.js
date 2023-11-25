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

  let j = 0;
  const hide = setInterval(function () {
    const rand = Math.round(Math.random() * ggs.length + 1);
    if (ggs[rand].hasAttribute("opacity") && ggs[rand].getAttribute("opacity") == 1) {
      console.log(j);
      ggs[rand].style.animation = "fade 5s 1000ms both";
      ggs[rand].style["animation-timing-function"] = "cubic-bezier(0.25,1.89,0.25,1.89)";
    }
    j++;
  }, 10);

  setTimeout(() => {
    clearInterval(hide);
  }, 2000);
};
