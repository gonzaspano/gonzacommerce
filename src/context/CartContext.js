import React, { useContext, useState } from 'react'

export const CartContext = React.createContext()

export const useCartContext = () => useContext(CartContext)

export function CartContexProvider( { children } ) {
    const [list, setList] = useState ([])
    const [totalQuantityCart, setTotalQuantityCart] = useState(0)

    function addProd(newProd, quantity) {
        const prodAdded = [...list, newProd]
        setList(prodAdded)
        addTotalQuantity(quantity)
    }

    function cleanList(){
        setList([])
        setTotalQuantityCart(0)
    }

    function addTotalQuantity(quantity) {
        const number = totalQuantityCart + quantity
        setTotalQuantityCart(number)
    }

    return <>
        <CartContext.Provider value= {{ list, addProd, cleanList, totalQuantityCart, setTotalQuantityCart }} >
            {children}
        </CartContext.Provider>
    </>
}