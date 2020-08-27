import React, { useState, useEffect } from 'react'
import '../components/Counter.css'

function Counter(props) {
    const [number, setNumber] = useState(1)
    const quantity = props.quantity

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

    useEffect(()=>{
        quantity(number)
    },[number])

    return (
        <div className="counter_container">
            <div>
                <h4>¿Cuántos querés?</h4>
            </div>
            <div>
                <div className="container_number">
                    <button type="button" className="btn btn-dark buttonCart" onClick={() => removeClick()} > - </button>
                    <p className="number"> {number} </p>
                    <button type="button" className="btn btn-dark buttonCart" onClick={() => addClick()} > + </button>
                </div>
            </div>
        </div>
    )
}

export default Counter