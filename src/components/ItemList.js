import React, { useState, useEffect } from 'react'
import Product from './Products'
import { Link } from 'react-router-dom'
import '../components/ItemList.css'

const ProdList = new Promise((res, rej) => {
    res(Product)
})

function ItemList() {
    const [prods, setProds] = useState([])

    useEffect(() => {
        ProdList.then(result => {
            setProds(result)
        })
    }, [])

    return <>
        {prods.map((p) =>
            <div key={p.id} className="prodsContainer col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <h4 className="prodsName"> {p.name} </h4>
                <Link to={`/ItemDetailContainer/${p.id}`} ><img className="prodsImg" src={p.img} alt="producto"/></Link>
                <p className="prodsDetail">Disponibles: {p.stock} </p>
                <div className="container-button">
                    <Link to={`/ItemDetailContainer/${p.id}`} >
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