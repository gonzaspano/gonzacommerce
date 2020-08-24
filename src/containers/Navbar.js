import React from 'react'
import Title from '../components/Title'
import SearchBox from '../components/SearchBox'
import CartImg from '../assets/cart.png'
import '../containers/Navbar.css'
import MenuCategory from '../components/MenuCategory'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="container-fluid">
            <div className="row general_navbar">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <MenuCategory />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <Title />
                </div>
                <div className="navbar3 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <Link to={`/cart`}> <img src= {CartImg} className="cartImg" /> </Link>
                    <SearchBox />
                </div>
            </div>
        </div>
    )
}

export default Navbar