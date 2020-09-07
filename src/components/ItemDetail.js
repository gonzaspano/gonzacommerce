import React, { useState } from 'react'
import Counter from '../components/Counter'
import '../components/ItemDetail.css'
import AddToCart from './AddToCart'

function ItemDetail(props) {
    const [prodQuantity, setProdQuantity] = useState(0)

    function setQuantity(number) {
        setProdQuantity(number)
    }
    return (
        <div className="container-fuid">
            <div className="row">
                <div className="col-lg-6 col-xl-6">
                    <img src={props.prod.img} className="imgDetail" alt="producto" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <div className="containerDetail">
                        <h3 className="titleDetail"> {props.prod.title} </h3>
                        <p className="textDetail"> {props.prod.information} </p>
                        <p className="priceDetail"> ${props.prod.price} </p>
                        <Counter numMin="1" numMax={props.prod.stock}  quantity={setQuantity}  />
                        <AddToCart prod={props.prod} price={props.prod.price}  quantity={prodQuantity} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail