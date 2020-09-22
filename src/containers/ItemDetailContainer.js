import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../containers/ItemDetailContainer.css'
import ItemDetail from '../components/ItemDetail'
import LoadingText from '../components/LoadingText'
import { getFirestore } from '../firebase/index'
import DontExist from '../components/DontExist'

function ItemDetailContainer() {
    const [prod, setProd] = useState([])
    const [Loading, setLoading] = useState(true)
    const [Exist, setExist] = useState(false)
    const { id } = useParams()

    useEffect(() => {
            const db = getFirestore()

            const itemCollection = db.collection("productos")
            const item = itemCollection.doc(id)

            item.get().then((doc) => {
                if (!doc.exists) {
                    console.log('No existe el producto')
                    return
                }
                console.log('producto encontradao rey')
                setExist(true)
                setProd( {id: doc.id, ...doc.data() } )
            }).catch((error) => {
                console.log('error buscando el prod', error)
            }).finally(() => {
                setLoading(false)
            })
    },[id])


    return <>
        { Loading ? <LoadingText /> : Exist ? <ItemDetail prod= {prod} /> : <DontExist /> }

    </>
}

export default ItemDetailContainer