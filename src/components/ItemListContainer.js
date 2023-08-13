import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import { ItemList } from "../components/ItemList";
import { Loader } from './Loader';

// import productos from "../json/productos.json";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams();

    useEffect(() => {
        const db = getFirestore();
        if (idCategory) {
            const queryCollectionCategory = query(collection(db, 'products'), where('category', '==', idCategory) )
            getDocs(queryCollectionCategory)
            .then(resp => setItems( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            .finally(() => setLoading(false))
        } else {
            const queryCollection = collection(db, 'products')
            getDocs(queryCollection)
            .then(resp => setItems( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            .finally(() => setLoading(false))
        }  
    }, [idCategory])

    return (
        <div>
            <div>
                <h2 className='productos-h2'>Productos</h2>
                { loading 
                    ? 
                        <Loader />
                    :
                        <ItemList items={items}/>
                    }
            </div>
        </div>
    )
}

export default ItemListContainer;