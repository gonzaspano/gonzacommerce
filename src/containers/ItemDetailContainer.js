import React, { useState, useEffect } from 'react'
import Products from '../components/Products'
import { useParams } from 'react-router-dom'
import '../containers/ItemDetailContainer.css'
import ItemDetail from '../components/ItemDetail'

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
                setProd(result.find(p => p.id === id))
                setLoading(false)
            })
        }, 3000)
    }, [])


    return <>
        {Loading ?  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h2 className="subtitle">Cargando producto</h2>
                    </div> :

                    <ItemDetail prod= {Prod} />

        }
    </>
}

export default ItemDetailContainer