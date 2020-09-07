import React, { useState, useEffect } from 'react'
import '../components/MenuCategory.css'
import { getFirestore } from '../firebase/index'
import { Link } from 'react-router-dom'

function MenuCategory() {
    /*     const [category, setCategory] = useState([])
    
        useEffect(() => {
            const db = getFirestore()
    
            const itemCollection = db.collection("productos")
    
            itemCollection.get().then((querySnapshot) => {
                if(querySnapshot.size === 0) {
                    console.log("no resultados pa")
                }
                setCategory(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
            }).catch((error) => {
                console.log("Error buscando prods", error)
            }).finally(() => {
                console.log("listo")
            })
        }, []) */

    return <>
        <div className="MenuCategory">
            <Link to={`/categories/regalos`} > <p className="textCat"> Regalos </p> </Link>
            <Link to={`/categories/eventos}`} > <p className="textCat"> Eventos </p> </Link>
            <Link to={`/categories/condolencias`} > <p className="textCat"> Condolencias </p> </Link>
        </div>

        {/*     <div className="MenuCategory">
    {category.map((c)=> 
            <Link to= {`/categories/${c.category}`} > <p className="textCat"> {c.category} </p> </Link>
            )}
    </div> */}
    </>
}

export default MenuCategory