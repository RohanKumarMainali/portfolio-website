
import React from "react"
import {useState} from 'react';
import Style from "./Navbar.module.css"

function Navbar(){

    const [active,setActive]=useState();

const handleAbout=()=>{
console.log("hello");


}

 if (active === 'about') {
            Style.about = { color: '#ff3333' };
        }

return(
<>
    <div className={Style.container}>
    <div className={Style.logo}>
    <ul>
    <a href="/#">Portfolio</a>
    </ul>
    </div>
    <div className={Style.right}>
    <ul>
    <a href="/#">Home</a>
    <a href="/#"  className={Style.about} >About</a>
    <a href="/#">Projects</a>
    <a href="/#">Contact</a>
    </ul>
    </div>
    </div>

</>
)

}
export default  Navbar;