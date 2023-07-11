import { useState } from 'react';

import cartLogo from '../assets/carro.png' ;

const CartWidget = () => {

    const [contadorCarrito, setContCarrito] = useState(0);

    return (

        <div className='cartlogo'>
            <img src={cartLogo} width={60} alt="" />
            <span>{contadorCarrito}</span>
        </div>
    )
};

export default CartWidget;