import '../styles/Contact.css'


export default function Contact(){
    return(
        <section className = 'Contact'>
            <h1 className = 'Contact-Title'>Contact Me</h1>
            <div className = 'Contact-Forms'>
                    <p>Name</p>
                    <input className = 'Contact-Forms-Name' type = 'text' placeholder = 'Enter Your Name'/>
        
                    <p>E-mail</p>
                    <input  className = 'Contact-Forms-Email' type = 'text' placeholder = 'Enter Your E-mail'/>

                    <p>Message</p>
                    <textarea className = 'Contact-Forms-Message' placeholder = 'Enter Your Message'/>

                    <button>Send</button>
            </div>
        </section>
    )
}