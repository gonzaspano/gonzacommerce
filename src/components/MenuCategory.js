import React from 'react'
import '../components/MenuCategory.css'
import { Link } from 'react-router-dom'

function MenuCategory() {

    return <>
        <div className="MenuCategory">
            <Link to={`/categories/regalos`} > <p className="textCat"> Regalos </p> </Link>
            <Link to={`/categories/eventos`} > <p className="textCat"> Eventos </p> </Link>
            <Link to={`/categories/condolencias`} > <p className="textCat"> Condolencias </p> </Link>
        </div>
    </>
}

export default MenuCategory