import { createContext, useEffect, useState } from 'react';

export const TiendaContext = createContext()

export const TiendaProvider = ({children}) => {

  const [cartItems, setCartItems] = useState([])
  const [cartItemsNumber, setCartItemsNumber] = useState(0)
  const [total, setTotal] = useState(0)
  

  useEffect(() => {
    // CONTABILIZAR LA CANTIDAD DE ITEMS EN EL CARRITO
    const itemsTotal = cartItems?.reduce((acc, item) => acc + item.quantity, 0)
    setCartItemsNumber(itemsTotal)

    // CONTABILIZAR EL PRECIO TOTAL DE ITEMS EN EL CARRITO
    const itemsMoney = cartItems?.reduce((acc, item) => acc + (item.precio * item.quantity ), 0)
    setTotal(itemsMoney)
    
  }, [cartItems])


  // AGREGAR PRODUCTOS AL CARRITO
  const handleCartItems = (item) => {
    if ( cartItems.some(itemState => itemState.id === item.id )) {
      const updatedCart = cartItems.map(itemState => itemState.id === item.id ? item : itemState)
      setCartItems(updatedCart)
    }
    else {
      setCartItems([ ...cartItems, item ])
    }
  }

  // ELIMINAR PRODUCTOS DEL CARRITO
  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
  }

  // VACIAR CARRITO
    const handleEmptyCart = () => {
      setCartItems([])
    }
  
  return (
    <TiendaContext.Provider
      value={{
        handleCartItems,
        cartItems,
        cartItemsNumber,
        total,
        handleDelete,
        handleEmptyCart
      }}
    >
      {children}
    </TiendaContext.Provider>
  )
}