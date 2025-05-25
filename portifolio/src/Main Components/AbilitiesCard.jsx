import '../styles/AbilitiesCard.css'

export default function AbilitiesCard(props){
    return(
        <div className = "AbilitiesCard">
            <div className = "AbilitiesCard-hability">
                <img src = {props.img} alt = {'Hability Card: ' + props.habilityName}/>
                <p>{props.habilityName}</p>
            </div>
            <div className = "AbilitiesCard-Description">
                <p>{props.habilityDescription}</p>
            </div>
        </div>
    )
}