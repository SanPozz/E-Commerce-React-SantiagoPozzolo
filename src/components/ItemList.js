import React from 'react';

import { Item } from "../components/Item";
import { memo } from 'react'

export const ItemList = memo(
    ({items}) => {
        return (
                <div className='container-list-products'>
                    { items.map((prod) =>
                        <Item item={prod} key={prod.id}/>
                    )}
                </div>
        );
    }
)

//container-list-products