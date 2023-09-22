function selectedProject(projectPressed) {
  console.log(projectPressed);

  const employee = document.getElementById("employee");
  const library = document.getElementById("library");
  const carRental = document.getElementById("carRental");
  //Projecttext,livedemo and github links are the same order as these are made

  const projectDescriptionText = [
    "Car rental service",
    "Books online",
    "Web-based employee management system that allows employees to record their work hours, clock in and out, track break times using a 4-digit pin code, and view their calculated pay. The system is managed by an admin who can add new employees, set their pay rates, and make adjustments as needed.",
  ];

  const liveDemo = ["https://ntig-uppsala.github.io/ntbbiluthyrning/", "", ""];

  const gitHubLinks = [
    "https://github.com/NTIG-Uppsala/ntbbiluthyrning",
    "https://github.com/LeoAhlinder/LightNovelOnline",
    "https://github.com/LeoAhlinder/pincode",
  ];

  const projects = [carRental, library, employee];

  for (const project of projects) {
    if (project === projectPressed) {
      project.classList.add("selectedProject");
      console.log(project.classList);
    } else {
      project.style.display = "none";
    }
  }
}

function changeTheme() {
  const sun = document.querySelector(".sun");
  const moon = document.querySelector(".moon");
  sun.classList.toggle("visible");
  moon.classList.toggle("visible");

  const background = document.getElementById("homePage");

  const element = document.querySelector("html");
  if (element.getAttribute("id") === "darkMode") {
    element.removeAttribute("data-bs-theme");
    element.removeAttribute("id", "darkMode");
    element.setAttribute("id", "light");
    element.setAttribute("data-bs-theme", "light");
    background.style.backgroundImage = "url('pictures/sunrisebackground.png')";
  } else {
    element.removeAttribute("data-bs-theme");
    element.removeAttribute("id", "lightMode");
    element.setAttribute("data-bs-theme", "dark");
    element.setAttribute("id", "darkMode");
    background.style.backgroundImage = "url('pictures/shootingstar.jpg')";
  }
}
