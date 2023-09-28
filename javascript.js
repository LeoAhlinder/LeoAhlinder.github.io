function changeTheme() {
  const sun = document.querySelector(".sun");
  const moon = document.querySelector(".moon");
  sun.classList.toggle("visible");
  moon.classList.toggle("visible");

  const backgroundImage = document.getElementById("homePage");

  const cssRoot = document.querySelector(":root");

  const element = document.querySelector("html");
  if (element.getAttribute("id") === "darkMode") {
    element.removeAttribute("data-bs-theme");
    element.removeAttribute("id", "darkMode");
    element.setAttribute("id", "lightMode");
    element.setAttribute("data-bs-theme", "light");

    document.body.style.backgroundColor = "RGB(255, 220, 220)";
    cssRoot.style.setProperty("--backgroundColor", "rgb(255, 220, 220)");
    backgroundImage.style.backgroundImage =
      "url('pictures/sunrisebackground.png')";

    localStorage.setItem("colorTheme", "lightMode");
  } else {
    element.removeAttribute("data-bs-theme");
    element.removeAttribute("id", "lightMode");
    element.setAttribute("data-bs-theme", "dark");
    element.setAttribute("id", "darkMode");

    document.body.style.backgroundColor = "RGB(43, 48, 53)";
    cssRoot.style.setProperty("--backgroundColor", "rgb(43, 48, 53)");
    backgroundImage.style.backgroundImage = "url('pictures/shootingstar.jpg')";

    localStorage.setItem("colorTheme", "darkMode");
  }
}

function checkColorTheme() {
  let colorTheme = localStorage.getItem("colorTheme");

  colorTheme =
    colorTheme !== "lightMode" && colorTheme !== "darkMode"
      ? "darkMode"
      : colorTheme;

  if (colorTheme === "lightMode") {
    changeTheme();
  }
}

// var body = document.getElementById("wrapper");
// var except = document.getElementById("selectedProject");

// body.addEventListener(
//   "click",
//   function () {
//     alert("wrapper");
//   },
//   false
// );
// except.addEventListener(
//   "click",
//   function (ev) {
//     alert("except");
//     ev.stopPropagation();
//   },
//   false
// );
