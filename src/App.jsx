import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <text className='nombre'>Diego Franco</text>
      <div className='descrip'>
        <text className='text'>Sobre mí</text>
        <div className='yo'>
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
        PROYECTOS..........
      </div>
    </div>
  )
}

export default App
