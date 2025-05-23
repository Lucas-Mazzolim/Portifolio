import '../styles/Header.css'
import Logo from '../assets/Logo.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import HamburguerMenu from '../assets/HamburguerMenu.png'

export default function Header(){

    function handleFurtherImprovement(){
        alert('In further Versions')
    }

    return(
        <>
            <nav>
                <div className = "Nav-Logo">
                    <a href = '#'><img src = {Logo}/></a>
                </div>
                <div className = "Nav-Links">
                    <a href = '#About'><p>ABOUT</p></a>
                    <a onClick = {handleFurtherImprovement}><p>PROJECTS</p></a>
                    <a onClick = {handleFurtherImprovement}><p>REVIEWS</p></a>
                    <a href = 'https://medium.com/@lucaswgmazzolim'><p>BLOG</p></a>
                    <a href = '#Contact'><p>CONTACT</p></a>
                </div>
                <div className = "Nav-SocialMedia">
                    <a href = 'https://www.linkedin.com/in/lucasmazzolim'><img src = {linkedin}/></a>
                    <a href = 'https://github.com/Lucas-Mazzolim'><img src = {github}/></a>
                </div>
                <div className = 'Nav-PhoneButton'>
                    <a>
                        <img src = {HamburguerMenu}/>
                    </a>
                </div>
            </nav>
        </>
    )
}