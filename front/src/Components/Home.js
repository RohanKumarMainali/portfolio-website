import React from "react"
import "./Style.css"
import profile from '../Image/profile.png'
import Navbar from './Navbar.js'
import About from './About.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import pdf from '../Image/Profile.pdf'
import {saveAs} from 'file-saver'
import Footer from './Footer.js'

function Home(){
var count=20;
 const animals = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1,2,3,4,5,5,5,5,5,5,5];



return(
<>

      <div className="container">
      <div className="home" >
      <Navbar/>
      <div className="home-page-upper">
      <div className="details">
      <h1 className="first-line">Hi I am</h1>
      <h1 className="my-name">Rohan Kumar Mainali</h1>
      <a href={pdf} className="download-btn" download="Resume.pdf"><label className="download-text">Download CV</label></a>

      </div>
        <div className="home-profile">
        <img src={profile} className="profile"></img>
        </div>
        </div>
      <div className="stick-pattern">
       <div className="dotted-pattern">
     {animals.map(animal => (

      <div className="dotted-row">
      </div>

      ))}
      </div>
      <h1 ></h1>

      </div>




      <div className="custom-shape-divider-bottom-1653105854">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
      </div>
      </div>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
</>
)

}
export default  Home;