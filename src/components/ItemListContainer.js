import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ItemList } from "../components/ItemList";

import productos from "../json/productos.json";

const ItemListContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve)=>{
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.category === id) : productos)
            }, 500);
        });
        promesa.then((data) => {
            setItem(data)
        })
    }, [id])

    return (
        <div>
            <div>
                <h2 className='productos-h2'>Productos</h2>
                <ItemList item={item}/>
            </div>
        </div>
    )
}

export default ItemListContainer;