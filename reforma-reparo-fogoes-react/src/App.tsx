// import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'

function App() {


  return (
    <>
      <header className='header__container'>
        <Navbar></Navbar>
      </header>
      <main>
        <section className='maincontent__container'>
          <div className='maincontent__sloganSection'>
            <h1 className='maincontent__sloganSection-title'>Marcos Reformas de fogões</h1>
            <p className='maincontent__sloganSection'>O Especialista em reforma e reparos de fogões que você precisa, para nunca ficar na mão !</p>
            <button>Agendar Reparo</button>
          </div>
          <div></div>
        </section>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
