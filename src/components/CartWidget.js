import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from './Context/cartContext';

import cartLogo from '../assets/carro.png' ;

const CartWidget = () => {

    const { cartCounter } = useContext(Cart)

    return (

        <div className='cartlogo'>
            <ul>
                <li><Link to={'/cart'}><img src={cartLogo} width={60} alt="" /></Link></li>
            </ul>
            
            <span className='counter-nav'>{cartCounter()}</span>
        </div>
    )
};

export default CartWidget;