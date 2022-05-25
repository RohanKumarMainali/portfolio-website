
import React from "react"
import {useState,useEffect} from 'react';
import  "./Navbar.css"
import Aos from "aos";
import 'aos/dist/aos.css';
import {Link} from "react-scroll";

function Navbar(){

    const [active,setActive]=useState("items");
    const [toggleIcon, setToggleIcon]=useState("hamburger");

     useEffect(()=>{
      Aos.init({duration:2000});
    },[]);



    const navToggle=()=>{
     active === 'items'? setActive("items activeMenu"):
     setActive("items");
     console.log("clicked")

     toggleIcon==='hamburger'? setToggleIcon("hamburger toggleIcon"):
     setToggleIcon("hamburger");

    }




return(
<>
    <div className="container">
    <div className="logo">
    <ul>
    <a href="/">Portfolio</a>
    </ul>
    </div>

    <div className="right">
    <ul className={active}>
    <li className="item"><Link to="home" onClick={navToggle}>Home</Link></li>
    <li className="item"><Link to="about" smooth={true} duration={1000} onClick={navToggle}>About</Link></li>
    <li className="item"><Link to="projects" smooth={true} duration={1000} onClick={navToggle}>Projects</Link></li>
    <li className="item"><Link to="contact" smooth={true} duration={1000} onClick={navToggle}>Contact</Link></li>

    </ul>

    </div>

    <div className={toggleIcon} onClick={navToggle}>
    <div className="hamItem line1"></div>
    <div className="hamItem line2"></div>
    <div className="hamItem line3"></div>
    </div>
    </div>

</>
)

}
export default  Navbar;