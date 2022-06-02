import React, { useEffect } from 'react'
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
import Herramienta from './Herramienta'
import git from '../img/git.png'
import rt from '../img/react.png'
import rtN from '../img/reactnative.png'
import post from '../img/post.png'
import figma from '../img/figma.png'
import unit from '../img/unity.png'
import db from '../img/db.png'
import neo from '../img/noe.png'
import heidi from '../img/heidi.png'
import lucid from '../img/lucid.png'
import esl from '../img/eslint.png'
import as from '../img/as.png'
import node from '../img/node.png'
import trello from '../img/trello.png'
import vite from '../img/vite.png'
import netli from '../img/neti.png'


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
      <div data-aos='fade-down' className='nombre'>Diego Franco</div>
      <div className='descrip'>
        <text className='text1'>Sobre mí</text>
        <div className='me'>
          <div data-aos='fade-right' className='yo'>
            Soy un estudiante de la Universidad del Valle de Guatemala, actualmente curso
            tercer año de Ingeniería en Ciencias de la Computación y Tecnologías de la Información. 
            He realizado diferentes proyectos web tanto backend como frontend, manejo de bases de 
            datos y desarrollo de videojuegos.
            <br/>
            <br/>
            Me considero una persona bastante dedicada a la que le gusta aprovechar el tiempo al máximo. 
            En mis tiempos libres suelo practicar deportes especialmente el balonmano, en el cual me he enfocado los 
            ultimos 10 años de mi vida.
          </div>
          <div className='foto'/>
        </div>
      </div>
      <div className='TitProyectos'/>
      <div className='PROY'>
        <text className='text'>Proyectos</text>
        <Carusel/>
      </div>
      <div className='TitLenguajes'/>
      <div className='LENGUA'>
        <text className='text'></text>
        <div className='menu'>
          <div className='opt' onClick={toggle}>Lenguajes</div>
          <li style={{backgroundImage: `url(${java})`, backgroundSize: 'cover', backgroundPosition: 'center'}}> </li>
          <li> <div style={{backgroundImage: `url(${css})`, backgroundSize: 'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat', transform: 'rotate(315deg)'}}/></li>
          <li><div style={{backgroundImage: `url(${pyth})`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'rotate(270deg)'}} /></li>
          <li><div style={{backgroundImage: `url(${cplus})`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'rotate(223deg)'}} /></li>
          <li><div style={{backgroundImage: `url(${cc})`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'rotate(180deg)'}}/></li>
          <li><div style={{backgroundImage: `url(${js})`, backgroundSize: '90%', backgroundPosition: 'center', transform: 'rotate(135deg)'}}/></li>
          <li><div style={{backgroundImage: `url(${html})`, backgroundSize: '90%', backgroundPosition:'center', backgroundRepeat:'no-repeat', transform: 'rotate(90deg)'}}/></li>
          <li><div style={{backgroundImage: `url(${sql})`, backgroundSize: '90%', backgroundPosition:'center', backgroundRepeat:'no-repeat', transform: 'rotate(45deg)'}}/></li>

          <div data-aos='fade-right' className='lista'>
            <div className='tit'>C#</div>
            <div className='tit'>Java Script</div>
            <div className='tit'>HTML </div>
            <div className='tit'>SQL</div>
          </div>
          <div data-aos='fade-left' className='lista1'>
            <div className='tit'>Java</div>
            <div className='tit'>CSS</div>
            <div className='tit'>Python</div>
            <div className='tit'>C++</div>
          </div>
        </div>
      </div>
      <div className='TitHerramientas'/>
      <div className='HERRA'>
        <text className='text'>Herramientas</text>
        <Herramienta titulo={'GitHub'} url1={git} titulo1={'React'} url2={rt} titulo2={'Node'} url3={node} titulo3={'Postgresql'} url4={post}/>
        <Herramienta titulo={'Figma'} url1={figma} titulo1={'Unity'} url2={unit} titulo2={'DBeaver'} url3={db} titulo3={'Neo4j'} url4={neo}/>
        <Herramienta titulo={'HeidiSQL'} url1={heidi} titulo1={'LucidChart'} url2={lucid} titulo2={'ESLint'} url3={esl} titulo3={'Android Studio'} url4={as}/>
        <Herramienta titulo={'Trello'} url1={trello} titulo1={'Vite'} url2={vite} titulo2={'Netlify'} url3={netli} titulo3={'React Native'} url4={rtN}/>
      </div>
      <div className='TitContact'/>
      <div className='final'>
        <div className='correo'>
          <a href='mailTo:diegofrancopacay@gmail.com' target="_blank" rel='moopener'>diegofrancopacay@gmail.com</a>
          <div className='logos'>
            <a className='git' target="_blank" data-aos='fade-left' href={'https://github.com/Franco-611'}></a>
            <a className='link1' target="_blank" data-aos='fade-right' href={'https://www.linkedin.com/in/diego-franco-153a62234/'}></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
