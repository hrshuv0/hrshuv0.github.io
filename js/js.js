



window.onload = function(){
    bool_about     = false;
    bool_expertise = false;
    bool_experience= false;
    bool_project   = true;
    check_view();
}

nav_about      = document.getElementById("nav_about")
nav_expertise  = document.getElementById("nav_expertise")
nav_experience = document.getElementById("nav_experience")
nav_project    =document.getElementById("nav_project")



nav_about.onclick = function(){
    try{
        // alert("About Clicked");        

        bool_about = !bool_about;
        bool_expertise = false;
        bool_experience= false;
        bool_project   = false;
        check_view();        
    }
    catch (error) {
        alert(error)
        
    }
}

nav_expertise.onclick = function(){

    try{
        // alert("Expetrise Clicked");         
        
        bool_about     = false;   
        bool_expertise = !bool_expertise;     
        bool_experience= false;
        bool_project   = false;

        check_view();
        console.log(bool_expertise);
    } 
    catch (error) {
        alert(error)
        
    }
    
}

nav_experience.onclick = function(){
    try {

        bool_expertise = false;
        bool_about     = false;        
        bool_experience= !bool_experience;
        bool_project   = false;

        check_view();
        
    } catch (error) {
        alert(error)        
    }
}

nav_project.onclick = function(){
    try {

        bool_expertise = false;
        bool_about     = false;        
        bool_experience= false;
        bool_project   = !bool_project;

        check_view();
        
    } catch (error) {
        alert(error)        
    }
}


About      = document.getElementById("About")
Expertise  = document.getElementById("Expertise")
Experience = document.getElementById("Experience")
Project    = document.getElementById("Project")

function check_view()
{
    if(bool_about){
        About.style.display = "";
    }else{
        About.style.display = "none";
    }

    if(bool_expertise){
        Expertise.style.display = "";
    }else{
        Expertise.style.display = "none";
    }

    if(bool_experience){
        Experience.style.display = "";
    }else{
        Experience.style.display = "none";
    }

    if(bool_project){
        Project.style.display = "";
    }else{
        Project.style.display = "none";
    }
    



}

































$('.slick-container').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    centerMode: false,
    variableWidth: true
  });