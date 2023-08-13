import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cart } from './Context/cartContext';
import ItemCount from './ItemCount';


const ItemDetail = ({item}) => {

    const [goToCart, setGoToCart] = useState(false)

    const navigate = useNavigate();

    const { addToCart } = useContext(Cart)

    const onAdd = (qty) => {
        setGoToCart(true)
        addToCart({...item, qty})
    }

    const handleBack = () => {
      navigate('/')
    }

  return (
    <div className='container-product-detail'>
        <div className='product-detail'>
            <img src={item.img} alt={item.title} className='product-image-detail'/>
            <h2 className='product-title-detail'>{item.title}</h2>
            <p className='product-price-detail'>$ {item.price}</p>
            <p>{item.description}</p>
            <button className="back-button-detail" onClick={handleBack}>
            Back
            </button>
        </div>
        <div>
        {
          !goToCart 
                    ? 
                        <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> 
                    : 
                        <div className="cart-buttons">
                            <Link to={`/cart`}> 
                                <button className="clear-cart-button">Ir al carrito</button>
                            </Link>
                            <Link to={`/`}> 
                                <button className="checkout-button">Seguir comprando</button>
                            </Link>
                        </div>
        }
        </div>
    </div>
  )
}

export default ItemDetail