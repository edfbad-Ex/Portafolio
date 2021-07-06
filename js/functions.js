window.addEventListener("load", function () {
  
  //console.log("La resolución de tu pantalla es: " + screen.width + " x " + screen.height) 
  let childBars = document.getElementById("childBars");
  let navBar = document.getElementById("navBar");
  let fas1 = document.getElementById("fas1");
  let fas2 = document.getElementById("fas2");
  let fas3 = document.getElementById("fas3");
  let servicehead = document.getElementById("servicehead");
  let contacthead = document.getElementById("contacthead");

  //Projects
  let Projects  = document.getElementById("Projects");
  let ContainerProjects = document.getElementById("Container-Projects");
  let ProjectShowClose = document.getElementById("Project-Show-Close");
  let ProjectList = document.getElementById("Project-List");
  let ProjectListChild1 = document.getElementById("Project-List-Child1");
  let ProjectListChild2 = document.getElementById("Project-List-Child2");
  let ProjectListChild3 = document.getElementById("Project-List-Child3");
  let ProjectListChild4 = document.getElementById("Project-List-Child4");
  let ProjectListChildDesign1 = document.getElementById("Project-List-Child-Design1");
  let ProjectListChildDesign2 = document.getElementById("Project-List-Child-Design2");
  let ProjectListChildCode = document.getElementById("Project-List-Child-Code");
  let ProjectListChildWeb = document.getElementById("Project-List-Child-Web");
  let ProjectListChildDescription3BarChild1 = document.getElementById("Project-List-Child-Description3-Bar-Child1")
  let ProjectListChildDescription3BarChild2 = document.getElementById("Project-List-Child-Description3-Bar-Child2")
  let ProjectListChildDescription3BarChild3 = document.getElementById("Project-List-Child-Description3-Bar-Child3")
  let ProjectListChildDescription3BarChild4 = document.getElementById("Project-List-Child-Description3-Bar-Child4")
  let ProjectListChildDescription3BarChild5 = document.getElementById("Project-List-Child-Description3-Bar-Child5")
  let ProjectListChildDescription3BarChild6 = document.getElementById("Project-List-Child-Description3-Bar-Child6")
  let ProjectListChildDescription3BarChild7 = document.getElementById("Project-List-Child-Description3-Bar-Child7")
  let ProjectListChildDescription3BarChild8 = document.getElementById("Project-List-Child-Description3-Bar-Child8")
  let ProjectListChildDescription3BarChild9 = document.getElementById("Project-List-Child-Description3-Bar-Child9")
  let ProjectListChildDescription3BarChild10 = document.getElementById("Project-List-Child-Description3-Bar-Child10")
  let ProjectListChildDescription3BarChild11 = document.getElementById("Project-List-Child-Description3-Bar-Child11")
  let ProjectListChildDescription3BarChild12 = document.getElementById("Project-List-Child-Description3-Bar-Child12")
  let ProjectListChildDescription = document.getElementById("Project-List-Child-Description");
  let Down = document.getElementById("Down");
  let ProjectListChildDescriptionTechnologies = document.getElementById("Project-List-Child-Description-Technologies");
  let TitleTechnologies = document.getElementById("Title-Technologies");
  let ProjectListChildDescriptionTechnologiesSkills = document.getElementById("Project-List-Child-Description-Technologies-Skills");

  let ProjectListChildDesign3 = document.getElementById("Project-List-Child-Design3");
  let ProjectListChildDesign4 = document.getElementById("Project-List-Child-Design4");
  let ProjectListChildCodeCV = document.getElementById("Project-List-Child-Code-CV");
  let ProjectListChildWebCV = document.getElementById("Project-List-Child-Web-CV");
  let ProjectListChildDescriptionCV = document.getElementById("Project-List-Child-Description-CV");
  let TitleTechnologiesCV = document.getElementById("Title-Technologies-CV");
  let ProjectListChildDescriptionTechnologiesSkillsCV = document.getElementById("Project-List-Child-Description-Technologies-Skills-CV");

  let ProjectListChildDesign5 = document.getElementById("Project-List-Child-Design5");
  let ProjectListChildWebGeoAdmin = document.getElementById("Project-List-Child-Web-Geo-Admin");
  let ProjectListChildDescriptionGeoAdmin = document.getElementById("Project-List-Child-Description-Geo-Admin");
  let ProjectListChildDescriptionTechnologiesSkillsGeoAdmin = document.getElementById("Project-List-Child-Description-Technologies-Skills-Geo-Admin");

  let ProjectListChildDesign6 = document.getElementById("Project-List-Child-Design6");
  let ProjectListChildWebGeoUser = document.getElementById("Project-List-Child-Web-Geo-User");
  let ProjectListChildDescriptionGeoUser = document.getElementById("Project-List-Child-Description-Geo-User");
  let ProjectListChildDescriptionTechnologiesSkillsGeoUser = document.getElementById("Project-List-Child-Description-Technologies-Skills-Geo-User");


  //Media querys para ajuste de trasiciones y scale
  let mql1 = window.matchMedia("(min-width: 301px) and (max-width: 400px)");
  let mql2 = window.matchMedia("(min-width: 401px) and (max-width: 500px)");
  let mql3 = window.matchMedia("(min-width: 501px) and (max-width: 600px)");
  let mql4 = window.matchMedia("(min-width: 601px) and (max-width: 700px)");
  let mql5 = window.matchMedia("(min-width: 701px) and (max-width: 800px)");
  let mql6 = window.matchMedia("(min-width: 801px) and (max-width: 900px)");
  let mql7 = window.matchMedia("(min-width: 901px) and (max-width: 990px)");
  let mql8 = window.matchMedia("(min-width: 991px) and (max-width: 1400px)");

  let scrollPosition = window.pageYOffset;

  let navbar_height = navBar.clientHeight;
  navBar.style.height = 0;

  fas1.style.display = "block";
  fas2.style.display = "none";
  fas3.style.display = "none";

  if(mql1.matches){

    servicehead.style.position = "absolute";
    servicehead.style.left = "0px";
  
    contacthead.style.position = "absolute";
    contacthead.style.left = "0px";

    navBar.style.marginLeft = "1.2%";

  }

  else if(mql2.matches){

    servicehead.style.position = "absolute";
    servicehead.style.left = "0px";
  
    contacthead.style.position = "absolute";
    contacthead.style.left = "0px";

    navBar.style.marginLeft = "1.2%";

  }

  else if(mql3.matches){

    servicehead.style.position = "absolute";
    servicehead.style.left = "0px";
  
    contacthead.style.position = "absolute";
    contacthead.style.left = "0px";

    navBar.style.marginLeft = "1.2%";

  }

  else if(mql4.matches){

    servicehead.style.position = "absolute";
    servicehead.style.left = "0px";
  
    contacthead.style.position = "absolute";
    contacthead.style.left = "0px";

    navBar.style.marginLeft = "1.2%";

  }

  else if(mql5.matches){
    
    servicehead.style.position = "absolute";
    servicehead.style.left = "0px";
  
    contacthead.style.position = "absolute";
    contacthead.style.left = "0px";

    navBar.style.marginLeft = "1.4%";

  }

  else if(mql6.matches){
    
    servicehead.style.position = "absolute";
    servicehead.style.left = "0px";
  
    contacthead.style.position = "absolute";
    contacthead.style.left = "0px";

    navBar.style.marginLeft = "1.5%";

  }
  else if(mql7.matches){

    servicehead.style.position = "absolute";
    servicehead.style.left = "0px";
  
    contacthead.style.position = "absolute";
    contacthead.style.left = "0px";

    navBar.style.marginLeft = "1.5%";
    
  }




  if (scrollPosition >= 380) {
    navBar.style.backgroundColor = "rgba(0, 0, 0, 0.432)";
    navBar.style.zIndex = "3";
    navBar.style.position = "fixed";
    navBar.style.left = "14px";
    navBar.style.width = "96%";
    navBar.style.top = "70px";
    navBar.style.right = "0px";
    navBar.style.bottom = "0px";
  }

  childBars.addEventListener("click", function () {
    let navbar_position = navBar.style.opacity;

    if (navbar_position != 1) {
      navBar.style.height = `${navbar_height}px`;
      navBar.style.opacity = "1";
      fas1.style.display = "none";
      fas2.style.display = "block";
      fas3.style.display = "block";
    } else {
      navBar.style.height = 0;
      navBar.style.opacity = "0";
      fas1.style.display = "block";
      fas2.style.display = "none";
      fas3.style.display = "none";
    }
  });


  ProjectShowClose.innerHTML = "Projects Show";

  Projects.addEventListener("click", function () {
    
    let ProjectState = ProjectShowClose.innerHTML;

    if(ProjectState != "Projects Close"){

      ContainerProjects. style.top = "80px";
      ContainerProjects.style.bottom = "0vh";
      ProjectShowClose.innerHTML = "Projects Close";

      ProjectList.style.display = "flex";
      ProjectList.style.height = "100vh";

    }
    else{

      ContainerProjects. style.bottom = "0px";
      ContainerProjects.style.top = "94vh";  
      ProjectShowClose.innerHTML = "Projects Show";

      ProjectList.style.display = "none";
      ProjectList.style.height = "0vh";

    }

  });

  ProjectListChild1.style.flexGrow = "1";
  ProjectListChild2.style.flexGrow = "1";
  ProjectListChild3.style.flexGrow = "1";
  ProjectListChild4.style.flexGrow = "1";

  TitleTechnologies.style.margin = "5px";

  ProjectListChild1.addEventListener("click", function () {
    
    let ProjectState = ProjectListChild2.style.flexGrow;

    if(ProjectState != 0){

      ProjectListChild1.style.flexGrow = "1";
      ProjectListChild2.style.flexGrow = "0";
      ProjectListChild3.style.flexGrow = "0";
      ProjectListChild4.style.flexGrow = "0";

      ProjectListChildDesign1.style.height = "254vh";
      ProjectListChildDesign1.style.transform = "scale(1)";

      ProjectListChildDesign2.style.height = "100%";
      ProjectListChildDesign2.style.transform = "scale(1)";

      ProjectListChildDescription3BarChild1.style.width = "50.1%";
      ProjectListChildDescription3BarChild2.style.width = "47.3%";
      ProjectListChildDescription3BarChild3.style.width = "2.6%";

      ProjectListChildCode.style.display = "flex";
      ProjectListChildWeb.style.display = "flex";
      ProjectListChildDescription.style.display = "flex";
      ProjectListChildCode.style.opacity = "1";
      ProjectListChildWeb.style.opacity = "1";
      ProjectListChildDescription.style.opacity = "0";

      Down.style.display = "flex";

      ProjectListChildDescriptionTechnologies.style.display = "flex";


      TitleTechnologies.innerHTML = "Site created for the bank (easybank) with React JS and CSS (Flex Box)";
      
      ProjectListChildDescriptionTechnologiesSkills.style.display = "flex";
      ProjectListChildDescriptionTechnologiesSkills.style.bottom = "58px";

    }
    else{

      ProjectListChild1.style.flexGrow = "1";
      ProjectListChild2.style.flexGrow = "1";
      ProjectListChild3.style.flexGrow = "1";
      ProjectListChild4.style.flexGrow = "1";

      ProjectListChildDesign1.style.height = "auto";
      ProjectListChildDesign1.style.transform = "scale(1)";

      ProjectListChildDesign2.style.height = "auto";
      ProjectListChildDesign2.style.transform = "scale(1)";

      ProjectListChildDescription3BarChild1.style.width = "0%";
      ProjectListChildDescription3BarChild2.style.width = "0%";
      ProjectListChildDescription3BarChild3.style.width = "0%";

      ProjectListChildCode.style.display = "none";
      ProjectListChildWeb.style.display = "none";
      ProjectListChildDescription.style.display = "none";
      ProjectListChildCode.style.opacity = "0";
      ProjectListChildWeb.style.opacity = "0";
      ProjectListChildDescription.style.opacity = "0";

      Down.style.display = "none";

      ProjectListChildDescriptionTechnologies.style.display = "none";
      
      TitleTechnologies.innerHTML = "";

      ProjectListChildDescriptionTechnologiesSkills.style.display = "none";
      
    }

  });

  ProjectListChild2.addEventListener("click", function () {

    //Media querys para ajuste de trasiciones y scale
    let mql1 = window.matchMedia("(min-width: 301px) and (max-width: 400px)");
    let mql2 = window.matchMedia("(min-width: 401px) and (max-width: 500px)");
    let mql3 = window.matchMedia("(min-width: 501px) and (max-width: 600px)");
    let mql4 = window.matchMedia("(min-width: 601px) and (max-width: 700px)");
    let mql5 = window.matchMedia("(min-width: 701px) and (max-width: 800px)");
    let mql6 = window.matchMedia("(min-width: 801px) and (max-width: 900px)");
    let mql7 = window.matchMedia("(min-width: 901px) and (max-width: 990px)");
    let mql8 = window.matchMedia("(min-width: 991px) and (max-width: 1100px)");
    let mql9 = window.matchMedia("(min-width: 1101px) and (max-width: 1200px)");
    let mql10 = window.matchMedia("(min-width: 1201px) and (max-width: 1300px)");

    
    let ProjectState = ProjectListChild3.style.flexGrow;

    if(ProjectState != 0){

      ProjectListChild1.style.flexGrow = "0";
      ProjectListChild2.style.flexGrow = "1";
      ProjectListChild3.style.flexGrow = "0";
      ProjectListChild4.style.flexGrow = "0";
      
      ProjectListChildDesign3.style.height = "140vh";
      ProjectListChildDesign3.style.transform = "scale(1)";

      ProjectListChildDesign4.style.height = "100%";
      ProjectListChildDesign4.style.transform = "scale(1)";

      ProjectListChildDescription3BarChild4.style.width = "68.8%";
      ProjectListChildDescription3BarChild5.style.width = "27.5%";
      ProjectListChildDescription3BarChild6.style.width = "3.7%";

      ProjectListChildCodeCV.style.display = "flex";
      ProjectListChildWebCV.style.display = "flex";
      ProjectListChildDescriptionCV.style.display = "flex";
      ProjectListChildCodeCV.style.opacity = "1";
      ProjectListChildWebCV.style.opacity = "1";
      ProjectListChildDescriptionCV.style.opacity = "0";

      Down.style.display = "flex";
      

      ProjectListChildDescriptionTechnologies.style.display = "flex";
      ProjectListChildDescriptionTechnologies.style.width = "100%";


      TitleTechnologies.innerHTML = "Site created for my CV with React JS and CSS (Flex Box)";
      
      ProjectListChildDescriptionTechnologiesSkillsCV.style.display = "flex";
      ProjectListChildDescriptionTechnologiesSkillsCV.style.bottom = "58px";

      if(mql1.matches){

        ProjectListChildDesign3.style.height = "134vh";

      }

      else if(mql2.matches){

        ProjectListChildDesign3.style.height = "164vh";

      }

      else if(mql3.matches){

        ProjectListChildDesign3.style.height = "194vh";

      }

      else if(mql4.matches){

        ProjectListChildDesign3.style.height = "223.5vh";

      }

      else if(mql5.matches){

        ProjectListChildDesign3.style.height = "253vh";

      }
      
      else if(mql6.matches){

        ProjectListChildDesign3.style.height = "282.5vh";

      }

      else if(mql7.matches){

        ProjectListChildDesign3.style.height = "312vh";

      }

      else if(mql8.matches){

        ProjectListChildDesign3.style.height = "341.5vh";

      }

      else if(mql9.matches){

        ProjectListChildDesign3.style.height = "371vh";

      }

      else if(mql10.matches){

        ProjectListChildDesign3.style.height = "400.5vh";

      }

      else{

        ProjectListChildDesign3.style.height = "425vh";

      }

    }
    else{

      ProjectListChild1.style.flexGrow = "1";
      ProjectListChild2.style.flexGrow = "1";
      ProjectListChild3.style.flexGrow = "1";
      ProjectListChild4.style.flexGrow = "1";

      ProjectListChildDesign3.style.height = "auto";
      ProjectListChildDesign3.style.transform = "scale(1)";

      ProjectListChildDesign4.style.height = "auto";
      ProjectListChildDesign4.style.transform = "scale(1)";

      ProjectListChildDescription3BarChild4.style.width = "0%";
      ProjectListChildDescription3BarChild5.style.width = "0%";
      ProjectListChildDescription3BarChild6.style.width = "0%";

      ProjectListChildCodeCV.style.display = "none";
      ProjectListChildWebCV.style.display = "none";
      ProjectListChildDescriptionCV.style.display = "none";
      ProjectListChildCodeCV.style.opacity = "0";
      ProjectListChildWebCV.style.opacity = "0";
      ProjectListChildDescriptionCV.style.opacity = "0";

      Down.style.display = "none";

      ProjectListChildDescriptionTechnologies.style.display = "none";
      
      TitleTechnologiesCV.innerHTML = "";

      ProjectListChildDescriptionTechnologiesSkillsCV.style.display = "none";
      
    }

  });

  ProjectListChild3.addEventListener("click", function () {
    
     //Media querys para ajuste de trasiciones y scale
     let mql1 = window.matchMedia("(min-width: 301px) and (max-width: 400px)");
     let mql2 = window.matchMedia("(min-width: 401px) and (max-width: 500px)");
     let mql3 = window.matchMedia("(min-width: 501px) and (max-width: 600px)");
     let mql4 = window.matchMedia("(min-width: 601px) and (max-width: 700px)");
     let mql5 = window.matchMedia("(min-width: 701px) and (max-width: 800px)");
     let mql6 = window.matchMedia("(min-width: 801px) and (max-width: 900px)");
     let mql7 = window.matchMedia("(min-width: 901px) and (max-width: 990px)");
     let mql8 = window.matchMedia("(min-width: 991px) and (max-width: 1100px)");
     let mql9 = window.matchMedia("(min-width: 1101px) and (max-width: 1200px)");
     let mql10 = window.matchMedia("(min-width: 1201px) and (max-width: 1300px)");
 
     
     let ProjectState = ProjectListChild4.style.flexGrow;
 
     if(ProjectState != 0){
 
       ProjectListChild1.style.flexGrow = "0";
       ProjectListChild2.style.flexGrow = "0";
       ProjectListChild3.style.flexGrow = "1";
       ProjectListChild4.style.flexGrow = "0";
       
       ProjectListChildDesign5.style.height = "140vh";
       ProjectListChildDesign5.style.transform = "scale(1)";

       ProjectListChildDescription3BarChild7.style.width = "16.8%";
       ProjectListChildDescription3BarChild8.style.width = "7.5%";
       ProjectListChildDescription3BarChild9.style.width = "75.7%";
 
       ProjectListChildWebGeoAdmin.style.display = "flex";
       ProjectListChildDescriptionGeoAdmin.style.display = "flex";
       ProjectListChildWebGeoAdmin.style.opacity = "1";
       ProjectListChildDescriptionGeoAdmin.style.opacity = "0";
 
       Down.style.display = "flex";
       
 
       ProjectListChildDescriptionTechnologies.style.display = "flex";
       ProjectListChildDescriptionTechnologies.style.width = "100%";
 
 
       TitleTechnologies.innerHTML = "Site created for the system administrator with PHP, JS and CSS. The database is MySql";
       
       ProjectListChildDescriptionTechnologiesSkillsGeoAdmin.style.display = "flex";
       ProjectListChildDescriptionTechnologiesSkillsGeoAdmin.style.bottom = "58px";
 
       if(mql1.matches){
 
        ProjectListChildDesign5.style.height = "219vh";
 
       }
 
       else if(mql2.matches){
 
        ProjectListChildDesign5.style.height = "276vh"; 
       }
 
       else if(mql3.matches){
 
        ProjectListChildDesign5.style.height = "333vh";
 
       }
 
       else if(mql4.matches){
 
         ProjectListChildDesign5.style.height = "390vh";
 
       }
 
       else if(mql5.matches){
 
         ProjectListChildDesign5.style.height = "448vh";
 
       }
       
       else if(mql6.matches){
 
         ProjectListChildDesign5.style.height = "506vh";
 
       }
 
       else if(mql7.matches){
 
         ProjectListChildDesign5.style.height = "564vh";
 
       }
 
       else if(mql8.matches){
 
         ProjectListChildDesign5.style.height = "622vh";
 
       }
 
       else if(mql9.matches){
 
         ProjectListChildDesign5.style.height = "680vh";
 
       }
 
       else if(mql10.matches){
 
         ProjectListChildDesign5.style.height = "728vh";
 
       }
 
       else{
 
         ProjectListChildDesign5.style.height = "789vh";
 
       }
 
     }
     else{
 
       ProjectListChild1.style.flexGrow = "1";
       ProjectListChild2.style.flexGrow = "1";
       ProjectListChild3.style.flexGrow = "1";
       ProjectListChild4.style.flexGrow = "1";
 
       ProjectListChildDesign5.style.height = "auto";
       ProjectListChildDesign5.style.transform = "scale(1)";
       
       ProjectListChildDescription3BarChild7.style.width = "0%";
       ProjectListChildDescription3BarChild8.style.width = "0%";
       ProjectListChildDescription3BarChild9.style.width = "0%";
 
       ProjectListChildWebGeoAdmin.style.display = "none";
       ProjectListChildDescriptionGeoAdmin.style.display = "none";
       ProjectListChildWebGeoAdmin.style.opacity = "0";
       ProjectListChildDescriptionGeoAdmin.style.opacity = "0";
 
       Down.style.display = "none";
 
       ProjectListChildDescriptionTechnologies.style.display = "none";
       
       TitleTechnologiesCV.innerHTML = "";
 
       ProjectListChildDescriptionTechnologiesSkillsGeoAdmin.style.display = "none";
       
     }
 
  });

  ProjectListChild4.addEventListener("click", function () {
    
    //Media querys para ajuste de trasiciones y scale
    let mql1 = window.matchMedia("(min-width: 301px) and (max-width: 400px)");
    let mql2 = window.matchMedia("(min-width: 401px) and (max-width: 500px)");
    let mql3 = window.matchMedia("(min-width: 501px) and (max-width: 600px)");
    let mql4 = window.matchMedia("(min-width: 601px) and (max-width: 700px)");
    let mql5 = window.matchMedia("(min-width: 701px) and (max-width: 800px)");
    let mql6 = window.matchMedia("(min-width: 801px) and (max-width: 900px)");
    let mql7 = window.matchMedia("(min-width: 901px) and (max-width: 990px)");
    let mql8 = window.matchMedia("(min-width: 991px) and (max-width: 1100px)");
    let mql9 = window.matchMedia("(min-width: 1101px) and (max-width: 1200px)");
    let mql10 = window.matchMedia("(min-width: 1201px) and (max-width: 1300px)");

    
    let ProjectState = ProjectListChild1.style.flexGrow;

    if(ProjectState != 0){

      ProjectListChild1.style.flexGrow = "0";
      ProjectListChild2.style.flexGrow = "0";
      ProjectListChild3.style.flexGrow = "0";
      ProjectListChild4.style.flexGrow = "1";
      
      ProjectListChildDesign6.style.height = "140vh";
      ProjectListChildDesign6.style.transform = "scale(1)";

      ProjectListChildDescription3BarChild10.style.width = "22.8%";
      ProjectListChildDescription3BarChild11.style.width = "7.5%";
      ProjectListChildDescription3BarChild12.style.width = "69.7%";

      ProjectListChildWebGeoUser.style.display = "flex";
      ProjectListChildDescriptionGeoUser.style.display = "flex";
      ProjectListChildWebGeoUser.style.opacity = "1";
      ProjectListChildDescriptionGeoUser.style.opacity = "0";

      Down.style.display = "flex";
      

      ProjectListChildDescriptionTechnologies.style.display = "flex";
      ProjectListChildDescriptionTechnologies.style.width = "100%";


      TitleTechnologies.innerHTML = "Site created for the system client with PHP, JS and CSS. The database is MySql";
      
      ProjectListChildDescriptionTechnologiesSkillsGeoUser.style.display = "flex";
      ProjectListChildDescriptionTechnologiesSkillsGeoUser.style.bottom = "58px";

      if(mql1.matches){

       ProjectListChildDesign6.style.height = "140vh";

      }

      else if(mql2.matches){

       ProjectListChildDesign6.style.height = "170vh"; 
      }

      else if(mql3.matches){

       ProjectListChildDesign6.style.height = "203vh";

      }

      else if(mql4.matches){

        ProjectListChildDesign6.style.height = "233vh";

      }

      else if(mql5.matches){

        ProjectListChildDesign6.style.height = "264vh";

      }
      
      else if(mql6.matches){

        ProjectListChildDesign6.style.height = "294vh";

      }

      else if(mql7.matches){

        ProjectListChildDesign6.style.height = "324vh";

      }

      else if(mql8.matches){

        ProjectListChildDesign6.style.height = "355vh";

      }

      else if(mql9.matches){

        ProjectListChildDesign6.style.height = "385vh";

      }

      else if(mql10.matches){

        ProjectListChildDesign6.style.height = "414vh";

      }

      else{

        ProjectListChildDesign6.style.height = "443vh";

      }

    }
    else{

      ProjectListChild1.style.flexGrow = "1";
      ProjectListChild2.style.flexGrow = "1";
      ProjectListChild3.style.flexGrow = "1";
      ProjectListChild4.style.flexGrow = "1";

      ProjectListChildDesign6.style.height = "auto";
      ProjectListChildDesign6.style.transform = "scale(1)";
      
      ProjectListChildDescription3BarChild10.style.width = "0%";
      ProjectListChildDescription3BarChild11.style.width = "0%";
      ProjectListChildDescription3BarChild12.style.width = "0%";

      ProjectListChildWebGeoUser.style.display = "none";
      ProjectListChildDescriptionGeoUser.style.display = "none";
      ProjectListChildWebGeoUser.style.opacity = "0";
      ProjectListChildDescriptionGeoUser.style.opacity = "0";

      Down.style.display = "none";

      ProjectListChildDescriptionTechnologies.style.display = "none";
      
      TitleTechnologiesCV.innerHTML = "";

      ProjectListChildDescriptionTechnologiesSkillsGeoUser.style.display = "none";
      
    }

  });  


});



window.addEventListener("scroll", function () {
  let SkillsBar = document.getElementsByClassName("SkillsBar");
  let ContainerNavBar = document.getElementById("Container-NavBar");
  let navHome = document.getElementById("navHome");
  let BackgroundNavBar = document.getElementById("Background-NavBar");
  let navBar = document.getElementById("navBar");
  let child = document.getElementsByClassName("child");
  let link = document.getElementsByClassName("link");

  //Media querys para ajuste de trasiciones y scale
  let mql1 = window.matchMedia("(min-width: 301px) and (max-width: 400px)");
  let mql2 = window.matchMedia("(min-width: 401px) and (max-width: 500px)");
  let mql3 = window.matchMedia("(min-width: 501px) and (max-width: 600px)");
  let mql4 = window.matchMedia("(min-width: 601px) and (max-width: 700px)");
  let mql5 = window.matchMedia("(min-width: 701px) and (max-width: 800px)");
  let mql6 = window.matchMedia("(min-width: 801px) and (max-width: 900px)");
  let mql7 = window.matchMedia("(min-width: 901px) and (max-width: 990px)");
  let mql8 = window.matchMedia("(min-width: 991px) and (max-width: 1200px)");
  let mql9 = window.matchMedia("(min-width: 1201px) and (max-width: 1300px)");
  let mql10 = window.matchMedia("(min-width: 1301px)");

  let scrollPosition = window.pageYOffset;
  //console.log(scrollPosition);

  if (scrollPosition > 600) {
    var i;
    for (i = 0; i < SkillsBar.length; i++) {
      SkillsBar[i].style.width = "100%";
      //SkillsBar[i].style.transition = "ease-in-out 500ms";
    }
  } else {
    var i;
    for (i = 0; i < SkillsBar.length; i++) {
      SkillsBar[i].style.width = "0%";
      //SkillsBar[i].style.transition = "ease-in-out 500ms";
    }
  }

  if(mql1.matches){

    if (scrollPosition >= 200) {
     
      ContainerNavBar.style.position = "fixed";
      ContainerNavBar.style.zIndex = "3";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "31%";
  
      BackgroundNavBar.style.top = "0";
      BackgroundNavBar.style.position = "fixed";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.backgroundColor = "black";
      BackgroundNavBar.style.borderBottom = "1px solid #18d26e";
      BackgroundNavBar.style.height = "60px";
      BackgroundNavBar.style.zIndex = "2";
     
      navHome.style.position = "fixed";
      navHome.style.marginTop = "0px";
      navHome.style.zIndex = "3";
      navHome.style.top = "16px";
      navHome.style.transform = "scale(0.8)";
      navHome.style.transition = "ease-in-out 800ms";

      navBar.style.backgroundColor = "rgba(0, 0, 0, 0.432)";
      navBar.style.zIndex = "3";
      navBar.style.left = "0px";
      navBar.style.width = "96%";
      navBar.style.top = "70px";
      navBar.style.position = "fixed";

      navBar.style.right = "0px";
      navBar.style.bottom = "0px";

      var i1;
      for (i1 = 0; i1 < child.length; i1++) {
        child[i1].style.width = "100%";
        child[i1].style.padding = "0px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

      var i2;
      for (i2 = 0; i2 < link.length; i2++) {
        link[i2].style.padding = "20px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      } 

    }
    else {

      ContainerNavBar.style.position = "relative";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "0%";
  
      navHome.style.position = "relative";
      navHome.style.marginTop = "65vh";
      navHome.style.transition = "ease-in-out 800ms";
      navHome.style.top = "0%";
      navHome.style.transform = "scale(1)";
  
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.backgroundColor = "transparent";
      BackgroundNavBar.style.height = "0px";
      BackgroundNavBar.style.zIndex = "2";

      navBar.style.backgroundColor = "rgba(0, 0, 0, 0.432)";
      navBar.style.zIndex = "3";
      navBar.style.width = "96%";
      navBar.style.position = "fixed";

      navBar.style.left = "0px";
      navBar.style.top = "50px";
      navBar.style.right = "0px";
      navBar.style.bottom = "0px";

      var i1;
      for (i1 = 0; i1 < child.length; i1++) {
        child[i1].style.width = "100%";
        child[i1].style.padding = "0px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

      var i2;
      for (i2 = 0; i2 < link.length; i2++) {
        link[i2].style.padding = "20px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

    }


  }

  else if(mql2.matches){

    if (scrollPosition >= 200) {
     
      ContainerNavBar.style.position = "fixed";
      ContainerNavBar.style.zIndex = "3";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "31%";
  
      BackgroundNavBar.style.top = "0";
      BackgroundNavBar.style.position = "fixed";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.backgroundColor = "black";
      BackgroundNavBar.style.borderBottom = "1px solid #18d26e";
      BackgroundNavBar.style.height = "60px";
      BackgroundNavBar.style.zIndex = "2";
     
      navHome.style.position = "fixed";
      navHome.style.marginTop = "0px";
      navHome.style.zIndex = "3";
      navHome.style.top = "16px";
      navHome.style.transform = "scale(0.8)";
      navHome.style.transition = "ease-in-out 800ms";

      navBar.style.backgroundColor = "rgba(0, 0, 0, 0.432)";
      navBar.style.zIndex = "3";
      navBar.style.left = "0px";
      navBar.style.width = "96%";
      navBar.style.top = "70px";
      navBar.style.position = "fixed";

      navBar.style.right = "0px";
      navBar.style.bottom = "0px";

      var i1;
      for (i1 = 0; i1 < child.length; i1++) {
        child[i1].style.width = "100%";
        child[i1].style.padding = "0px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

      var i2;
      for (i2 = 0; i2 < link.length; i2++) {
        link[i2].style.padding = "20px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      } 

    }
    else {

      ContainerNavBar.style.position = "relative";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "0%";
  
      navHome.style.position = "relative";
      navHome.style.marginTop = "60vh";
      navHome.style.transition = "ease-in-out 800ms";
      navHome.style.top = "0%";
      navHome.style.transform = "scale(1)";
  
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.backgroundColor = "transparent";
      BackgroundNavBar.style.height = "0px";
      BackgroundNavBar.style.zIndex = "2";

      navBar.style.backgroundColor = "rgba(0, 0, 0, 0.432)";
      navBar.style.zIndex = "3";
      navBar.style.width = "96%";
      navBar.style.position = "fixed";

      navBar.style.left = "0px";
      navBar.style.top = "50px";
      navBar.style.right = "0px";
      navBar.style.bottom = "0px";

      var i1;
      for (i1 = 0; i1 < child.length; i1++) {
        child[i1].style.width = "100%";
        child[i1].style.padding = "0px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

      var i2;
      for (i2 = 0; i2 < link.length; i2++) {
        link[i2].style.padding = "20px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

    }


  }

  else if(mql3.matches){

    if (scrollPosition >= 200) {
     
      ContainerNavBar.style.position = "fixed";
      ContainerNavBar.style.zIndex = "3";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "31%";
  
      BackgroundNavBar.style.top = "0";
      BackgroundNavBar.style.position = "fixed";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.backgroundColor = "black";
      BackgroundNavBar.style.borderBottom = "1px solid #18d26e";
      BackgroundNavBar.style.height = "60px";
      BackgroundNavBar.style.zIndex = "2";
     
      navHome.style.position = "fixed";
      navHome.style.marginTop = "0px";
      navHome.style.zIndex = "3";
      navHome.style.top = "6px";
      navHome.style.transform = "scale(0.8)";
      navHome.style.transition = "ease-in-out 800ms";

      navBar.style.backgroundColor = "rgba(0, 0, 0, 0.432)";
      navBar.style.zIndex = "3";
      navBar.style.left = "0px";
      navBar.style.width = "96%";
      navBar.style.top = "70px";
      navBar.style.position = "fixed";

      navBar.style.right = "0px";
      navBar.style.bottom = "0px";

      var i1;
      for (i1 = 0; i1 < child.length; i1++) {
        child[i1].style.width = "100%";
        child[i1].style.padding = "0px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

      var i2;
      for (i2 = 0; i2 < link.length; i2++) {
        link[i2].style.padding = "20px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      } 

    }
    else {

      ContainerNavBar.style.position = "relative";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "0%";
  
      navHome.style.position = "relative";
      navHome.style.marginTop = "50vh";
      navHome.style.transition = "ease-in-out 800ms";
      navHome.style.top = "0%";
      navHome.style.transform = "scale(1)";
  
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.backgroundColor = "transparent";
      BackgroundNavBar.style.height = "0px";
      BackgroundNavBar.style.zIndex = "2";

      navBar.style.backgroundColor = "rgba(0, 0, 0, 0.432)";
      navBar.style.zIndex = "3";
      navBar.style.width = "96%";
      navBar.style.position = "fixed";

      navBar.style.left = "0px";
      navBar.style.top = "50px";
      navBar.style.right = "0px";
      navBar.style.bottom = "0px";

      var i1;
      for (i1 = 0; i1 < child.length; i1++) {
        child[i1].style.width = "100%";
        child[i1].style.padding = "0px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

      var i2;
      for (i2 = 0; i2 < link.length; i2++) {
        link[i2].style.padding = "20px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

    }


  }

  else if(mql4.matches){

    if (scrollPosition >= 200) {
     
      ContainerNavBar.style.position = "fixed";
      ContainerNavBar.style.zIndex = "3";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "31%";
  
      BackgroundNavBar.style.top = "0";
      BackgroundNavBar.style.position = "fixed";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.backgroundColor = "black";
      BackgroundNavBar.style.borderBottom = "1px solid #18d26e";
      BackgroundNavBar.style.height = "60px";
      BackgroundNavBar.style.zIndex = "2";
     
      navHome.style.position = "fixed";
      navHome.style.marginTop = "0px";
      navHome.style.zIndex = "3";
      navHome.style.top = "6px";
      navHome.style.transform = "scale(0.8)";
      navHome.style.transition = "ease-in-out 800ms";

      navBar.style.backgroundColor = "rgba(0, 0, 0, 0.432)";
      navBar.style.zIndex = "3";
      navBar.style.left = "0px";
      navBar.style.width = "96%";
      navBar.style.top = "70px";
      navBar.style.position = "fixed";

      navBar.style.right = "0px";
      navBar.style.bottom = "0px";

      var i1;
      for (i1 = 0; i1 < child.length; i1++) {
        child[i1].style.width = "100%";
        child[i1].style.padding = "0px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

      var i2;
      for (i2 = 0; i2 < link.length; i2++) {
        link[i2].style.padding = "20px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      } 

    }
    else {

      ContainerNavBar.style.position = "relative";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "0%";
  
      navHome.style.position = "relative";
      navHome.style.marginTop = "50vh";
      navHome.style.transition = "ease-in-out 800ms";
      navHome.style.top = "0%";
      navHome.style.transform = "scale(1)";
  
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.backgroundColor = "transparent";
      BackgroundNavBar.style.height = "0px";
      BackgroundNavBar.style.zIndex = "2";

      navBar.style.backgroundColor = "rgba(0, 0, 0, 0.432)";
      navBar.style.zIndex = "3";
      navBar.style.width = "96%";
      navBar.style.position = "fixed";

      navBar.style.left = "0px";
      navBar.style.top = "50px";
      navBar.style.right = "0px";
      navBar.style.bottom = "0px";

      var i1;
      for (i1 = 0; i1 < child.length; i1++) {
        child[i1].style.width = "100%";
        child[i1].style.padding = "0px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

      var i2;
      for (i2 = 0; i2 < link.length; i2++) {
        link[i2].style.padding = "20px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

    }


  }

  else if(mql5.matches){

    if (scrollPosition >= 200) {
     
      ContainerNavBar.style.position = "fixed";
      ContainerNavBar.style.zIndex = "3";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "31%";
  
      BackgroundNavBar.style.top = "0";
      BackgroundNavBar.style.position = "fixed";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.backgroundColor = "black";
      BackgroundNavBar.style.borderBottom = "1px solid #18d26e";
      BackgroundNavBar.style.height = "60px";
      BackgroundNavBar.style.zIndex = "2";
     
      navHome.style.position = "fixed";
      navHome.style.marginTop = "0px";
      navHome.style.zIndex = "3";
      navHome.style.top = "6px";
      navHome.style.transform = "scale(0.8)";
      navHome.style.transition = "ease-in-out 800ms";

      navBar.style.backgroundColor = "rgba(0, 0, 0, 0.432)";
      navBar.style.zIndex = "3";
      navBar.style.left = "0px";
      navBar.style.width = "96%";
      navBar.style.top = "70px";
      navBar.style.position = "fixed";

      navBar.style.right = "0px";
      navBar.style.bottom = "0px";

      var i1;
      for (i1 = 0; i1 < child.length; i1++) {
        child[i1].style.width = "100%";
        child[i1].style.padding = "0px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

      var i2;
      for (i2 = 0; i2 < link.length; i2++) {
        link[i2].style.padding = "20px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      } 

    }
    else {

      ContainerNavBar.style.position = "relative";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "0%";
  
      navHome.style.position = "relative";
      navHome.style.marginTop = "55vh";
      navHome.style.transition = "ease-in-out 800ms";
      navHome.style.top = "0%";
      navHome.style.transform = "scale(1)";
  
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.backgroundColor = "transparent";
      BackgroundNavBar.style.height = "0px";
      BackgroundNavBar.style.zIndex = "2";

      navBar.style.backgroundColor = "rgba(0, 0, 0, 0.432)";
      navBar.style.zIndex = "3";
      navBar.style.width = "96%";
      navBar.style.position = "fixed";

      navBar.style.left = "0px";
      navBar.style.top = "50px";
      navBar.style.right = "0px";
      navBar.style.bottom = "0px";

      var i1;
      for (i1 = 0; i1 < child.length; i1++) {
        child[i1].style.width = "100%";
        child[i1].style.padding = "0px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

      var i2;
      for (i2 = 0; i2 < link.length; i2++) {
        link[i2].style.padding = "20px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

    }


  }

  else if (mql6.matches) {

    if (scrollPosition >= 200) {
     
      ContainerNavBar.style.position = "fixed";
      ContainerNavBar.style.zIndex = "3";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "31%";
  
      navHome.style.position = "fixed";
      navHome.style.zIndex = "3";
      navHome.style.marginTop = "0px";
      navHome.style.top = "6px";
      navHome.style.transform = "scale(0.8)";
      navHome.style.transition = "ease-in-out 800ms";
  
      BackgroundNavBar.style.top = "0";
      BackgroundNavBar.style.position = "fixed";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.backgroundColor = "black";
      BackgroundNavBar.style.borderBottom = "1px solid #18d26e";
      BackgroundNavBar.style.height = "60px";
      BackgroundNavBar.style.zIndex = "2";

      navBar.style.backgroundColor = "rgba(0, 0, 0, 0.432)";
      navBar.style.zIndex = "3";
      navBar.style.left = "0px";
      navBar.style.width = "96%";
      navBar.style.top = "70px";
      navBar.style.position = "fixed";

      navBar.style.right = "0px";
      navBar.style.bottom = "0px";

      var i1;
      for (i1 = 0; i1 < child.length; i1++) {
        child[i1].style.width = "100%";
        child[i1].style.padding = "0px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

      var i2;
      for (i2 = 0; i2 < link.length; i2++) {
        link[i2].style.padding = "20px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      } 

    }
    else {

      ContainerNavBar.style.position = "relative";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "0%";
  
      navHome.style.position = "relative";
      navHome.style.transition = "ease-in-out 800ms";
      navHome.style.marginTop = "52.5vh";
      navHome.style.top = "0%";
      navHome.style.transform = "scale(1)";
  
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.backgroundColor = "transparent";
      BackgroundNavBar.style.height = "0px";
      BackgroundNavBar.style.zIndex = "2";

      navBar.style.backgroundColor = "rgba(0, 0, 0, 0.432)";
      navBar.style.zIndex = "3";
      navBar.style.width = "96%";
      navBar.style.position = "fixed";

      navBar.style.left = "0px";
      navBar.style.top = "50px";
      navBar.style.right = "0px";
      navBar.style.bottom = "0px";

      var i1;
      for (i1 = 0; i1 < child.length; i1++) {
        child[i1].style.width = "100%";
        child[i1].style.padding = "0px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

      var i2;
      for (i2 = 0; i2 < link.length; i2++) {
        link[i2].style.padding = "20px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

    }
    
  }
  else if (mql7.matches) {

    if (scrollPosition >= 380) {

      ContainerNavBar.style.position = "fixed";
      ContainerNavBar.style.zIndex = "3";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "31%";

      navHome.style.position = "fixed";
      navHome.style.zIndex = "3";
      navHome.style.marginTop = "6px";
      navHome.style.top = "0%";
      navHome.style.transform = "scale(0.8)";
      navHome.style.transition = "ease-in-out 800ms";

      BackgroundNavBar.style.top = "0";
      BackgroundNavBar.style.position = "fixed";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.backgroundColor = "black";
      BackgroundNavBar.style.borderBottom = "1px solid #18d26e";
      BackgroundNavBar.style.height = "60px";
      BackgroundNavBar.style.zIndex = "2";

      navBar.style.backgroundColor = "rgba(0, 0, 0, 0.432)";
      navBar.style.zIndex = "3";
      navBar.style.left = "0px";
      navBar.style.width = "96%";
      navBar.style.top = "70px";
      navBar.style.position = "fixed";

      navBar.style.right = "0px";
      navBar.style.bottom = "0px";

      var i1;
      for (i1 = 0; i1 < child.length; i1++) {
        child[i1].style.width = "100%";
        child[i1].style.padding = "0px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

      var i2;
      for (i2 = 0; i2 < link.length; i2++) {
        link[i2].style.padding = "20px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

    }
    else{

      ContainerNavBar.style.position = "relative";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "0%";
  
      navHome.style.position = "relative";
      navHome.style.transition = "ease-in-out 800ms";
      navHome.style.top = "0%";
      navHome.style.marginTop = "50vh";
      navHome.style.transform = "scale(1)";
  
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.backgroundColor = "transparent";
      BackgroundNavBar.style.height = "0px";
      BackgroundNavBar.style.zIndex = "2";

      navBar.style.backgroundColor = "rgba(0, 0, 0, 0.432)";
      navBar.style.zIndex = "3";
      navBar.style.width = "96%";
      navBar.style.position = "fixed";

      navBar.style.left = "0px";
      navBar.style.top = "50px";
      navBar.style.right = "0px";
      navBar.style.bottom = "0px";

      var i1;
      for (i1 = 0; i1 < child.length; i1++) {
        child[i1].style.width = "100%";
        child[i1].style.padding = "0px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

      var i2;
      for (i2 = 0; i2 < link.length; i2++) {
        link[i2].style.padding = "20px";
        //SkillsBar[i].style.transition = "ease-in-out 500ms";
      }

    }


  }

  else if(mql8.matches){

    if (scrollPosition >= 380) {

      ContainerNavBar.style.position = "fixed";
      ContainerNavBar.style.zIndex = "3";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "44%";
  
      navHome.style.position = "fixed";
      navHome.style.zIndex = "3";
      navHome.style.marginTop = "6px";
      navHome.style.top = "0%";
      navHome.style.transform = "scale(0.8)";
      navHome.style.transition = "ease-in-out 800ms";
  
      BackgroundNavBar.style.top = "0";
      BackgroundNavBar.style.position = "fixed";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.backgroundColor = "black";
      BackgroundNavBar.style.borderBottom = "1px solid #18d26e";
      BackgroundNavBar.style.height = "60px";
      BackgroundNavBar.style.zIndex = "2";

    }
    else{

      ContainerNavBar.style.position = "relative";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "0%";
  
      navHome.style.position = "relative";
      navHome.style.transition = "ease-in-out 800ms";
      navHome.style.marginTop = "37vh";
      navHome.style.top = "0%";
      navHome.style.transform = "scale(1)";
  
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.backgroundColor = "transparent";
      BackgroundNavBar.style.height = "0px";
      BackgroundNavBar.style.zIndex = "2";

    }

  }

  else if(mql9.matches){

    if (scrollPosition >= 380) {

      ContainerNavBar.style.position = "fixed";
      ContainerNavBar.style.zIndex = "3";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "37%";
  
      navHome.style.position = "fixed";
      navHome.style.zIndex = "3";
      navHome.style.marginTop = "6px";
      navHome.style.top = "0%";
      navHome.style.transform = "scale(0.8)";
      navHome.style.transition = "ease-in-out 800ms";
  
      BackgroundNavBar.style.top = "0";
      BackgroundNavBar.style.position = "fixed";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.backgroundColor = "black";
      BackgroundNavBar.style.borderBottom = "1px solid #18d26e";
      BackgroundNavBar.style.height = "60px";
      BackgroundNavBar.style.zIndex = "2";

    }
    else{

      ContainerNavBar.style.position = "relative";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "0%";
  
      navHome.style.position = "relative";
      navHome.style.transition = "ease-in-out 800ms";
      navHome.style.marginTop = "37vh";
      navHome.style.top = "0%";
      navHome.style.transform = "scale(1)";
  
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.backgroundColor = "transparent";
      BackgroundNavBar.style.height = "0px";
      BackgroundNavBar.style.zIndex = "2";

    }

  }

  else if(mql10.matches){

    if (scrollPosition >= 380) {

      ContainerNavBar.style.position = "fixed";
      ContainerNavBar.style.zIndex = "3";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "33%";
  
      navHome.style.position = "fixed";
      navHome.style.zIndex = "3";
      navHome.style.marginTop = "6px";
      navHome.style.top = "0%";
      navHome.style.transform = "scale(0.8)";
      navHome.style.transition = "ease-in-out 800ms";
  
      BackgroundNavBar.style.top = "0";
      BackgroundNavBar.style.position = "fixed";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.backgroundColor = "black";
      BackgroundNavBar.style.borderBottom = "1px solid #18d26e";
      BackgroundNavBar.style.height = "60px";
      BackgroundNavBar.style.zIndex = "2";

    }
    else{

      ContainerNavBar.style.position = "relative";
      ContainerNavBar.style.transition = "ease-in-out 900ms";
      ContainerNavBar.style.right = "0%";
  
      navHome.style.position = "relative";
      navHome.style.transition = "ease-in-out 800ms";
      navHome.style.marginTop = "37vh";
      navHome.style.top = "0%";
      navHome.style.transform = "scale(1)";
  
      BackgroundNavBar.style.width = "100%";
      BackgroundNavBar.style.transition = "ease-in-out 700ms";
      BackgroundNavBar.style.backgroundColor = "transparent";
      BackgroundNavBar.style.height = "0px";
      BackgroundNavBar.style.zIndex = "2";

    }

  }

});

function centerNav() {
  //Media querys para ajuste de trasiciones y scale
  let mql1 = window.matchMedia("(min-width: 301px) and (max-width: 400px)");
  let mql2 = window.matchMedia("(min-width: 401px) and (max-width: 500px)");
  let mql3 = window.matchMedia("(min-width: 501px) and (max-width: 600px)");
  let mql4 = window.matchMedia("(min-width: 601px) and (max-width: 700px)");
  let mql5 = window.matchMedia("(min-width: 701px) and (max-width: 800px)");
  let mql6 = window.matchMedia("(min-width: 801px) and (max-width: 900px)");
  let mql7 = window.matchMedia("(min-width: 901px) and (max-width: 990px)");
  let mql8 = window.matchMedia("(min-width: 991px) and (max-width: 1400px)");

  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function fixedNav1() {
  //Media querys para ajuste de trasiciones y scale
  let mql1 = window.matchMedia("(min-width: 301px) and (max-width: 400px)");
  let mql2 = window.matchMedia("(min-width: 401px) and (max-width: 500px)");
  let mql3 = window.matchMedia("(min-width: 501px) and (max-width: 600px)");
  let mql4 = window.matchMedia("(min-width: 601px) and (max-width: 700px)");
  let mql5 = window.matchMedia("(min-width: 701px) and (max-width: 800px)");
  let mql6 = window.matchMedia("(min-width: 801px) and (max-width: 900px)");
  let mql7 = window.matchMedia("(min-width: 901px) and (max-width: 990px)");
  let mql8 = window.matchMedia("(min-width: 991px) and (max-width: 1400px)");

  if (mql1.matches) {
    window.scroll({
      top: 380,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql2.matches) {
    window.scroll({
      top: 314,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql3.matches) {
    window.scroll({
      top: 339,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql4.matches) {
    window.scroll({
      top: 350,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql5.matches) {
    window.scroll({
      top: 372,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql6.matches) {
    window.scroll({
      top: 345,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql7.matches) {
    window.scroll({
      top: 380,
      left: 0,
      behavior: "smooth",
    });
  }
  else {
    window.scroll({
      top: 447,
      left: 0,
      behavior: "smooth",
    });
  }
}

function fixedNav2() {
  //Media querys para ajuste de trasiciones y scale
  let mql1 = window.matchMedia("(min-width: 301px) and (max-width: 400px)");
  let mql2 = window.matchMedia("(min-width: 401px) and (max-width: 500px)");
  let mql3 = window.matchMedia("(min-width: 501px) and (max-width: 600px)");
  let mql4 = window.matchMedia("(min-width: 601px) and (max-width: 700px)");
  let mql5 = window.matchMedia("(min-width: 701px) and (max-width: 800px)");
  let mql6 = window.matchMedia("(min-width: 801px) and (max-width: 900px)");
  let mql7 = window.matchMedia("(min-width: 901px) and (max-width: 990px)");
  let mql8 = window.matchMedia("(min-width: 991px) and (max-width: 1400px)");

  if (mql1.matches) {
    window.scroll({
      top: 4185,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql2.matches) {
    window.scroll({
      top: 2178,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql3.matches) {
    window.scroll({
      top: 2003,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql4.matches) {
    window.scroll({
      top: 1974,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql5.matches) {
    window.scroll({
      top: 1998,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql6.matches) {
    window.scroll({
      top: 1930,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql7.matches) {
    window.scroll({
      top: 1946,
      left: 0,
      behavior: "smooth",
    });
  }
  else {
    window.scroll({
      top: 1870,
      left: 0,
      behavior: "smooth",
    });
  }
}
function fixedNav3() {
  //Media querys para ajuste de trasiciones y scale
  let mql1 = window.matchMedia("(min-width: 301px) and (max-width: 400px)");
  let mql2 = window.matchMedia("(min-width: 401px) and (max-width: 500px)");
  let mql3 = window.matchMedia("(min-width: 501px) and (max-width: 600px)");
  let mql4 = window.matchMedia("(min-width: 601px) and (max-width: 700px)");
  let mql5 = window.matchMedia("(min-width: 701px) and (max-width: 800px)");
  let mql6 = window.matchMedia("(min-width: 801px) and (max-width: 900px)");
  let mql7 = window.matchMedia("(min-width: 901px) and (max-width: 990px)");
  let mql8 = window.matchMedia("(min-width: 991px) and (max-width: 1400px)");

  if (mql1.matches) {
    window.scroll({
      top: 7057,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql2.matches) {
    window.scroll({
      top: 4515,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql3.matches) {
    window.scroll({
      top: 4170,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql4.matches) {
    window.scroll({
      top: 4045,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql5.matches) {
    window.scroll({
      top: 4070,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql6.matches) {
    window.scroll({
      top: 3155,
      left: 0,
      behavior: "smooth",
    });
  }

  else if (mql7.matches) {
    window.scroll({
      top: 3060,
      left: 0,
      behavior: "smooth",
    });
  }
  else {
    window.scroll({
      top: 3000,
      left: 0,
      behavior: "smooth",
    });
  }
}

//Scroll Projects
// Detectamos cuando el usuario desplace la pantalla
document.getElementById('Project-List').onscroll = function (){

  //Project 1
  let ProjectList = document.getElementById("Project-List");
  let ProjectListChildDescription = document.getElementById("Project-List-Child-Description");
  let Down = document.getElementById("Down");
  let ProjectListChildDescriptionTechnologiesSkills = document.getElementById("Project-List-Child-Description-Technologies-Skills");
  let ProjectListChildDescription3 = document.getElementById("Project-List-Child-Description3");
  
  //Project 2
  let ProjectListChildDescriptionCV = document.getElementById("Project-List-Child-Description-CV");
  let ProjectListChildDescriptionTechnologiesSkillsCV = document.getElementById("Project-List-Child-Description-Technologies-Skills-CV");
  let ProjectListChildDescription3CV = document.getElementById("Project-List-Child-Description3-CV");
  
  //Project 3
  let ProjectListChildDescriptionGeoAdmin = document.getElementById("Project-List-Child-Description-Geo-Admin");
  let ProjectListChildDescriptionTechnologiesSkillsGeoAdmin = document.getElementById("Project-List-Child-Description-Technologies-Skills-Geo-Admin");
  let ProjectListChildDescription3GeoAdmin = document.getElementById("Project-List-Child-Description3-Geo-Admin");

  //Project 4
  let ProjectListChildDescriptionGeoUser = document.getElementById("Project-List-Child-Description-Geo-User");
  let ProjectListChildDescriptionTechnologiesSkillsGeoUser = document.getElementById("Project-List-Child-Description-Technologies-Skills-Geo-User");
  let ProjectListChildDescription3GeoUser = document.getElementById("Project-List-Child-Description3-Geo-User");

  // Obtenemos la posicion del scroll en pantalla
  let scroll = ProjectList.scrollTop;

  // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
  //console.log("Scroll Projects; ", scroll);

  if(scroll > 70){

    //console.log("270");

    //Project 1
    ProjectListChildDescriptionTechnologiesSkills.style.bottom = "58px";

    ProjectListChildDescription3.style.borderBottomLeftRadius = "0px";
    ProjectListChildDescription3.style.borderBottomRightRadius = "0px";

    //Project 2
    ProjectListChildDescriptionTechnologiesSkillsCV.style.bottom = "58px";

    ProjectListChildDescription3CV.style.borderBottomLeftRadius = "0px";
    ProjectListChildDescription3CV.style.borderBottomRightRadius = "0px";

    //Project3
    ProjectListChildDescriptionTechnologiesSkillsGeoAdmin.style.bottom = "58px";

    ProjectListChildDescription3GeoAdmin.style.borderBottomLeftRadius = "0px";
    ProjectListChildDescription3GeoAdmin.style.borderBottomRightRadius = "0px";

    //Project4
    ProjectListChildDescriptionTechnologiesSkillsGeoUser.style.bottom = "58px";

    ProjectListChildDescription3GeoUser.style.borderBottomLeftRadius = "0px";
    ProjectListChildDescription3GeoUser.style.borderBottomRightRadius = "0px";

  }
  else{

    //Project 1
    ProjectListChildDescriptionTechnologiesSkills.style.bottom = "16px";

    ProjectListChildDescription3.style.borderBottomLeftRadius = "4px";
    ProjectListChildDescription3.style.borderBottomRightRadius = "4px";

    //Project 2
    ProjectListChildDescriptionTechnologiesSkillsCV.style.bottom = "16px";

    ProjectListChildDescription3CV.style.borderBottomLeftRadius = "4px";
    ProjectListChildDescription3CV.style.borderBottomRightRadius = "4px";

    //Project3
    ProjectListChildDescriptionTechnologiesSkillsGeoAdmin.style.bottom = "16px";

    ProjectListChildDescription3GeoAdmin.style.borderBottomLeftRadius = "4px";
    ProjectListChildDescription3GeoAdmin.style.borderBottomRightRadius = "4px";

    //Project4
    ProjectListChildDescriptionTechnologiesSkillsGeoUser.style.bottom = "16px";

    ProjectListChildDescription3GeoUser.style.borderBottomLeftRadius = "4px";
    ProjectListChildDescription3GeoUser.style.borderBottomRightRadius = "4px";

  }

  if(scroll > 200){

    //Project 1
    ProjectList.style.backgroundColor = "#19af5fe9";
    ProjectList.style.transition = "ease-in-out 500ms";

    ProjectListChildDescription.style.transition = "ease-in-out 500ms";
    ProjectListChildDescription.style.opacity = "1";

    ProjectListChildDescriptionTechnologiesSkills.style.bottom = "103px";

    //Project 2
    ProjectListChildDescriptionCV.style.transition = "ease-in-out 500ms";
    ProjectListChildDescriptionCV.style.opacity = "1";
    ProjectListChildDescriptionTechnologiesSkillsCV.style.bottom = "103px";

    //Project 3
    ProjectListChildDescriptionGeoAdmin.style.transition = "ease-in-out 500ms";
    ProjectListChildDescriptionGeoAdmin.style.opacity = "1";

    ProjectListChildDescriptionTechnologiesSkillsGeoAdmin.style.bottom = "103px";
    
    //Project 4
    ProjectListChildDescriptionGeoUser.style.transition = "ease-in-out 500ms";
    ProjectListChildDescriptionGeoUser.style.opacity = "1";

    ProjectListChildDescriptionTechnologiesSkillsGeoUser.style.bottom = "103px";

  }
  else{

    ProjectList.style.backgroundColor = "#18d26fe9";
    ProjectList.style.transition = "ease-in-out 500ms";

    //Project 1
    ProjectListChildDescription.style.transition = "ease-in-out 500ms";
    ProjectListChildDescription.style.opacity = "0";

    //Project 2
    ProjectListChildDescriptionCV.style.transition = "ease-in-out 500ms";
    ProjectListChildDescriptionCV.style.opacity = "0";

    //Project 3
    ProjectListChildDescriptionGeoAdmin.style.transition = "ease-in-out 500ms";
    ProjectListChildDescriptionGeoAdmin.style.opacity = "0";

    //Project 4
    ProjectListChildDescriptionGeoUser.style.transition = "ease-in-out 500ms";
    ProjectListChildDescriptionGeoUser.style.opacity = "0";

  }

  if(scroll > 300){

    Down.style.transform = "rotate(0deg)";

  }
  else{

    Down.style.transform = "rotate(180deg)";

  }


}

//function FocusDesign1() {

//  let ProjectListChildDesign1 = document.getElementById("Project-List-Child-Design1");
//  let ProjectListChildDesign2 = document.getElementById("Project-List-Child-Design2");

//  ProjectListChildDesign1.style.filter = "blur(0px)";
//  ProjectListChildDesign2.style.filter = "blur(0px)";

//}

//function noFocusDesign1() {
  
//  let ProjectListChildDesign1 = document.getElementById("Project-List-Child-Design1");
//  let ProjectListChildDesign2 = document.getElementById("Project-List-Child-Design2");

//  ProjectListChildDesign1.style.filter = "blur(1.5px)";
//  ProjectListChildDesign2.style.filter = "blur(1.5px)";

//}

//function FocusDesign2() {

//  let ProjectListChildDesign1 = document.getElementById("Project-List-Child-Design1");
//  let ProjectListChildDesign2 = document.getElementById("Project-List-Child-Design2");

//  ProjectListChildDesign1.style.filter = "blur(0px)";
//  ProjectListChildDesign2.style.filter = "blur(0px)";
//}

//function noFocusDesign2() {
  
//  let ProjectListChildDesign1 = document.getElementById("Project-List-Child-Design1");
//  let ProjectListChildDesign2 = document.getElementById("Project-List-Child-Design2");

//  ProjectListChildDesign1.style.filter = "blur(1.5px)";
//  ProjectListChildDesign2.style.filter = "blur(1.5px)";

//}

//Hover Services
function HoverService1() {
  let servicesDateChild1 = document.getElementById("servicesDate-child1");
  let servicesDateChild2 = document.getElementById("servicesDate-child2");
  let servicesDateChild3 = document.getElementById("servicesDate-child3");
  let servicesDateChild4 = document.getElementById("servicesDate-child4");
  let servicesDateChild5 = document.getElementById("servicesDate-child5");
  let servicesDateChild6 = document.getElementById("servicesDate-child6");

  let servicesDateChild1_1 = document.getElementById("servicesDate-child1_1");
  let service1 = document.getElementById("service1");
  let serviceDatechild2Span1 = document.getElementById(
    "serviceDate-child2Span1"
  );

  servicesDateChild1_1.style.backgroundColor = "#5c5c5c";
  servicesDateChild1_1.style.boxShadow = "-9px -8px 0px -1px #17ac5c";

  service1.style.color = "#18d26e !important";

  serviceDatechild2Span1.style.color = "white";
  
  servicesDateChild1.style.opacity = "0.9";
  servicesDateChild1.style.border = "3px solid white";
  servicesDateChild1.style.backgroundColor = "#18d26e";
  
  servicesDateChild2.style.opacity = "0.5";
  servicesDateChild2.style.backgroundColor = "rgba(3, 3, 3, 0.692)";
  
  servicesDateChild3.style.opacity = "0.5";
  servicesDateChild3.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

  servicesDateChild4.style.opacity = "0.5";
  servicesDateChild4.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

  servicesDateChild5.style.opacity = "0.5";
  servicesDateChild5.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

  servicesDateChild6.style.opacity = "0.5";
  servicesDateChild6.style.backgroundColor = "rgba(3, 3, 3, 0.692)";
}

function noHoverService1() {
  let servicesDateChild1 = document.getElementById("servicesDate-child1");
  let servicesDateChild2 = document.getElementById("servicesDate-child2");
  let servicesDateChild3 = document.getElementById("servicesDate-child3");
  let servicesDateChild4 = document.getElementById("servicesDate-child4");
  let servicesDateChild5 = document.getElementById("servicesDate-child5");
  let servicesDateChild6 = document.getElementById("servicesDate-child6");

  let servicesDateChild1_1 = document.getElementById("servicesDate-child1_1");
  let service1 = document.getElementById("service1");
  let serviceDatechild2Span1 = document.getElementById(
    "serviceDate-child2Span1"
  );

  servicesDateChild1_1.style.backgroundColor = "#18d26e";
  servicesDateChild1_1.style.boxShadow = "-9px -8px 0px -1px #5c5c5c";

  service1.style.color = "white !important";

  serviceDatechild2Span1.style.color = "#18d26e";
  
  servicesDateChild1.style.opacity = "1";
  servicesDateChild1.style.border = "1px solid transparent";
  servicesDateChild1.style.backgroundColor = "#9e9e9e2a";
  
  servicesDateChild2.style.opacity = "1";
  servicesDateChild2.style.backgroundColor = "#9e9e9e2a";
  
  servicesDateChild3.style.opacity = "1";
  servicesDateChild3.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild4.style.opacity = "1";
  servicesDateChild4.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild5.style.opacity = "1";
  servicesDateChild5.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild6.style.opacity = "1";
  servicesDateChild6.style.backgroundColor = "#9e9e9e2a";

}

function HoverService2() {
  
  let servicesDateChild1 = document.getElementById("servicesDate-child1");
  let servicesDateChild2 = document.getElementById("servicesDate-child2");
  let servicesDateChild3 = document.getElementById("servicesDate-child3");
  let servicesDateChild4 = document.getElementById("servicesDate-child4");
  let servicesDateChild5 = document.getElementById("servicesDate-child5");
  let servicesDateChild6 = document.getElementById("servicesDate-child6");

  let servicesDateChild2_1 = document.getElementById("servicesDate-child2_1");
  let service2 = document.getElementById("service2");
  let serviceDatechild2Span2 = document.getElementById(
    "serviceDate-child2Span2"
  );

  servicesDateChild2_1.style.backgroundColor = "#5c5c5c";
  servicesDateChild2_1.style.boxShadow = "-9px -8px 0px -1px #17ac5c";

  service2.style.color = "#18d26e !important";

  serviceDatechild2Span2.style.color = "white";
  
  servicesDateChild1.style.opacity = "0.5";
  servicesDateChild1.style.backgroundColor = "rgba(3, 3, 3, 0.692)";
  
  servicesDateChild2.style.opacity = "0.9";
  servicesDateChild2.style.border = "3px solid white";
  servicesDateChild2.style.backgroundColor = "#18d26e";
  
  servicesDateChild3.style.opacity = "0.5";
  servicesDateChild3.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

  servicesDateChild4.style.opacity = "0.5";
  servicesDateChild4.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

  servicesDateChild5.style.opacity = "0.5";
  servicesDateChild5.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

  servicesDateChild6.style.opacity = "0.5";
  servicesDateChild6.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

}

function noHoverService2() {
  
  let servicesDateChild1 = document.getElementById("servicesDate-child1");
  let servicesDateChild2 = document.getElementById("servicesDate-child2");
  let servicesDateChild3 = document.getElementById("servicesDate-child3");
  let servicesDateChild4 = document.getElementById("servicesDate-child4");
  let servicesDateChild5 = document.getElementById("servicesDate-child5");
  let servicesDateChild6 = document.getElementById("servicesDate-child6");

  let servicesDateChild2_1 = document.getElementById("servicesDate-child2_1");
  let service2 = document.getElementById("service2");
  let serviceDatechild2Span2 = document.getElementById(
    "serviceDate-child2Span2"
  );

  servicesDateChild2_1.style.backgroundColor = "#18d26e";
  servicesDateChild2_1.style.boxShadow = "-9px -8px 0px -1px #5c5c5c";

  service2.style.color = "white !important";

  serviceDatechild2Span2.style.color = "#18d26e";
  
  servicesDateChild1.style.opacity = "1";
  servicesDateChild1.style.backgroundColor = "#9e9e9e2a";
  
  servicesDateChild2.style.opacity = "1";
  servicesDateChild2.style.border = "1px solid transparent";
  servicesDateChild2.style.backgroundColor = "#9e9e9e2a";
  
  servicesDateChild3.style.opacity = "1";
  servicesDateChild3.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild4.style.opacity = "1";
  servicesDateChild4.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild5.style.opacity = "1";
  servicesDateChild5.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild6.style.opacity = "1";
  servicesDateChild6.style.backgroundColor = "#9e9e9e2a";

}

function HoverService3() {
  
  let servicesDateChild1 = document.getElementById("servicesDate-child1");
  let servicesDateChild2 = document.getElementById("servicesDate-child2");
  let servicesDateChild3 = document.getElementById("servicesDate-child3");
  let servicesDateChild4 = document.getElementById("servicesDate-child4");
  let servicesDateChild5 = document.getElementById("servicesDate-child5");
  let servicesDateChild6 = document.getElementById("servicesDate-child6");

  let servicesDateChild3_1 = document.getElementById("servicesDate-child3_1");
  let service3 = document.getElementById("service3");
  let serviceDatechild2Span3 = document.getElementById(
    "serviceDate-child2Span3"
  );

  servicesDateChild3_1.style.backgroundColor = "#5c5c5c";
  servicesDateChild3_1.style.boxShadow = "-9px -8px 0px -1px #17ac5c";

  service3.style.color = "#18d26e !important";

  serviceDatechild2Span3.style.color = "white";

  servicesDateChild1.style.opacity = "0.5";
  servicesDateChild1.style.backgroundColor = "rgba(3, 3, 3, 0.692)";
  
  servicesDateChild2.style.opacity = "0.5";
  servicesDateChild2.style.backgroundColor = "rgba(3, 3, 3, 0.692)";
  
  servicesDateChild3.style.opacity = "0.9";
  servicesDateChild3.style.border = "3px solid white";
  servicesDateChild3.style.backgroundColor = "#18d26e";

  servicesDateChild4.style.opacity = "0.5";
  servicesDateChild4.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

  servicesDateChild5.style.opacity = "0.5";
  servicesDateChild5.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

  servicesDateChild6.style.opacity = "0.5";
  servicesDateChild6.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

}

function noHoverService3() {
  
  let servicesDateChild1 = document.getElementById("servicesDate-child1");
  let servicesDateChild2 = document.getElementById("servicesDate-child2");
  let servicesDateChild3 = document.getElementById("servicesDate-child3");
  let servicesDateChild4 = document.getElementById("servicesDate-child4");
  let servicesDateChild5 = document.getElementById("servicesDate-child5");
  let servicesDateChild6 = document.getElementById("servicesDate-child6");

  let servicesDateChild3_1 = document.getElementById("servicesDate-child3_1");
  let service3 = document.getElementById("service3");
  let serviceDatechild2Span3 = document.getElementById(
    "serviceDate-child2Span3"
  );

  servicesDateChild3_1.style.backgroundColor = "#18d26e";
  servicesDateChild3_1.style.boxShadow = "-9px -8px 0px -1px #5c5c5c";

  service3.style.color = "white !important";

  serviceDatechild2Span3.style.color = "#18d26e";

  servicesDateChild1.style.opacity = "1";
  servicesDateChild1.style.backgroundColor = "#9e9e9e2a";
  
  servicesDateChild2.style.opacity = "1";
  servicesDateChild2.style.backgroundColor = "#9e9e9e2a";
  
  servicesDateChild3.style.opacity = "1";
  servicesDateChild3.style.border = "1px solid transparent";
  servicesDateChild3.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild4.style.opacity = "1";
  servicesDateChild4.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild5.style.opacity = "1";
  servicesDateChild5.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild6.style.opacity = "1";
  servicesDateChild6.style.backgroundColor = "#9e9e9e2a";

}

function HoverService4() {
  
  let servicesDateChild1 = document.getElementById("servicesDate-child1");
  let servicesDateChild2 = document.getElementById("servicesDate-child2");
  let servicesDateChild3 = document.getElementById("servicesDate-child3");
  let servicesDateChild4 = document.getElementById("servicesDate-child4");
  let servicesDateChild5 = document.getElementById("servicesDate-child5");
  let servicesDateChild6 = document.getElementById("servicesDate-child6");
  
  let servicesDateChild4_1 = document.getElementById("servicesDate-child4_1");
  let service4 = document.getElementById("service4");
  let serviceDatechild2Span4 = document.getElementById(
    "serviceDate-child2Span4"
  );

  servicesDateChild4_1.style.backgroundColor = "#5c5c5c";
  servicesDateChild4_1.style.boxShadow = "-9px -8px 0px -1px #17ac5c";

  service4.style.color = "#18d26e !important";

  serviceDatechild2Span4.style.color = "white";

  servicesDateChild1.style.opacity = "0.5";
  servicesDateChild1.style.backgroundColor = "rgba(3, 3, 3, 0.692)";
  
  servicesDateChild2.style.opacity = "0.5";
  servicesDateChild2.style.backgroundColor = "rgba(3, 3, 3, 0.692)";
  
  servicesDateChild3.style.opacity = "0.5";
  servicesDateChild3.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

  servicesDateChild4.style.opacity = "0.9";
  servicesDateChild4.style.border = "3px solid white";
  servicesDateChild4.style.backgroundColor = "#18d26e";

  servicesDateChild5.style.opacity = "0.5";
  servicesDateChild5.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

  servicesDateChild6.style.opacity = "0.5";
  servicesDateChild6.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

}

function noHoverService4() {
  
  let servicesDateChild1 = document.getElementById("servicesDate-child1");
  let servicesDateChild2 = document.getElementById("servicesDate-child2");
  let servicesDateChild3 = document.getElementById("servicesDate-child3");
  let servicesDateChild4 = document.getElementById("servicesDate-child4");
  let servicesDateChild5 = document.getElementById("servicesDate-child5");
  let servicesDateChild6 = document.getElementById("servicesDate-child6");

  let servicesDateChild4_1 = document.getElementById("servicesDate-child4_1");
  let service4 = document.getElementById("service4");
  let serviceDatechild2Span4 = document.getElementById(
    "serviceDate-child2Span4"
  );

  servicesDateChild4_1.style.backgroundColor = "#18d26e";
  servicesDateChild4_1.style.boxShadow = "-9px -8px 0px -1px #5c5c5c";

  service4.style.color = "white !important";

  serviceDatechild2Span4.style.color = "#18d26e";

  servicesDateChild1.style.opacity = "1";
  servicesDateChild1.style.backgroundColor = "#9e9e9e2a";
  
  servicesDateChild2.style.opacity = "1";
  servicesDateChild2.style.backgroundColor = "#9e9e9e2a";
  
  servicesDateChild3.style.opacity = "1";
  servicesDateChild3.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild4.style.opacity = "1";
  servicesDateChild4.style.border = "1px solid transparent";
  servicesDateChild4.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild5.style.opacity = "1";
  servicesDateChild5.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild6.style.opacity = "1";
  servicesDateChild6.style.backgroundColor = "#9e9e9e2a";

}

function HoverService5() {
  
  let servicesDateChild1 = document.getElementById("servicesDate-child1");
  let servicesDateChild2 = document.getElementById("servicesDate-child2");
  let servicesDateChild3 = document.getElementById("servicesDate-child3");
  let servicesDateChild4 = document.getElementById("servicesDate-child4");
  let servicesDateChild5 = document.getElementById("servicesDate-child5");
  let servicesDateChild6 = document.getElementById("servicesDate-child6");

  let servicesDateChild5_1 = document.getElementById("servicesDate-child5_1");
  let service5 = document.getElementById("service5");
  let serviceDatechild2Span5 = document.getElementById(
    "serviceDate-child2Span5"
  );

  servicesDateChild5_1.style.backgroundColor = "#5c5c5c";
  servicesDateChild5_1.style.boxShadow = "-9px -8px 0px -1px #17ac5c";

  service5.style.color = "#18d26e !important";

  serviceDatechild2Span5.style.color = "white";

  servicesDateChild1.style.opacity = "0.5";
  servicesDateChild1.style.backgroundColor = "rgba(3, 3, 3, 0.692)";
  
  servicesDateChild2.style.opacity = "0.5";
  servicesDateChild2.style.backgroundColor = "rgba(3, 3, 3, 0.692)";
  
  servicesDateChild3.style.opacity = "0.5";
  servicesDateChild3.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

  servicesDateChild4.style.opacity = "0.5";
  servicesDateChild4.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

  servicesDateChild5.style.opacity = "0.9";
  servicesDateChild5.style.border = "3px solid white";
  servicesDateChild5.style.backgroundColor = "#18d26e";

  servicesDateChild6.style.opacity = "0.5";
  servicesDateChild6.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

}

function noHoverService5() {
  
  let servicesDateChild1 = document.getElementById("servicesDate-child1");
  let servicesDateChild2 = document.getElementById("servicesDate-child2");
  let servicesDateChild3 = document.getElementById("servicesDate-child3");
  let servicesDateChild4 = document.getElementById("servicesDate-child4");
  let servicesDateChild5 = document.getElementById("servicesDate-child5");
  let servicesDateChild6 = document.getElementById("servicesDate-child6");

  let servicesDateChild5_1 = document.getElementById("servicesDate-child5_1");
  let service5 = document.getElementById("service5");
  let serviceDatechild2Span5 = document.getElementById(
    "serviceDate-child2Span5"
  );

  servicesDateChild5_1.style.backgroundColor = "#18d26e";
  servicesDateChild5_1.style.boxShadow = "-9px -8px 0px -1px #5c5c5c";

  service5.style.color = "white !important";

  serviceDatechild2Span5.style.color = "#18d26e";

  servicesDateChild1.style.opacity = "1";
  servicesDateChild1.style.backgroundColor = "#9e9e9e2a";
  
  servicesDateChild2.style.opacity = "1";
  servicesDateChild2.style.backgroundColor = "#9e9e9e2a";
  
  servicesDateChild3.style.opacity = "1";
  servicesDateChild3.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild4.style.opacity = "1";
  servicesDateChild4.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild5.style.opacity = "1";
  servicesDateChild5.style.border = "1px solid transparent";
  servicesDateChild5.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild6.style.opacity = "1";
  servicesDateChild6.style.backgroundColor = "#9e9e9e2a";

}

function HoverService6() {

  let servicesDateChild1 = document.getElementById("servicesDate-child1");
  let servicesDateChild2 = document.getElementById("servicesDate-child2");
  let servicesDateChild3 = document.getElementById("servicesDate-child3");
  let servicesDateChild4 = document.getElementById("servicesDate-child4");
  let servicesDateChild5 = document.getElementById("servicesDate-child5");
  let servicesDateChild6 = document.getElementById("servicesDate-child6");

  let servicesDateChild6_1 = document.getElementById("servicesDate-child6_1");
  let service6 = document.getElementById("service6");
  let serviceDatechild2Span6 = document.getElementById(
    "serviceDate-child2Span6"
  );

  servicesDateChild6_1.style.backgroundColor = "#5c5c5c";
  servicesDateChild6_1.style.boxShadow = "-9px -8px 0px -1px #17ac5c";

  service6.style.color = "#18d26e !important";

  serviceDatechild2Span6.style.color = "white";

  servicesDateChild1.style.opacity = "0.5";
  servicesDateChild1.style.backgroundColor = "rgba(3, 3, 3, 0.692)";
  
  servicesDateChild2.style.opacity = "0.5";
  servicesDateChild2.style.backgroundColor = "rgba(3, 3, 3, 0.692)";
  
  servicesDateChild3.style.opacity = "0.5";
  servicesDateChild3.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

  servicesDateChild4.style.opacity = "0.5";
  servicesDateChild4.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

  servicesDateChild5.style.opacity = "0.5";
  servicesDateChild5.style.backgroundColor = "rgba(3, 3, 3, 0.692)";

  servicesDateChild6.style.opacity = "0.9";
  servicesDateChild6.style.border = "3px solid white";
  servicesDateChild6.style.backgroundColor = "#18d26e";

}

function noHoverService6() {
  
  let servicesDateChild1 = document.getElementById("servicesDate-child1");
  let servicesDateChild2 = document.getElementById("servicesDate-child2");
  let servicesDateChild3 = document.getElementById("servicesDate-child3");
  let servicesDateChild4 = document.getElementById("servicesDate-child4");
  let servicesDateChild5 = document.getElementById("servicesDate-child5");
  let servicesDateChild6 = document.getElementById("servicesDate-child6");

  let servicesDateChild6_1 = document.getElementById("servicesDate-child6_1");
  let service6 = document.getElementById("service6");
  let serviceDatechild2Span6 = document.getElementById(
    "serviceDate-child2Span6"
  );

  servicesDateChild6_1.style.backgroundColor = "#18d26e";
  servicesDateChild6_1.style.boxShadow = "-9px -8px 0px -1px #5c5c5c";

  service6.style.color = "white !important";

  serviceDatechild2Span6.style.color = "#18d26e";

  servicesDateChild1.style.opacity = "1";
  servicesDateChild1.style.backgroundColor = "#9e9e9e2a";
  
  servicesDateChild2.style.opacity = "1";
  servicesDateChild2.style.backgroundColor = "#9e9e9e2a";
  
  servicesDateChild3.style.opacity = "1";
  servicesDateChild3.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild4.style.opacity = "1";
  servicesDateChild4.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild5.style.opacity = "1";
  servicesDateChild5.style.backgroundColor = "#9e9e9e2a";

  servicesDateChild6.style.opacity = "1";
  servicesDateChild6.style.border = "1px solid transparent";
  servicesDateChild6.style.backgroundColor = "#9e9e9e2a";

}

function HoverContact1() {
  let contactCircle1 = document.getElementById("contactCircle1");
  let contactDatechild1 = document.getElementById("contactDate-child1");

  contactCircle1.style.border = "1px solid #18d26e";

  contactDatechild1.style.border = "2px solid #18d26e";
}

function noHoverContact1() {
  let contactCircle1 = document.getElementById("contactCircle1");
  let contactDatechild1 = document.getElementById("contactDate-child1");

  contactCircle1.style.border = "1px solid transparent";
  contactDatechild1.style.border = "2px solid transparent";
}

function HoverContact2() {
  let contactCircle2 = document.getElementById("contactCircle2");
  let contactDatechild2 = document.getElementById("contactDate-child2");

  contactCircle2.style.border = "1px solid #18d26e";

  contactDatechild2.style.border = "2px solid #18d26e";
}

function noHoverContact2() {
  let contactCircle2 = document.getElementById("contactCircle2");
  let contactDatechild2 = document.getElementById("contactDate-child2");
  
  contactCircle2.style.border = "1px solid transparent";

  contactDatechild2.style.border = "2px solid transparent";
}

function HoverContact3() {
  let contactCircle3 = document.getElementById("contactCircle3");
  let contactDatechild3 = document.getElementById("contactDate-child3");

  contactCircle3.style.border = "1px solid #18d26e";

  contactDatechild3.style.border = "2px solid #18d26e";
}

function noHoverContact3() {
  let contactCircle3 = document.getElementById("contactCircle3");
  let contactDatechild3 = document.getElementById("contactDate-child3");

  contactCircle3.style.border = "1px solid transparent";

  contactDatechild3.style.border = "2px solid transparent";
}

function HoverContact4() {
  let contactCircle4 = document.getElementById("contactCircle4");
  let contactDatechild4 = document.getElementById("contactDate-child4");

  contactCircle4.style.border = "1px solid #18d26e";
  
  contactDatechild4.style.border = "2px solid #18d26e";
}

function noHoverContact4() {
  let contactCircle4 = document.getElementById("contactCircle4");
  let contactDatechild4 = document.getElementById("contactDate-child4");

  contactCircle4.style.border = "1px solid transparent";

  contactDatechild4.style.border = "2px solid transparent";
}


const s = window.screen;
const w = (q.width = s.width);
const h = (q.height = s.height);
const ctx = q.getContext("2d");

const p = Array(Math.floor(w / 10) + 1).fill(0);

const random = (items) => items[Math.floor(Math.random() * items.length)];

const hex = "EFB1996".split("");

setInterval(() => {
  ctx.fillStyle = "rgba(0,0,0,.05)";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#18d26e";//letters color
  p.map((v, i) => {
    ctx.fillText(random(hex), i * 10, v);
    p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
  });
}, 1000 / 30);
