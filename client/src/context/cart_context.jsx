import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const newCart = [...cart, item];
        localStorage.setItem("cart", JSON.stringify(newCart));
        setCart([...cart, item]);
    }

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId)
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart)
    }

    const clearCart = () => {
        setCart([]);
    }

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(cartData);
    }, [])

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider