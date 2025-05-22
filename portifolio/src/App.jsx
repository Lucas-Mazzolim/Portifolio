import { useState } from 'react'
import Header from './Universal Components/Header'
import Footer from './Universal Components/Footer'
import './styles/index.css'
import Presentation from './Main Components/Presentation'
import About from './Main Components/About'
import Abilities from './Main Components/Abilities'
import Contact from './Main Components/Contact'

function App() {

  return (
    <div className = 'App'>
      <Header/>
      <main>
        <Presentation/>
        <About/>
        <Abilities/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
