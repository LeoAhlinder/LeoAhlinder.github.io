function selectedProject(projectPressed) {
  console.log(projectPressed);

  const employee = document.getElementById("employee");
  const library = document.getElementById("library");
  const carRental = document.getElementById("carRental");
  const barberShop = document.getElementById("barberShop")


  const showProjectsButton = document.getElementById("goBackToProjects")
  const projectTitle = document.getElementById("projectTitle")
  //Projecttext,livedemo and github links are the same order as these are made

  const projectDescriptionText = [
    "Car rental service",
    "Books online",
    "Web-based employee management system that allows employees to record their work hours, clock in and out, track break times using a 4-digit pin code, and view their calculated pay. The system is managed by an admin who can add new employees, set their pay rates, and make adjustments as needed.",
    "Barber Shop"
  ];

  const liveDemo = ["https://ntig-uppsala.github.io/ntbbiluthyrning/", "", "","https://ntig-uppsala.github.io/frisorsaxe/"];

  const gitHubLinks = [
    "https://github.com/NTIG-Uppsala/ntbbiluthyrning",
    "https://github.com/LeoAhlinder/LightNovelOnline",
    "https://github.com/LeoAhlinder/pincode",
    "https://github.com/NTIG-Uppsala/frisorsaxe"
  ];

  const projects = [carRental, library, employee,barberShop];


  for (const project of projects) {
    if (projectPressed === 0){
      if (project.classList.contains("selectedProject")){
        project.classList.remove("selectedProject")
      }
      else{
        project.style.display = "block"
        showProjectsButton.style.display = "none"
      }
    }
    else if (project === projectPressed) {
      project.classList.add("selectedProject");
      showProjectsButton.style.display = "block"
      projectTitle.innerText = "";
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
    element.setAttribute("id", "lightMode");
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
