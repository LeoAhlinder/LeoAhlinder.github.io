function selectedProject(project){

   

    //Add new element here and in the array to make it work.

    const pindeCode = document.getElementById("pincodeProject");
    const lightnovelProject = document.getElementById("lightnovelProject")


    const projectDescriptionText = ["Web-based employee management system that allows employees to record their work hours, clock in and out, track break times using a 4-digit pin code, and view their calculated pay. The system is managed by an admin who can add new employees, set their pay rates, and make adjustments as needed."
    ,"TALWDWOAM"]

    const elements = [pindeCode,lightnovelProject]

    if (project === 0){
        for (let i = 0;i<elements.length;i++){
            elements[i].classList.remove("selected")
        }
        document.getElementById("projectName").innerHTML = "";
        document.getElementById("projectDescription").innerHTML = "";

        return
    }

    for (let i = 0;i<elements.length;i++){
        if (elements[i] === project){
            if (project.classList.contains("selected")){
                project.classList.remove("selected")
                document.getElementById("projectName").innerHTML = "";
                document.getElementById("projectDescription").innerHTML = "";

            }
            else{
                project.classList.add("selected");
                document.getElementById("projectName").innerHTML = "";
                document.getElementById("projectDescription").innerHTML = "";
                setTimeout(function(){
                    document.getElementById("projectName").innerHTML = project.innerHTML;
                },500)
                setTimeout(function(){
                    document.getElementById("projectDescription").innerHTML = projectDescriptionText[i];
                    console.log("test")
                },1000)
            }
        }
        else{
            elements[i].classList.remove("selected")
        }
    }
}


function changeTheme(){

}