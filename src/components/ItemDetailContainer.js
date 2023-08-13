import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// import { Loader } from './Loader';

import { doc, getDoc, getFirestore } from "firebase/firestore"

// import productos from '../json/productos.json';

import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    // const [loading, setLoading] = useState(true)
    const {idItem} = useParams();

    useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, 'products', idItem )
        getDoc(queryDb)
        .then(resp => setItem( { id: resp.id, ...resp.data() } ))
        // .finally(() => setLoading(false))
    }, [idItem])

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer