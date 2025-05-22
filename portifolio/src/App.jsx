import { useState } from 'react'
import Header from './Universal Components/Header'
import Footer from './Universal Components/Footer'
import './styles/index.css'
import Presentation from './Main Components/Presentation'
import About from './Main Components/About'
import Abilities from './Main Components/Abilities'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = 'App'>
      <Header/>
      <main>
        <Presentation/>
        <About/>
        <Abilities/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
