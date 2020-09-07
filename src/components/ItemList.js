import React, { useState, useEffect } from 'react'
import Product from './Products'
import { Link, useParams } from 'react-router-dom'
import '../components/ItemList.css'
import { getFirestore } from '../firebase/index'

function ItemList() {
    const [prods, setProds] = useState([])
    const { category } = useParams()

    useEffect(() => {
        const db = getFirestore()

        const itemCollection = db.collection("productos")

        if (category == "undefined") {
            itemCollection.get().then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("no resultados pa")
                }
                setProds(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            }).catch((error) => {
                console.log("Error buscando prods", error)
            }).finally(() => {
                console.log("listo")
            })
        } else {
            const itemCategory = itemCollection.where("category", "===", category)
            itemCategory.get().then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("no resultados pa")
                }
                setProds(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            }).catch((error) => {
                console.log("Error buscando prods", error)
            }).finally(() => {
                console.log("listo")
            })
        }
    }, [])

    return <>
        {prods.map((p) =>
            <div key={p.id} className="prodsContainer col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <h4 className="prodsName"> {p.title} </h4>
                <Link to={`/products/${p.id}`} ><img className="prodsImg" src={"assets/" + p.img} alt="producto" /></Link>
                <p className="prodsDetail">Disponibles: {p.stock} </p>
                <div className="container-button">
                    <Link to={`/products/${p.id}`} >
                        <button type="button" className="btn btn-dark">
                            VER MÁS
                        </button>
                    </Link>
                </div>
            </div>
        )}
    </>
}

export default ItemList