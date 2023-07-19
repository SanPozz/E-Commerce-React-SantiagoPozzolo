import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import cartLogo from '../assets/carro.png' ;

const CartWidget = () => {

    const [contadorCarrito, setContCarrito] = useState(0);

    return (

        <div className='cartlogo'>
            <ul>
                <li><Link to={'/cart'}><img src={cartLogo} width={60} alt="" /></Link></li>
            </ul>
            
            <span className='counter-nav'>{contadorCarrito}</span>
        </div>
    )
};

export default CartWidget;