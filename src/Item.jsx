import React from 'react';
import './item.css'


const Item = ({clase, titulo, url, tet, link, sino}) => {

  
  return (
    <div class="Item">
      <div className={clase} style={{backgroundImage: url}} >

      </div>
      <div className='descripcion'>
        <div className='tit'>{titulo}</div>
        <div className='tet'>{tet}</div>
        <a className='link' href={link} target="_blank">{sino}</a>

      </div>
    

    </div>
  )
}



export default Item;