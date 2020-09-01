import React from 'react'
import { CartContexProvider, useCartContext } from '../context/CartContext'

function CartComponent() {
    const {list} = useCartContext()

    return <div className="col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6">
        <div style={{ height: "300px" }}>
            <h4>Productos agregados</h4>
            <div>
                {list.map( (p) => 
                    <div key={p.id}>
                        <h3> {p.name} </h3>
                        <p> {p.price} </p>
                    </div>
                 )}
            </div>
        </div>
    </div>
}


function Cart() {
    return <>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h2 className="subtitle">Finalizar compra</h2>
        </div>

        <CartContexProvider>
            <CartComponent />
        </CartContexProvider>
    </>
}

export default Cart