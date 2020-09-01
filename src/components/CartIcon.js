import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartImg from '../assets/cart.png'
import '../components/CartIcon.css'
import { CartContext } from '../context/CartContext'

/* function NumberComponent() {
    const number = useContext(CartContext)
    return <p> {number} </p>
} */

function CartIcon() {
    // const quantityAdded = useContext(CartContext)

    return <>
        <div className="container">
            <Link to={`/cart`}> <img src={CartImg} className="cartImg" alt="cart" /> </Link>
{/*             <div className="quantityCart">
            <CartContext.Provider value={quantityAdded}>
                    <NumberComponent />
            </CartContext.Provider>
            </div> */}
        </div>
    </>
}

export default CartIcon
