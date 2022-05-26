import React from 'react';
import './carusel.css'
import Item from './Item';
import Carousel from 'react-elastic-carousel'

const Carusel = () => {

  
  return (
    <div class="container">

      <Carousel enableAutoPlay autoPlaySpeed={3000}>
            <Item data={'1'} url={`url('./img/foto.jpeg')`}></Item>
            <Item data={'2'} url={`url('./img/logo.png')`}></Item>
            <Item data={'3'} url={`url('./img/Proyectos.png')`}></Item>
      </Carousel>
    </div>
  )
}



export default Carusel;