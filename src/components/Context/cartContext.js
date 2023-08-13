import React, { createContext } from "react";

import useLocalStorage from "../Custom/useLocalStorage";

export const Cart = createContext(null);

function CartContext({ children }) {

    let [cart, setCart] = useLocalStorage('carrito', [])

    const addToCart = (item) => {
        const addCart = [...cart, item]
        const confirmExist = cart.some(product => product.id === item.id)

        if (confirmExist) {
            cart.map(product => product.id === item.id ? product.qty += item.qty : null);
            const addItemDup = [...cart];
            setCart(addItemDup);
        } else {
            setCart(addCart);
        }
    }

    const removeItem = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([])
    }

    const cartCounter = () => {
        return (
            cart.reduce((prev, prod) => (prev + prod.qty), 0)
        )
    }
    
    const totalCart = () => {
        const total = cart.reduce((acc, product) => acc += (product.qty * product.price), 0);
        return total;
    }

    return (
        <Cart.Provider value={{ cart, addToCart, removeItem, clearCart, totalCart, setCart, cartCounter }}>
            {children}
        </Cart.Provider>
    )
}

export default CartContext