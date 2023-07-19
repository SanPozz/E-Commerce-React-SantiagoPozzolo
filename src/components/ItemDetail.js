import React from 'react';

import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
  return (
    <div className='container-product-detail'>
        <div className='product-detail'>
            <img src={item.imgURL} alt={item.title} className='product-image-detail'/>
            <h2 className='product-title-detail'>{item.title}</h2>
            <p className='product-price-detail'>$ {item.price}</p>
            <button className="add-to-cart-button-detail">
            Add to Cart
            </button>
            <button className="back-button-detail">
            Back
            </button>
        </div>
        <div>
            {/* <ItemCount/> */}
        </div>
    </div>
  )
}

export default ItemDetail