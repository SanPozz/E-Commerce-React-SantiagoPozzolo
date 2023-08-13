import React from 'react';
import { Link } from 'react-router-dom';

import CartWidget from "./CartWidget";
import logo from "../assets/OnlySneakers.png";
// import ItemListContainer from './ItemListContainer';

const NavBar = () => {
    return (
        <div className="contenedor navbar">
                <Link to={'/'}><img src={logo} width={130} alt="" /></Link>
                <ul>
                    <li><Link to={'/category/Nike'} className='links'>Nike</Link></li>
                    <li><Link to={'/category/Adidas'} className='links'>Adidas</Link></li>
                    <li><Link to={'/category/Xclusive'} className='links'>Xclusive</Link></li>
                </ul>
                <CartWidget/>
        </div>

    )
}

export default NavBar;