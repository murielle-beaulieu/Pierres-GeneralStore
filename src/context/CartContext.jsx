import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {

 const [qty, setQty] = useState(0)
  const [itemVariant, setItemVariant] = useState('Seeds');
  const [cartItem, setCartItem] = useState(item);

  const initialItem = item;

  const decrement = () => {
    setQty((qty) => qty - 1);
  }

  const increment = () => {
    setQty((qty) => qty + 1);
  }

  useEffect(()=> {
    initialItem.variant = itemVariant;
    setCartItem(initialItem);
  }, [itemVariant])

  const addToCart = () => {
    return window.localStorage.setItem(`${JSON.stringify(cartItem)}`,`${qty}`)
  }

  return (
    <CartContext.Provider value={{addToCart, increment, decrement, itemVariant}}>
      {children}
    </CartContext.Provider>
  )
}
