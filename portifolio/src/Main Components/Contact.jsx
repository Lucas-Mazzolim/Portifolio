import '../styles/Contact.css'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import data from '../../data/data.json'

export default function Contact(){
    
        const form = useRef()

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

        function handleSendEmail(e){
            alert('Hello '.concat(name, ', your e-mail has been sent.'))
            e.preventDefault()
            emailjs.send(data.SERVICE_ID, data.TEMPLATE_ID ,{
                name: name,
                message: message,
                user_email: email,
                user_name: name,
                }, data.PUBLIC_KEY);
        }

    return(
        <section className = 'Contact' id = 'Contact'>
            <h1 className = 'Contact-Title'>Contact Me</h1>
            <div className = 'Contact-Forms'>
                <form onSubmit = {(e) => handleSendEmail(e)} ref = {form}>
                    <p>Name</p>
                    <input className = 'Contact-Forms-Name' type = 'text' placeholder = 'Enter Your Name' required aria-label = 'Enter Your Name' onChange = {(e) => handleSetName(e)} name = 'user_name' value = {name}/>
        
                    <p>E-mail</p>
                    <input  className = 'Contact-Forms-Email' type = 'email' placeholder = 'Enter Your E-mail' onChange = {(e) => handleSetEmail(e)} required aria-label = 'Enter Your E-mail' name = 'name' value = {email}/>

                    <p>Message</p>
                    <textarea className = 'Contact-Forms-Message' placeholder = 'Enter Your Message' required aria-label = 'Enter The Message You Want to Send' onChange = {(e) => handleSetMessage(e)} name = 'message' value = {message}/>

                    <button type = 'submit' value = 'Send' aria-label = 'Send Your Message to Lucas Mazzolim'>Send</button>
                </form>
            </div>
        </section>
    )
}