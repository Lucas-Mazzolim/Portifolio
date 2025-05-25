import '../styles/Presentation.css'
import ProfilePhoto from '../assets/Persona PlaceHolder.png'

export default function Presentation(){

    function handleContactNavigation(){
        window.location.href = '#Contact'
    }

    function handleProjectsNavigation(){
        alert('In further versions')
    }

    return(
        <section className = 'Presentation'>
            <div className = 'Presentation-Text'>
                <h1 style={{whiteSpace: 'pre'}}>
                    LUCAS <br/>
                    MAZZOLIM
                </h1>
                <p>Fair price, unfair advantage</p>
                <div className = 'Presentation-Text-buttons'>
                    <button type = 'button' aria-label = 'Contact Lucas Mazzolim' onClick = {handleContactNavigation}>Contact Me</button>
                    <button type = 'button' aria-label = 'See Lucas Mazzolim Projects' onClick = {handleProjectsNavigation}>Projects</button>
                </div>
            </div>
                <img src = {ProfilePhoto} alt = 'Personal Picture'/>
        </section>
    )
}