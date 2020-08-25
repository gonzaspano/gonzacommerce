import React, {useState, useEffect} from 'react'

function SearchBox() {
    const [InputValue, setInputValue] = useState('')

    useEffect(() => {
        console.log(InputValue)
    },[InputValue])

    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" 
            placeholder="Search" aria-label="Search" onChange={event => setInputValue(event.target.value)} />
        </form>
    )
}

export default SearchBox
