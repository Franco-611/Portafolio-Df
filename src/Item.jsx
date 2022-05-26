import React from 'react';
import './item.css'


const Item = ({data, url}) => {

  
  return (
    <div class="Item">
      <div className='imagen' style={{backgroundImage: url}} >

      </div>
      <div className='descripcion'>
        {data}

      </div>
    

    </div>
  )
}



export default Item;