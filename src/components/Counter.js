import React, { useState } from 'react'
import '../components/Counter.css'
import {Link} from 'react-router-dom'

function Counter(props) {
    const [number, setNumber] = useState(1)

    function addClick() {
        if (number < props.numMax) {
            setNumber(number + 1)
        }
    }

    function removeClick() {
        if (number > props.numMin) {
            setNumber(number - 1)
        }
    }

    return (
        <div className="counter_container">
            <div>
                <h4>Agregar productos</h4>
            </div>

            <div>
                <div className="container_number">
                    <button type="button" class="btn btn-dark" onClick={() => removeClick()} > Menos </button>
                    <input type="text" value={number}></input>
                    <button type="button" class="btn btn-dark" onClick={() => addClick()} > Más </button>
                </div>
                <div className="container_button">
                    <Link to={`/cart`}> <button type="button" className="btn btn-dark">Agregar al carro</button> </Link>
                </div>
            </div>
        </div>
    )
}

export default Counter