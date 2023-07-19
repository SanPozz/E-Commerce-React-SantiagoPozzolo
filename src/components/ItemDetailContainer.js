import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import productos from '../json/productos.json';

import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve)=>{
            setTimeout(() => {
                resolve(productos.find(item => item.id === parseInt(id)))
            }, 500);
        });
        promesa.then((data) => {
            setItem(data)
        })
    }, [id])

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer