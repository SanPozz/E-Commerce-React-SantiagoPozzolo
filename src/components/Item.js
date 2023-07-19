import React from 'react';
import { Link } from "react-router-dom";

export const Item = ({item}) => {
  return (
    <div>
        <Link to={'/item/' + item.id}>
        <div className='card'>
          <img src={item.imgURL} alt={item.title} className='card-img'/>
          <div className='card-content'>
            <p className='card-title'>{item.title}</p>
            <p className='card-price'>$ {item.price}</p>
          </div>
        </div>
        </Link>
    </div>
  )
}
