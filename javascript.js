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
  const aboutMe = document.getElementById("aboutMe");

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

  const elements = [pindeCode, lightnovelProject, carRental, aboutMe];

  if (project === 0) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("selected");
      elements[i].style.opacity = 1;
      const githubIcons = document.getElementsByClassName("fa");
      document.getElementById("projectBox").classList.add("containerL");
      document.getElementById("projectBox").classList.remove("containerLUsed");
      for (const githubIcon of githubIcons) {
        document.getElementById("projectBox").removeChild(githubIcon);
      }
    }

    document.getElementById("projectName").innerHTML = "";
    document.getElementById("projectDescription").innerHTML = "";
    return;
  }

  for (let i = 0; i < elements.length; i++) {
    console.log(i);
    if (elements[i] === project) {
      if (project.classList.contains("selected")) {
        project.classList.remove("selected");
        document.getElementById("projectName").innerHTML = "";
        document.getElementById("projectDescription").innerHTML = "";
        document.getElementById("projectBox").classList.add("containerL");
        document
          .getElementById("projectBox")
          .classList.remove("containerLUsed");
        project.style.opacity = 1;
        const githubIcons = document.getElementsByClassName("fa");
        for (const githubIcon of githubIcons) {
          document.getElementById("projectBox").removeChild(githubIcon);
        }
      } else {
        project.classList.add("selected");
        document.getElementById("projectName").innerHTML = "";
        document.getElementById("projectDescription").innerHTML = "";
        project.style.opacity = 0;
        setTimeout(function () {
          document.getElementById("projectBox").classList.remove("containerL");
          document.getElementById("projectBox").classList.add("containerLUsed");
          document.getElementById("projectName").innerHTML = project.innerHTML;
        }, 700);
        setTimeout(function () {
          document.getElementById("projectDescription").innerHTML =
            projectDescriptionText[i];
          if (gitHubLinks[i] !== "") {
            const li = document.createElement("li");
            li.classList.add("fa", "fa-github", "githubIcon");
            li.setAttribute("target", "_blank");
            li.addEventListener("click", function () {
              window.open(gitHubLinks[i], "_blank");
            });
            document.getElementById("projectBox").append(li);
          }
        }, 1000);
      }
    } else {
      elements[i].classList.remove("selected");
      elements[i].style.opacity = 1;
      const githubIcons = document.getElementsByClassName("fa");
      for (const githubIcon of githubIcons) {
        document.getElementById("projectBox").removeChild(githubIcon);
      }
      document.getElementById("projectBox").classList.add("containerL");
      document.getElementById("projectBox").classList.remove("containerLUsed");
    }
  }
}

function changeTheme() {
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
