import React from 'react'
import AboutStyle from "./About.module.css"
import aboutImg from "../Image/About.png";

function About(){


return(
<>
    <h1 className={AboutStyle.heading}  id="about">About</h1>
    <div className={AboutStyle.container}>
    <div className={AboutStyle.details}>
    <div className={AboutStyle.paragraph}>
    <p>I build professional full stack websites using django,
     django REST Framework  and react.js. I have been coding since
      couple of years and have a good experience in web development.
       Currently I am studying BSc hons in computer science in herald college kathmandu. </p>

       <p> <span className={AboutStyle.highlight}> Python, Java</span> and <span className={AboutStyle.highlight}>JavaScript </span> are my most used programming language because
 most of the software can be easily built using only these three languages and their frameworks. Beside programming, I also have some soft skills like
<span className={AboutStyle.highlight}> great communication, leadership and Work ethic.</span></p>

    </div>



     <div className={AboutStyle.aboutImg} style={{
       backgroundImage: `url(${aboutImg})`
    }}>

    </div>

    </div>

    </div>
</>
)
}

export default About;
