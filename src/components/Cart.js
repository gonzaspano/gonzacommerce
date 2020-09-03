import React, { useState, useEffect } from 'react'
import { useCartContext } from '../context/CartContext'
import DeleteImg from '../assets/delete.png'
import '../components/Cart.css'
import { Link } from 'react-router-dom'

function CartComponent() {
    const { list, cleanList, deleteProd } = useCartContext()
    const total = 0

    return <>
        <Title />
        <div className="col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6">
            <div>
                <h4>Productos agregados</h4>
                {list.map((p) =>
                    <div key={p.id} className="productContainer">
                        <h3> {p.name} </h3>
                        <p> x {p.quantity} </p>
                        <p> ${p.quantity * p.price} </p>
                        <img src={DeleteImg} alt="delete" className="DeleteImg" onClick= {() => deleteProd(p) } />
                    </div>
                )}
                <div>
                    <h4> Total: $</h4>
                </div>
                <div className="productContainer">
                    <button className="btn btn-dark" onClick={cleanList}>Vaciar</button>
                    <button className="btn btn-dark">Comprar</button>
                </div>
            </div>
        </div>
    </>
}

function EmptyCart() {
    return <>
        <div className="col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6">
            <h4>No hay artículos seleccionados</h4>
            <p> Por favor vuelve a nuestro catálogo para elegir</p>
            <Link to='/' ><button className="btn btn-dark" > Home </button></Link>
        </div>
    </>
}

function Title() {
    return (
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h2 className="subtitle">Finalizar compra</h2>
        </div>
    )
}

function Cart() {
    const { list } = useCartContext()
    const [FullCart, setFullCart] = useState(true)

    useEffect(() => {
        if (list.length === 0) {
            setFullCart(false)
        } 
    }, [list])

    return <>
        {FullCart ? <CartComponent /> : <EmptyCart />}
    </>
}

export default Cart