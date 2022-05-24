import React from 'react'
import {useState} from 'react'
import ContactStyle from "./Contact.module.css"
import emailjs from 'emailjs-com'

function Contact(){

    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [subject,setSubject]=useState();
    const [body,setBody]=useState();



    const sendEmail=(e)=>{
      const form={
        name: name,
        subject:subject,
        body: body,
        email: email,
        reply_to: email,
    }
    console.log(form)
    emailjs.send("service_ixwm5ta","template_khbkm7i",form,'XDvDFJzlFmbZOHtI1');

 }

return(
<>
<div className={ContactStyle.main}>
        <h1 className={ContactStyle.heading}>Contact</h1>
        <h2 className={ContactStyle.smallHeader}>Let's get in touch</h2>
        <div className={ContactStyle.container}>
         <form className={ContactStyle.form}>
         <div>
             <input type="text" className={ContactStyle.inputName} className={ContactStyle.input} name="name" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>

         </div>
         <div>
             <input type="text"  className={ContactStyle.inputEmail} className={ContactStyle.input} name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>

     </div>
     <div>
             <input type="text" className={ContactStyle.inputSubject} className={ContactStyle.input} name="subject" placeholder="Subject" onChange={(e)=>setSubject(e.target.value)}/>

     </div>
     <div>
             <textarea type="text"  className={ContactStyle.inputBody}  name="body" placeholder="Type your concern, I am listening! " onChange={(e)=>setBody(e.target.value)}></textarea>

     </div>
    </form>
    <button className={ContactStyle.submitBtn} onClick={sendEmail}>Submit</button>
    </div>

    </div>


</>
)
}

export default Contact;
