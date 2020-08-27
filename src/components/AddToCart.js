import React from 'react'

function AddToCart(props) {
    return (
        <div className="container_button">
            <button type="button" className="btn btn-dark">Agregar al carro ${props.price*props.quantity} </button>
        </div>
    )
}

export default AddToCart