import React from 'react'
import { Link } from 'react-router-dom'
import CartImg from '../assets/cart.png'
import '../components/CartIcon.css'
import { useCartContext } from '../context/CartContext'

function CartIcon() {
    const {totalQuantityCart} = useCartContext()

    return <>
        <div className="container">
            <Link to={`/cart`}> <img src={CartImg} className="cartImg" alt="cart" /> </Link>
            <p> {totalQuantityCart} </p>
        </div>
    </>
}

export default CartIcon
