var backgroundOpacity = 0;

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

    document.body.style.backgroundColor = `RGB(255, 248, 250)`;
    cssRoot.style.setProperty(
      "--navbarColor",
      `rgba(255, 243, 240,${backgroundOpacity})`
    );
    backgroundImage.style.backgroundImage =
      "url('pictures/sunrisebackground.png')";

    localStorage.setItem("colorTheme", "lightMode");
  } else {
    element.removeAttribute("data-bs-theme");
    element.removeAttribute("id", "lightMode");
    element.setAttribute("data-bs-theme", "dark");
    element.setAttribute("id", "darkMode");

    document.body.style.backgroundColor = `rgb(33, 37, 41)`;
    cssRoot.style.setProperty(
      "--navbarColor",
      `rgba(43, 48, 53,${backgroundOpacity})`
    );
    backgroundImage.style.backgroundImage = "url('pictures/shootingstar.png')";

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

function navbarOpacity() {
  const element = document.getElementById("scrollPast"); // "My Projects" text

  const opacity =
    (element.offsetTop + element.offsetHeight - window.scrollY) / 1000; // Get opacity based on how far to "My projects" header.

  const cssRoot = document.querySelector(":root");
  const navbarColorRGBA =
    localStorage.getItem("colorTheme") === "darkMode"
      ? `RGBA(43, 48, 53,${backgroundOpacity})`
      : `RGBA(255, 236, 245,${backgroundOpacity})`;
  backgroundOpacity = 1.1 - opacity; // minus one to get it to fade in.
  cssRoot.style.setProperty("--navbarColor", navbarColorRGBA);
}

function preloadImage(){
  let img = new Image()
  img.src = "pictures/sunrisebackground.png"
}