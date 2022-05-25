import React, {useEffect} from 'react'
import ProjectsStyle from "./Projects.module.css"
import travelImg from "../Image/animationBug.png";
import design from "../Image/paisa khai.png";
import Aos from "aos";
import 'aos/dist/aos.css';

function Projects(){

 useEffect(()=>{
      Aos.init({duration:2000});
    },[]);

return(
<>
    <h1 className={ProjectsStyle.heading}>Projects</h1>

    <div className={ProjectsStyle.container} id="projects">

      <h2 className={ProjectsStyle.projectTitle}>Travel Nepal Website</h2>


        <div className={ProjectsStyle.description}>

        <div className={ProjectsStyle.right} data-aos="fade-up">
        <img className={ProjectsStyle.travelWebsiteImage} src={travelImg}></img>
        </div>
           <div className={ProjectsStyle.left} data-aos="fade-down">

        <p>Travel Nepal website was built using django for backend and react.js for frontend. This website features two different panel, one for user and one for admin. The admin panel is
            responsible for handling all the CRUD functionality of tour packages and booking request whereas the user panel displays all the available tour packages and it's
             details like available seats, price, description of each days and discount offers. I used django rest framework for creating all APIs and postman to test them
             before using those APIs. Indeed I faced a lot of challenges and bugs on this project but I completed this project in time. You can checkout repository of this project <a className={ProjectsStyle.figma} href="https://github.com/RohanMainaliOfficial/TourManagementSystem/tree/Rohan">here.</a> </p>
        </div>

        </div>
         <h2 className={ProjectsStyle.projectTitle}>Paisa Khai? (Expense Tracking App Design)</h2>


        <div className={ProjectsStyle.description}>
         <div className={ProjectsStyle.left} data-aos="fade-right">

        <p>Paisa Khai? is a simple expense tracking application that helps people to track all of their expenses. I built this prototype of Paisa Khai? application
         in figma with a user-centric design process. Before even jumping into the high fidelity prototype, I created user persona to
         understand my target audience. In addition to user persona, I also created wireframes, user flow and task flow to built an efficient design.
          In this prototype, I mainly focused on usability and its principle for a pleasant user experience. You can checkout the prototype <a className={ProjectsStyle.figma} href="https://www.figma.com/proto/HhNUdU53O5FejMoGpucuSs/Design-and-prototype?node-id=2%3A320&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A320">here.</a></p>
        </div>

        <div className={ProjectsStyle.right} data-aos="fade-up">
    <img className={ProjectsStyle.expenseImage} src={design}></img>
        </div>


        </div>


    </div>
</>
)
}

export default Projects;
