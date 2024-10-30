import { useState } from 'react'
import QrCode from "./assets/qr-code.png"
import './App.css'
// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Competencies from './components/Competencies'
import Tools from './components/Tools'
import Destaques from './components/Destaque'
import AllProjects from './components/AllProjects'
import LinksBar from './components/LinksBar'

function App() {


  return (
    <>
    <header>
      <Navbar/>
      <Hero/>
    </header>
    <section>
      <About/>
    </section>
    <section>
      <Tools/>
    </section>
    <section>
      <Competencies/>
    </section>
    <section>
      <Destaques/>
    </section>
    <section>
      <AllProjects/>
    </section>
    <footer>
      <LinksBar/>
    </footer>
    <aside className='qr-code'>
      <div className="qr-content container">
      <h1>Escaneie para a versão mobile</h1>
        <img src={QrCode} alt="qr-code da versão mobile" />
       
      </div>
    </aside>
    </>
  )
}

export default App
