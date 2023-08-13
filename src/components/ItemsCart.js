import React, { useContext } from "react";
import { Cart } from "./Context/cartContext";

function ItemsCart({ product }) {
    const {name, img, price, qty, id} = product;

    const {removeItem}  = useContext(Cart)

    const deleteProduct = (id) => {
        removeItem(id)
    }

    return(
        <div className="cart-item">
            <div className="item-info"><img src={img} alt={`Imagen de ${name}`}/></div>
            <div className="item-info">{name}</div>
            <div className="item-info">{`$${price}`}</div>
            <div className="item-info">{qty}</div>
            <div className="item-info">{` Subtotal: $${price * qty}`}</div>
            <button className="remove-button" onClick={() => deleteProduct(id)}>Eliminar Producto/s</button>
        </div>
    )
}

export default ItemsCart