var backgroundOpacity = 0;
var darkMode = true

function changeTheme() {
  const sun = document.querySelector(".sun");
  const moon = document.querySelector(".moon");
  sun.classList.toggle("visible");
  moon.classList.toggle("visible");

  const backgroundImage = document.getElementById("homePage");

  const resume = document.getElementsByClassName("containerCV")[0];

  const cssRoot = document.querySelector(":root");

  const element = document.querySelector("html");
  if (element.getAttribute("id") === "darkMode") {
    element.removeAttribute("data-bs-theme");
    element.removeAttribute("id", "darkMode");
    element.setAttribute("id", "lightMode");
    element.setAttribute("data-bs-theme", "light");

    resume.style.backgroundColor = "rgb(66,66,66)"
    resume.style.color = "white"

    cssRoot.style.setProperty("--cardImageColor", `gray`);

    document.body.style.backgroundColor = `RGB(255, 245, 248)`;
    cssRoot.style.setProperty(
      "--navbarColor",
      `rgba(255, 243, 240,${backgroundOpacity})`
    );
    backgroundImage.style.backgroundImage =
      "url('pictures/sunrisebackground.png')";

    darkMode = false
  } else {
    element.removeAttribute("data-bs-theme");
    element.removeAttribute("id", "lightMode");
    element.setAttribute("data-bs-theme", "dark");
    element.setAttribute("id", "darkMode");

    resume.style.backgroundColor = "white"
    resume.style.color = "black"

    cssRoot.style.setProperty("--cardImageColor", `black`);

    document.body.style.backgroundColor = `rgb(33, 37, 41)`;
    cssRoot.style.setProperty(
      "--navbarColor",
      `rgba(43, 48, 53,${backgroundOpacity})`
    );
    backgroundImage.style.backgroundImage = "url('pictures/shootingstar.png')";

    darkMode = true
  }
}

function navbarOpacity() {
  const element = document.getElementById("scrollPast"); // "My Projects" text

  const opacity =
    (element.offsetTop + element.offsetHeight - window.scrollY) / 1000; // Get opacity based on how far to "My projects" header.

  backgroundOpacity = 0.056 - opacity;

  const cssRoot = document.querySelector(":root");
  const navbarColorRGBA =
    darkMode === true
      ? `RGBA(43, 48, 53,${backgroundOpacity})`
      : `RGBA(255, 236, 245,${backgroundOpacity})`;

  cssRoot.style.setProperty("--navbarColor", navbarColorRGBA);
}

function preloadImage(){
  let img = new Image()
  img.src = "pictures/sunrisebackground.png"
}