import { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import Carusel from './Casurel'

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000})
  }, [])
  const [count, setCount] = useState(0)

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

      </div>
    </div>
  )
}

export default App
