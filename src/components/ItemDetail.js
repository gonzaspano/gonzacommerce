import React from 'react'
import Counter from '../components/Counter'

function ItemDetail(props) {
    return (
        <div className="container-fuid">
            <div className="row">
                <div className="col-lg-6 col-xl-6">
                    <img src={props.prod.img} className="imgDetail" alt="producto" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <div className="containerDetail">
                        <h3 className="titleDetail"> {props.prod.name} </h3>
                        <p className="textDetail"> {props.prod.information} </p>
                        <Counter numMin="1" numMax={props.prod.stock} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail