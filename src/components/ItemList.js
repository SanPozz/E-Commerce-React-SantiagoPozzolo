import React from 'react';

import { Item } from "../components/Item";

export const ItemList = ({item}) => {
  return (
    <div className='container-list-products'>
      {
      item.map(item=>

      <div key={item.id}>
        <Item item={item}/>
      </div>
        )
        }
    </div>
  )
}
