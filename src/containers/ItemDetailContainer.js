import React, { useState, useEffect } from 'react'
import Products from '../components/Products'
import { useParams } from 'react-router-dom'
import '../containers/ItemDetailContainer.css'
import ItemDetail from '../components/ItemDetail'
import LoadingText from '../components/LoadingText'

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
        { Loading ? <LoadingText /> : <ItemDetail prod= {Prod} /> }
    </>
}

export default ItemDetailContainer