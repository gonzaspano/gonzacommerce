import React, { useState, useEffect } from 'react'
import Products from '../components/Products'
import { useParams } from 'react-router-dom'
import '../containers/ItemDetailContainer.css'
import Counter from '../components/Counter'

const ProdLists = new Promise((res, rej) => {
    res(Products)
})

function ItemDetailContainer() {
    const [Prod, setProd] = useState([])
    const [Loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setTimeout(() => {
            ProdLists.then(result => {
                setProd(result)
                setLoading(false)
            })
        }, 3000)
    }, [])

    const choosenId = Prod.find(p => p.id == id)
    console.log(choosenId)

    return <>
        {Loading ?  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h2 className="subtitle">Cargando producto</h2>
                    </div> :

            <div className="container-fuid">
                <div className="row">
                    <div className="col-lg-6 col-xl-6">
                        <img src={choosenId.img} className="imgDetail" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="containerDetail">
                            <h3 className="titleDetail"> {choosenId.name} </h3>
                            <p className="textDetail"> {choosenId.information} </p>
                            <Counter numMin="1" numMax={choosenId.stock} />
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
}

export default ItemDetailContainer