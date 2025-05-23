import '../styles/Contact.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact(){
    
        const [email, setEmail] = useState('')
        const [name, setName] = useState('')
        const [message, setMessage] = useState('')
    
        function handleSetEmail(e){
            setEmail(e.target.value)
        }

         function handleSetName(e){
            setName(e.target.value)
        }

         function handleSetMessage(e){
            setMessage(e.target.value)
        }

        function handleSendEmail(){

            emailjs.sendForm('service_id', 'template_id', e.target, 'keyf')

        }

    return(
        <section className = 'Contact' id = 'Contact'>
            <h1 className = 'Contact-Title'>Contact Me</h1>
            <div className = 'Contact-Forms'>
                <form onSubmit = {(e) => {e.preventDefault(); alert(1)}}>
                    <p>Name</p>
                    <input className = 'Contact-Forms-Name' type = 'text' placeholder = 'Enter Your Name'/>
        
                    <p>E-mail</p>
                    <input  className = 'Contact-Forms-Email' type = 'text' placeholder = 'Enter Your E-mail' onChange = {(e) => handleSetEmail(e)}/>

                    <p>Message</p>
                    <textarea className = 'Contact-Forms-Message' placeholder = 'Enter Your Message'/>

                    <button type = 'submit'>Send</button>
                </form>
            </div>
        </section>
    )
}