import { useState } from 'react';
import './contact.scss'

export default function Contact() {
const [message,setMessage]=useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id='contact'>
       <div className="left">
         <img src="https://cdn2.iconfinder.com/data/icons/postal-service-line-color-to-your-front-door/512/Sender-512.png" alt="" />
       </div>
       <div className="rigth">
         <h2>Contact</h2>

         <form action="https://api.staticforms.xyz/submit" method="POST" >
          <input type="hidden" name="accessKey" value="d9041630-35de-4f1d-9f8b-0331a2d8b672"/>
          <input type="hidden" name="redirectTo" value="http://localhost:3000/#contact" />
           <input type="text" name="name" placeholder="name"/>

           <input type="text" name="email" placeholder="Email"/>

           <textarea name="message" placeholder='Message'></textarea>

           <button type='submit'>Send</button>
           {message && <span>Thanks, I'll reply ASAP! </span>}
         </form>
       </div>
    </div>
  )
}
