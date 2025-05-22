import '../styles/Presentation.css'
import ProfilePhoto from '../assets/Persona PlaceHolder.png'

export default function Presentation(){
    return(
        <div className = 'Presentation'>
            <div className = 'Presentation-Text'>
                <h1 style={{whiteSpace: 'pre'}}>
                    LUCAS <br/>
                    MAZZOLIM
                </h1>
                <p>Fair price, unfair advantage</p>
                <div className = 'Presentation-Text-buttons'>
                    <button>Contact Me</button>
                    <button>Projects</button>
                </div>
            </div>
                <img src = {ProfilePhoto}/>
        </div>
    )
}