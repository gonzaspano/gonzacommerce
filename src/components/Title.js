import React from 'react'
import '../components/Title.css'
import {Link} from 'react-router-dom'

function Title() {
    return (
        <Link className="title-link" to= {'/'}> <h1 className="Title"> La florería</h1> </Link>
    )
}

export default Title