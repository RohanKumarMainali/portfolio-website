
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
    <ul className={Style.items}>
    <li className={Style.item}><a href="/#">Home</a></li>
    <li className={Style.item}><a href="/#"  className={Style.about} >About</a></li>
    <li className={Style.item}><a href="/#">Projects</a></li>
    <li className={Style.item}><a href="/#">Contact</a></li>

    </ul>

    </div>

    <div className={Style.hamburger}>
    <div className={Style.hamItem}></div>
    <div className={Style.hamItem}></div>
    <div className={Style.hamItem}></div>
    </div>
    </div>

</>
)

}
export default  Navbar;