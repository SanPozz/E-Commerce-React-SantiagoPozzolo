import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Cart } from "./Context/cartContext";

import ItemsCart from "./ItemsCart";

function CartContainer() {
    
    let { cart, clearCart, totalCart } = useContext(Cart)
    
    const voidCart = () => {
        clearCart();
    }

    return(
        <div>

            {
                !cart.length ?(
                    <div class="empty-cart-message">
                        <h2 class="empty-cart-title">Tu Carrito Está Vacío</h2>
                    </div>
                )
                :(
                    <>
                        <div className="cart">
                            <h2 className="empty-cart-title">Tu Carrito</h2>
                            <div className="cart-grid">
                                    {cart.map(item => {return <ItemsCart key={item.id} product={item}/>})}
                            </div>
                            <div className="cart-buttons">
                                <button className="clear-cart-button" onClick={voidCart}>Vaciar Carrito</button>

                                <Link to={"/checkout"}>
                                    <button className="checkout-button">Finalizar Pedido</button>
                                </Link>
                                
                            </div>
                            <div className="total">
                                <div className="total-label">Total:</div>
                                <div className="total-amount">{`$${totalCart()}`}</div>
                            </div>
                            
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default CartContainer