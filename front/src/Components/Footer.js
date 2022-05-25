import React from 'react'
import './Footer.css'

function Footer(){



return(
<>
    <div className="footer">
       <div className="footer-container">
     <div className="left">
     <h3 className="footer-heading">Contact</h3>
     <ul>
     <li className="footer-info">Email: rohanmainali39@gmail.com</li>
     <li className="footer-info">+977 9817868363</li>
     </ul>
     </div>
     <div className="middle">
     <h3 className="footer-heading">Github</h3>
    <ul>
    <li className="footer-info"><a href="https://github.com/RohanKumarMainali">Github profile</a>
    </li>
    </ul>
     </div>
     <div className="right-footer">
     <h3 className="footer-heading">Social</h3>
     <ul >
        <li className="footer-info"><a href="https://www.linkedin.com/in/rohan-kumar-mainali-a32082212">Linkedin</a></li>
        <li className="footer-info"> <a href="https://www.facebook.com/rohan.mainali.167/">Instagram</a></li>
        <li className="footer-info"> <a href="https://www.facebook.com/rohan.mainali.167/">Facebook</a></li>
     </ul>
    </div>

    </div>
    </div>



</>
)
}

export default Footer;
