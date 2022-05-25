import React from 'react'
import {useState} from 'react'
import ContactStyle from "./Contact.module.css"
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    emailjs.send("service_ixwm5ta","template_khbkm7i",form,'XDvDFJzlFmbZOHtI1').
    then(res=>console.log(res)).
    catch(err=>console.log(err));


    setTimeout(() => {
        toast.success('🦄 Message sent successfully!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

      }, 200);

      setTimeout(()=>{
      window.location.reload(false);
      },1200)


 }

return(
<>
<div className={ContactStyle.main} id="contact">
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
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />


</>
)
}

export default Contact;
