import React from 'react';
import './carusel.css'
import Item from './Item';
import Carousel from 'react-elastic-carousel'

const Carusel = () => {

  const data = [
    'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
]

  
  return (
    <div class="container">

      <Carousel enableAutoPlay autoPlaySpeed={5000}>
            <Item clase={'imagen'} titulo={'Calculadora'} url={`url('./img/calcu.png')`} tet={data[0]} link={'https://www.google.com/'} sino={'Visitar proyecto'}></Item>
            <Item clase={'imagen'} titulo={'Memoria'} url={`url('./img/memoria.png')`} tet={data[1]} link={'https://www.google.com/'} sino={'Visitar proyecto'}></Item>
            <Item clase={'imagen1'} titulo={'Laberinto'} url={`url('./img/laberinto.png')`} tet={data[2]} link={'https://www.google.com/'} sino={'Visitar proyecto'}></Item>
            <Item clase={'imagen3'}titulo={'Pixel Perfect'} url={`url('./img/sat.png')`} tet={data[3]} link={'https://www.google.com/'} sino={'Visitar proyecto'}></Item>
            <Item clase={'imagen'} titulo={'CSS Only'} url={`url('./img/cssonly.png')`} tet={data[4]} link={'https://www.google.com/'} ></Item>
            <Item clase={'imagen2'} titulo={'Dinners Ready'} url={`url('./img/diners.png')`} tet={data[5]} link={'https://www.google.com/'} sino={'Visita previa en figma'}></Item>
            <Item clase={'imagen3'} titulo={'Simulando Netflix'} url={`url('./img/netf.png')`} tet={data[6]} link={'https://www.google.com/'} sino={'Visitar proyecto'}></Item>
      </Carousel>
    </div>
  )
}



export default Carusel;