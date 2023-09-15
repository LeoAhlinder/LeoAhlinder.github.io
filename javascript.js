let lastClickTime = 0;

function selectedProject(project) {
  const currentTime = Date.now();
  if (currentTime - lastClickTime < 800) {
    return;
  }
  if (project != 0) {
    lastClickTime = currentTime;
  }
  const pindeCode = document.getElementById("pincodeProject");
  const lightnovelProject = document.getElementById("lightnovelProject");
  const carRental = document.getElementById("carRental");

  const projectDescription = document.getElementById("projectDescription");
  const projectBox = document.getElementById("projectBox");
  const projectName = document.getElementById("projectName");
  //Projecttext,livedemo and github links are the same order as these are made

  const projectDescriptionText = [
    "Web-based employee management system that allows employees to record their work hours, clock in and out, track break times using a 4-digit pin code, and view their calculated pay. The system is managed by an admin who can add new employees, set their pay rates, and make adjustments as needed.",
    "Books online",
    "Car rental service",
    "this is me",
  ];

  const liveDemo = [
    "",
    "",
    "https://ntig-uppsala.github.io/ntbbiluthyrning/",
    "",
  ];

  const gitHubLinks = [
    "https://github.com/LeoAhlinder/pincode",
    "https://github.com/LeoAhlinder/LightNovelOnline",
    "https://github.com/NTIG-Uppsala/ntbbiluthyrning",
    "",
  ];

  const elements = [pindeCode, lightnovelProject, carRental];

  if (project === 0) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("selected");
      elements[i].style.opacity = 1;
      const githubIcons = document.getElementsByClassName("fa");
      projectBox.classList.add("containerL");
      projectBox.classList.remove("containerLUsed");
      for (const githubIcon of githubIcons) {
        projectBox.removeChild(githubIcon);
      }
    }

    projectName.innerHTML = "";
    projectDescription.innerHTML = "";
    return;
  }

  for (let i = 0; i < elements.length; i++) {
    if (elements[i] === project) {
      if (project.classList.contains("selected")) {
        project.classList.remove("selected");
        projectName.innerHTML = "";
        projectDescription.innerHTML = "";
        projectBox.classList.add("containerL");
        projectBox.classList.remove("containerLUsed");
        project.style.opacity = 1;
        const githubIcons = document.getElementsByClassName("fa");
        for (const githubIcon of githubIcons) {
          projectBox.removeChild(githubIcon);
        }
      } else {
        project.classList.add("selected");
        projectName.innerHTML = "";
        projectDescription.innerHTML = "";
        project.style.opacity = 0;
        setTimeout(function () {
          projectBox.classList.remove("containerL");
          projectBox.classList.add("containerLUsed");
          projectName.innerHTML = project.innerHTML;
        }, 700);
        setTimeout(function () {
          let projectDescriptionIndex = 0;
          let projectText = "";
          function typeProjectName() {
            if (projectDescriptionIndex < projectDescriptionText[i].length) {
              projectText += projectDescriptionText[i].charAt(
                projectDescriptionIndex
              );
              projectDescription.innerText = projectText;
              projectDescriptionIndex++;
              setTimeout(typeProjectName, 15);
            }
          }
          typeProjectName();

          if (gitHubLinks[i] !== "") {
            const li = document.createElement("li");
            li.classList.add("fa", "fa-github", "githubIcon");
            li.setAttribute("target", "_blank");
            li.addEventListener("click", function () {
              window.open(gitHubLinks[i], "_blank");
            });
            projectBox.append(li);
          }
        }, 1000);
      }
    } else {
      elements[i].classList.remove("selected");
      elements[i].style.opacity = 1;
      const githubIcons = document.getElementsByClassName("fa");
      for (const githubIcon of githubIcons) {
        projectBox.removeChild(githubIcon);
      }
      projectBox.classList.add("containerL");
      projectBox.classList.remove("containerLUsed");
    }
  }
}

function changeTheme() {
  const sun = document.querySelector(".sun");
  const moon = document.querySelector(".moon");
  sun.classList.toggle("visible");
  moon.classList.toggle("visible");
  const element = document.querySelector("html");
  if (element.getAttribute("id") === "darkMode") {
    element.removeAttribute("data-bs-theme");
    element.removeAttribute("id", "darkMode");
    element.setAttribute("id", "light");
    element.setAttribute("data-bs-theme", "light");
  } else {
    element.removeAttribute("data-bs-theme");
    element.removeAttribute("id", "lightMode");
    element.setAttribute("data-bs-theme", "dark");
    element.setAttribute("id", "darkMode");
  }
}
