function selectedProject(project){

   

    //Add new element here and in the array to make it work.

    const pindeCode = document.getElementById("pincodeProject");
    const lightnovelProject = document.getElementById("lightnovelProject")

    const elements = [pindeCode,lightnovelProject]

    if (project === 0){
        for (let i = 0;i<elements.length;i++){
            elements[i].classList.remove("selected")
        }
        document.getElementById("projectName").innerHTML = "";

        return
    }

    for (let i = 0;i<elements.length;i++){
        if (elements[i] === project){
            if (project.classList.contains("selected")){
                project.classList.remove("selected")
                document.getElementById("projectName").innerHTML = "";

            }
            else{
                project.classList.add("selected");
                document.getElementById("projectName").innerHTML = "";
                setTimeout(function(){
                    document.getElementById("projectName").innerHTML = project.innerHTML;
                },500)
            }
        }
        else{
            elements[i].classList.remove("selected")
        }
    }
}


function changeTheme(){

}