import '../styles/Header.css'
import Logo from '../assets/Logo.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import HamburguerMenu from '../assets/HamburguerMenu.png'

export default function Header(){
    return(
        <>
            <nav>
                <div className = "Nav-Logo">
                    <a href = '#'><img src = {Logo}/></a>
                </div>
                <div className = "Nav-Links">
                    <a><p>ABOUT</p></a>
                    <a><p>PROJECTS</p></a>
                    <a><p>REVIEWS</p></a>
                    <a><p>BLOG</p></a>
                    <a><p>CONTACT</p></a>
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