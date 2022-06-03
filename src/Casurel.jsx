import React from 'react'
import './carusel.css'
import Item from './Item'
import Carousel from 'react-elastic-carousel'
import calcu from '../img/calcu.png'
import memoria from '../img/memoria.png'
import laberinto from '../img/laberinto.png'
import pixel from '../img/sat.png'
import cssonly from '../img/cssonly.png'
import dinners from '../img/diners.png'
import netf from '../img/netf.png'


const Carusel = () => {

  const data = [
    'Calculadora con funcionalidades de suma, resta, multiplicación, división, mod, etc... Consta de un teclado numérico compuesto de botones con los cuales se interactua para poder operar y que los resultados aparezcan en la pantalla. Se configuró un webpack  para trabajar con React; así mismo se utiliza loadres de imágenes, emotion, babel y ESLint para que el código implementado fuese airbnb compliant.',
    'Juego de memoria con 8 pares de cartas. Al iniciar el juego las cartas se muestran volteadas, al hacer click sobre una de ellas se voltea para intentar encontrar la pareja de la carta que fue seleccionada. Al haber encontrado las 8 parejas el juego finaliza dando opción a reiniciarse. Para el dasarrollo de este proyecto se utilizaron las bases de componentes en React.',
    'Juego en el que el usuario debe de seleccionar el ancho y el alto del laberinto a resolver. Para poder desarrollar este proyecto se configuró un webpack  para trabajar con React; así mismo se utiliza loadres de imágenes, emotion y babel.',
    'Para este proyecto se replicó la página de la SAT gt. Se configuró un webpack  para trabajar con React; asi mismo se utiliza loadres de imágenes, emotion, babel y ESLint para que el código implementado fuese airbnb compliant.',
    'Para este proyecto se utilizó únicamente CSS con el fin de conocer a profundidad conceptos de este lenguaje  tales como posicionamiento y layout. Como se puede observar en la imágen el diseño que se llevo al html fue un stitch.',
    'Es una aplicación que busca ampliar las recetas que una persona pueda cocinar, pero se enfoca en los ingredientes que el usuario tiene a la mano. Para el desarrollo de esta app se está utilizando React Native con el fin de llegar a usuarios con sistema operativo tanto IOS como Android.',
    'Este proyecto se realizó utilizando React para darle toda la estructura visual la cual tiene base en la plataforma Netflix. Por último se implementó una API trabajada en python con la herramienta Flask para poder conectar las transacciones realizadas desde React con los datos que se encuentran en AWS.',
]

  
  return (
    <div class="container">

      <Carousel itemsToShow={1}>
            <Item clase={'imagen'} titulo={'Calculadora'} url={calcu} tet={data[0]} link={'https://super-churros-8ebb4f.netlify.app/'} sino={'Visitar proyecto'}></Item>
            <Item clase={'imagen'} titulo={'Memoria'} url={memoria} tet={data[1]} link={'https://lucky-gingersnap-e268ec.netlify.app'} sino={'Visitar proyecto'}></Item>
            <Item clase={'imagen1'} titulo={'Laberinto'} url={laberinto} tet={data[2]} link={'https://aesthetic-mooncake-56e2bd.netlify.app/'} sino={'Visitar proyecto'}></Item>
            <Item clase={'imagen3'}titulo={'Pixel Perfect'} url={pixel} tet={data[3]} link={'https://sweet-centaur-b20c52.netlify.app/'} sino={'Visitar proyecto'}></Item>
            <Item clase={'imagen'} titulo={'CSS Only'} url={cssonly} tet={data[4]} ></Item>
            <Item clase={'imagen2'} titulo={'Dinners Ready'} url={dinners} tet={data[5]} link={'https://www.figma.com/proto/n3hrvdmhIbsDrzdMTCXtEw/Dinners-Ready?node-id=204%3A1039&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=204%3A1039'} sino={'Visita prototipo en figma'}></Item>
            <Item clase={'imagen3'} titulo={'Simulando Netflix'} url={netf} tet={data[6]} link={'https://streaming.danielgcarrillo.xyz'} sino={'Visitar proyecto'}></Item>
      </Carousel>
    </div>
  )
}



export default Carusel;