import React, { useState} from 'react';

const Swal = require('sweetalert2');

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const addCantidad = () =>{
      if(count < stock){
        setCount(count + 1)
      }else{
        const Toast = Swal.mixin({
          toast: true,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'No hay mas productos disponibles'
        })
      }
    }

    const decrementQuantity = () => {
      if(count > initial){
        setCount(count - 1);
      }
    }

  return (
    <div className='item-count-container'>
      <div className='quantity-container'>
      <div>
        <button className="quantity-button" onClick={decrementQuantity}>-</button>
      </div>

      <div className="quantity">
        {count}
      </div>

      <div>
        <button className="quantity-button" onClick={addCantidad}>+</button>
      </div>
    </div>

      <div className='cart-button-container'>
        <button className="cart-button" onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
  </div>
  )
}

export default ItemCount