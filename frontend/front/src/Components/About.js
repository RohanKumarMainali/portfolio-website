import React from 'react'
import AboutStyle from "./About.module.css"
import aboutImg from "../Image/About.png";

function About(){


return(
<>
    <h1 className={AboutStyle.heading}>About</h1>
    <div className={AboutStyle.container}>
    <div className={AboutStyle.details}>
    <div className={AboutStyle.paragraph}>
    <p>I build professional full stack websites using django,
     django REST Framework  and react.js. I have been coding since
      couple of years and have a good experience in web development.
       Currently I am studying BSc hons in computer science in herald college kathmandu. </p>
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
