import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import Carusel from './Casurel'
import java from '../img/java.jpg'
import css from '../img/css.jpg'
import pyth from '../img/python.png'
import cplus from '../img/c++.png'
import cc from '../img/cmas.png'
import js from '../img/js.png'
import html from '../img/html.png'
import sql from '../img/sql.png'


function App() {
  useEffect(() => {
    Aos.init({ duration: 1000})
  }, [])

  useEffect(() => {
    asignli()
  }, [])


  const toggle = () => {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('active')

  }

  const asignli = () => {
    const lis = document.querySelectorAll('li')
    lis.forEach((e, i)=>{
      e.style.setProperty(
        '--i', i
      )
    })

  }

  return (
    <div className="App">
      <text data-aos='fade-down' className='nombre'>Diego Franco</text>
      <div className='descrip'>
        <text className='text'>Sobre mí</text>
        <div data-aos='fade-right' className='yo'>
          Soy un estudiante de la Universidad del Valle de Guatemala, actualemnte curso
          tercer año de la Ingeniería en Ciencias de la Computación y Tecnologías de la Información. 
          He desempeñado diferentes proyectos web tanto backend como frontend, manejo bases de 
          datos y desarrollo de videojuegos.
          <br/>
          <br/>
          Me considero una persona bastante dedicada a la que le gusta aprovechar el tiempo al máximo. 
          En mis timpos libres suelo practicar deportes especialmente el balonmano, en el cual me he enfocado los 
          ultimos 10 años de mi vida.
        </div>
      </div>
      <div className='TitProyectos'/>
      <div className='PROY'>
        <text className='text'>Proyectos</text>
        <Carusel/>
      </div>
      <div className='LENGUA'>
        <text className='text'>Lenguajes</text>
        <div className='menu'>
          <div className='opt' onClick={toggle}>Lenguajes</div>
          <li style={{backgroundImage: `url(${java})`, backgroundSize: 'cover', backgroundPosition: 'center'}}> </li>
          <li style={{backgroundImage: `url(${css})`, backgroundSize: 'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}></li>
          <li style={{backgroundImage: `url(${pyth})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></li>
          <li style={{backgroundImage: `url(${cplus})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></li>
          <li style={{backgroundImage: `url(${cc})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></li>
          <li style={{backgroundImage: `url(${js})`, backgroundSize: '90%', backgroundPosition: 'center'}}></li>
          <li style={{backgroundImage: `url(${html})`, backgroundSize: '90%', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}></li>
          <li style={{backgroundImage: `url(${sql})`, backgroundSize: '90%', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}></li>
          
          <div>

          </div>

        </div>

      </div>
      <div className='por'>hols</div>
    </div>
  )
}

export default App
