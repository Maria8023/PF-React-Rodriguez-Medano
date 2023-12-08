import { createContext, useState } from "react";

export const cartContext = createContext({
    cart: []
})

export const CartProvider =({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item,quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev=> [...prev, {...item, quantity}])
        }else {
            console.error("El producto ya fue agregado")
        }
    }


const removeItem =(itemId)=> {
    const cartUpdated = cart.filter(prod => prod.id !==itemId)
    setCart(cartUpdated)
}

const clearCart =() => {
    setCart([])
}


  return (
    <CartContex.Provider value={{cart, addItem, removeItem, clearCart}}>
        {children}
    </CartContex.Provider>
  )
}


