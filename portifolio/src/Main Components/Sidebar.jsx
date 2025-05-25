import '../styles/Sidebar.css'
import PersonalLogo from '../assets/logo.png'

export default function Sidebar(props){
    return(
        <aside className = 'Sidebar' style = {{display: props.on}}>
            <div>
                <a href = '#About' onClick = {props.setSidebarState}><p>ABOUT</p></a>
            </div>
            <div>
                <a onClick = {props.furtherVersions}><p>PROJECTS</p></a>
            </div>
            <div>
                <a onClick = {props.furtherVersions}><p>REVIEWS</p></a>
            </div>
            <div>
                <a href = '#Contact' onClick = {props.setSidebarState}><p>CONTACT</p></a>
            </div>
            <div>
                <a href = 'https://medium.com/@lucaswgmazzolim'><p>BLOG</p></a>
            </div>
            <div className = 'SideBar-LastDiv'>
                <img src = {PersonalLogo} alt = 'Personal Logo of Lucas Mazzolim'/>
                <p>LUCAS MAZZOLIM - 2025</p>
            </div>
        </aside>
    )
}