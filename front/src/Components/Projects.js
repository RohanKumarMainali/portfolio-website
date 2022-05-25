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

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>

        </div>
         <h2 className={ProjectsStyle.projectTitle}>Paisa Khai? (Expense Tracking App Design)</h2>


        <div className={ProjectsStyle.description}>
         <div className={ProjectsStyle.left} data-aos="fade-right">

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
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
