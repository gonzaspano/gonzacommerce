import React, { useContext, useState, useEffect } from 'react'

export const CartContext = React.createContext()

export const useCartContext = () => useContext(CartContext)

export function CartContexProvider( { children } ) {

    const [list, setList] = useState ([])
    
    function addProd(newProd) {
        const prodAdded = [...list, newProd]
        setList(prodAdded)
    }

    useEffect(()=>{
        console.log(list)
    },[list])

    return <>
        <CartContext.Provider value= {{ list, addProd }} >
            {children}
        </CartContext.Provider>
    </>
}