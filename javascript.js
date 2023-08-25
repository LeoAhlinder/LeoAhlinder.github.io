function selectedProject(project){

    //Add new element here and in the array to make it work.

    const pindeCode = document.getElementById("pincodeProject");
    const lightnovelProject = document.getElementById("lightnovelProject")

    const elements = [pindeCode,lightnovelProject]

    for (let i = 0;i<elements.length;i++){
        if (elements[i] === project){
            if (project.classList.contains("selected")){
                project.classList.remove("selected")
            }
            else{
                project.classList.add("selected")
            }
        }
        else{
            elements[i].classList.remove("selected")
        }
    }
}


function changeTheme(){

}