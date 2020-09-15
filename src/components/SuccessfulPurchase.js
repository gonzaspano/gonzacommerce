import React from 'react'
import './SuccessfulPurchase.css'

function SuccessfulPurchase( props ) {
    return (
        <div className="purchase-container col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6">
            <h3> Compra exitosa! </h3>
            <p> Su código de compra es {props.orderId} .
                Guardelo para cualquier consulta o problema.</p>
        </div>
    )
}

export default SuccessfulPurchase