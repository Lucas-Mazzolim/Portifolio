import '../styles/Header.css'
import { useState } from 'react' 
import Logo from '../assets/Logo.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import HamburguerMenu from '../assets/HamburguerMenu.png'
import Sidebar from '../Main Components/Sidebar'

export default function Header(){

    const [sidebarState, setSidebarState] = useState('none')

    function handleSetSidebarState(){
        if (sidebarState === 'block'){setSidebarState('none')}
        else{setSidebarState('block')}

        console.log(sidebarState)
    }

    function handleFurtherImprovement(){
        alert('In further Versions')
    }

    return(
        <header>
            <Sidebar on = {sidebarState} setSidebarState = {handleSetSidebarState} furtherVersions = {handleFurtherImprovement}/>
            <nav>
                <div className = "Nav-Logo">
                    <a href = '#'><img src = {Logo} alt = 'Lucas William Developer Logo' /></a>
                </div>
                <div className = "Nav-Links">
                    <a href = '#About'><p>ABOUT</p></a>
                    <a onClick = {handleFurtherImprovement}><p>PROJECTS</p></a>
                    <a onClick = {handleFurtherImprovement}><p>REVIEWS</p></a>
                    <a href = 'https://medium.com/@lucaswgmazzolim'><p>BLOG</p></a>
                    <a href = '#Contact'><p>CONTACT</p></a>
                </div>
                <div className = "Nav-SocialMedia">
                    <a href = 'https://www.linkedin.com/in/lucasmazzolim'><img src = {linkedin} alt = 'Navigation to Linkedin Profile' /></a>
                    <a href = 'https://github.com/Lucas-Mazzolim'><img src = {github} alt = 'Navigation to GitHub Profile' /></a>
                </div>
                <div className = 'Nav-PhoneButton'>
                    <a>
                        <img src = {HamburguerMenu} alt = 'SideBar Menu' onClick = {handleSetSidebarState}/>
                    </a>
                </div>
            </nav>
        </header>
    )
}