function selectedProject(project){

    //Add new element here and in the array to make it work.

    const pindeCode = document.getElementById("pincodeProject");
    const lightnovelProject = document.getElementById("lightnovelProject")


    const projectDescriptionText = ["Web-based employee management system that allows employees to record their work hours, clock in and out, track break times using a 4-digit pin code, and view their calculated pay. The system is managed by an admin who can add new employees, set their pay rates, and make adjustments as needed."
    ,"TALWDWOAM"]

    const gitHubLinks = ["https://github.com/LeoAhlinder/pincode","https://github.com/LeoAhlinder/LightNovelOnline"]

    const elements = [pindeCode,lightnovelProject]


    if (project === 0){
        for (let i = 0;i<elements.length;i++){
            elements[i].classList.remove("selected")
            elements[i].style.opacity = 1;
            const githubIcons = document.getElementsByClassName("fa");
            for (const githubIcon of githubIcons) {
                document.getElementById("projectBox").removeChild(githubIcon)
            }

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
                project.style.opacity = 1;
                const githubIcons = document.getElementsByClassName("fa");
                for (const githubIcon of githubIcons) {
                    document.getElementById("projectBox").removeChild(githubIcon)
                }

            }
            else{
                project.classList.add("selected");
                document.getElementById("projectName").innerHTML = "";
                document.getElementById("projectDescription").innerHTML = "";
                project.style.opacity = 0;
               


                setTimeout(function(){
                    document.getElementById("projectName").innerHTML = project.innerHTML;
                },500)
                setTimeout(function(){
                    document.getElementById("projectDescription").innerHTML = projectDescriptionText[i];
                    const li = document.createElement("li");
                    li.classList.add("fa", "fa-github", "githubIcon");
                    li.addEventListener("click",function(){
                        window.location = gitHubLinks[i]
                    })

                    document.getElementById("projectBox").append(li)
                },1000)
            }
        }
        else{
            elements[i].classList.remove("selected")
            elements[i].style.opacity = 1;
            const githubIcons = document.getElementsByClassName("fa");
            for (const githubIcon of githubIcons) {
                document.getElementById("projectBox").removeChild(githubIcon)
            }
            
        }
    }
}


function changeTheme(){

}