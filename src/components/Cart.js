import React, { useState, useEffect } from 'react'
import { useCartContext } from '../context/CartContext'
import DeleteImg from '../assets/delete.png'
import '../components/Cart.css'
import { Link } from 'react-router-dom'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../firebase'

function CartComponent(props) {
    const { list, cleanList, deleteProd, totalPrice } = useCartContext()

    return <>
        <Title />
        <div className="col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6">
            <div>
                <h4>Productos agregados</h4>
                {list.map((p) =>
                    <div key={p.id} className="productContainer">
                        <h3> {p.title} </h3>
                        <p> x {p.quantity} </p>
                        <p> ${p.quantity * p.price} </p>
                        <img src={DeleteImg} alt="delete" className="DeleteImg" onClick={() => deleteProd(p)} />
                    </div>
                )}
                <div>
                    <h4> Total: ${totalPrice()} </h4>
                </div>
                <div className="productContainer">
                    <button className="btn btn-dark" onClick={cleanList}>Vaciar</button>
                    <button className="btn btn-dark" onClick={props.createOrder} >Comprar</button>
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
    const { list, totalPrice } = useCartContext()
    const [FullCart, setFullCart] = useState(true)
    const [orderId, setOrderId] = useState("")

    async function createOrder() {
        const db = getFirestore()
        const orders = db.collection("orders")

        const selectedProds = list.map(cartProd => ({
            id: cartProd.id,
            title: cartProd.title,
            quantity: cartProd.quantity,
            price: cartProd.price
        }))

        const newOrder = {
            buyer: {
                name: "Pepe Mujica",
                phone: "1554667998",
                email: "pepemujica@gobuy.com"
            },
            prods: selectedProds,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: totalPrice()
        }

/*         const prodsToUpdate = db
            .collection('productos',
                firebase.firestore.FieldPath.documentId(), "in", selectedProds.map(i => i.id)) */

        try {
            const { id } = await orders.add(newOrder);
            setOrderId(id);
            console.log(id)
        } catch (err) {
            // seteamos feedback para el user
            console.log('Error');
        } finally {
            console.log(orderId)
        }
    }

    useEffect(() => {
        if (list.length === 0) {
            setFullCart(false)
        }
    }, [list])

    return <>
        {FullCart ? <CartComponent createOrder= {createOrder} /> : <EmptyCart />}
    </>
}

export default Cart