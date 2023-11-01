import React, { Children, createContext } from 'react'

export const CartContext = createContext();

const CartProvider = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId))
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
            {Children}
        </CartContext.Provider>
    )
}

export default CartProvider