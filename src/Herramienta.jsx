import React, { useEffect } from 'react'
import './herra.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Herramienta = ({titulo, titulo1, titulo2, titulo3, url1, url2, url3, url4 }) => {

  useEffect(() => {
    Aos.init({ duration: 1000})
  }, [])

  
  return (
    <div data-aos='fade-up' className='Conten'>
      <div className='Cada'>
        <div className='tit'>{titulo}</div>
        <div style={{backgroundImage: `url(${url1})`}} className='img1'/>
      </div>
      <div className='Cada'>
        <div className='tit'>{titulo1}</div>
        <div style={{backgroundImage: `url(${url2})`}} className='img1'/>
      </div>
      <div className='Cada'>
        <div className='tit'>{titulo2}</div>
        <div style={{backgroundImage: `url(${url3})`}} className='img1'/>
      </div>
      <div className='Cada'>
        <div className='tit'>{titulo3}</div>
        <div style={{backgroundImage: `url(${url4})`}} className='img1'/>
      </div>
    </div>
    
  )
}



export default Herramienta;