var backgroundOpacity = 0;
var darkMode = true

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

    darkMode = false
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

    darkMode = true
  }
}

function navbarOpacity() {
  const element = document.getElementById("scrollPast"); // "My Projects" text

  const opacity =
    (element.offsetTop + element.offsetHeight - window.scrollY) / 1000; // Get opacity based on how far to "My projects" header.

  backgroundOpacity = 0.906 - opacity; // minus one to get it to fade in.

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