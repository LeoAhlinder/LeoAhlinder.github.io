function selectedProject(project){

    const pindeCode = document.getElementById("pincodeProject");
    const lightnovelProject = document.getElementById("lightnovelProject")

    pindeCode.classList.remove("selected")
    lightnovelProject.classList.remove("selected")


    const element = document.getElementById(project.id)
    element.classList.add("selected")


}