import React from 'react'
import { useCartContext } from '../context/CartContext'
import DeleteImg from '../assets/delete.png'
import '../components/Cart.css'

function CartComponent() {
    const { list, cleanList } = useCartContext()
    const total = 0

    return <div className="col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6">
        <div>
            <h4>Productos agregados</h4>
            <div>
                {list.map((p) =>
                    <div key={p.id} className="productContainer">
                        <h3> {p.name} </h3>
                        <p> ${p.price} </p>
                        <img src={DeleteImg} alt="delete" className="DeleteImg" />
                    </div>
                )}
            </div>
            <div>
                    <h4> Total: $</h4>
            </div>
            <div className="productContainer">
                <button className="btn btn-dark" onClick={cleanList}>Vaciar</button>
                <button className="btn btn-dark">Comprar</button>
            </div>
        </div>
    </div>
}


function Cart() {
    return <>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h2 className="subtitle">Finalizar compra</h2>
        </div>

        <CartComponent />

    </>
}

export default Cart