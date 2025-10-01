const divide = document.getElementById("divide");
const multy = document.getElementById("multy");
const minuse = document.getElementById("minuse");
const dote = document.getElementById("dote");
let equal = document.getElementById("equal");
const plus = document.getElementById("plus");
const clear = document.getElementById("clear");
let theme = document.getElementById("theme");
let buttons = document.querySelectorAll(".buttons");
let show = document.querySelector(".show");
theme.addEventListener("click", function () {
  if (theme.innerHTML != "dark") {
    var elements = document.getElementsByClassName("buttons");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.background = "#939393";
      elements[i].style.color = "#36393c";
    }
    document.getElementById("show").style.backgroundColor = "#939393";
    document.getElementById("container").style.background =
      "linear-gradient(to left top, #303030, #787878)";
    document.getElementById("show").style.color = "#36393c";
    document.getElementById("equal").style.backgroundColor = "#939393";
    document.getElementById("clear").style.backgroundColor = "#939393";
    document.getElementById("theme").style.backgroundColor = "#939393";
    theme.innerHTML = "dark";
  } else {
    var elements = document.getElementsByClassName("buttons");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.background = "#bfe7f8";
      elements[i].style.color = "rgba(6, 10, 22, 0.408)";
    }
    document.getElementById("show").style.backgroundColor = "#bfe7f8";
    document.getElementById("equal").style.backgroundColor = "#bfe7f8";
    document.getElementById("theme").style.backgroundColor = "#bfe7f8";
    document.getElementById("clear").style.backgroundColor = "#bfe7f8";

    document.getElementById("container").style.background =
      "linear-gradient(to left top, #88f2f9, #51735c)";
    document.getElementById("show").style.color = "rgba(6, 10, 22, 0.408)";
    theme.innerHTML = "light";
  }
});

buttons.forEach(function (buttons) {
  buttons.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    show.value += value;
  });
});

equal.addEventListener("click", function () {
  if (show.value === "") {
    show.value = "Please Enter a Value";
  } else {
    let answer = eval(show.value);
    show.value = answer;
  }
});
clear.addEventListener("click", function () {
  show.value = "";
});
