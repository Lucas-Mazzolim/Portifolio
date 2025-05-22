import AbilitiesCard from "./AbilitiesCard";
import '../styles/Abilities.css'
import Habilities from '../assets/Habilities.json'
import python from '../../public/Python.png'

export default function Abilities(){
    return(
        <section className = "Abilities">
            <div className = "Abilities-Container">
                <h2>Tools I Know</h2>
                <div className = "Abilities-Container-Abilities">
                    <AbilitiesCard habilityDescription = {Habilities.h1.Description} habilityName = {Habilities.h1.Name} img = {Habilities.h1.ImagePath}/>
                    <AbilitiesCard habilityDescription = {Habilities.h1.Description} habilityName = {Habilities.h1.Name} img = {Habilities.h1.ImagePath}/>
                    <AbilitiesCard habilityDescription = {Habilities.h1.Description} habilityName = {Habilities.h1.Name} img = {Habilities.h1.ImagePath}/>
                    <AbilitiesCard habilityDescription = {Habilities.h1.Description} habilityName = {Habilities.h1.Name} img = {Habilities.h1.ImagePath}/>
                    <AbilitiesCard habilityDescription = {Habilities.h1.Description} habilityName = {Habilities.h1.Name} img = {Habilities.h1.ImagePath}/>
                </div>     
            </div>
        </section>
    )
}