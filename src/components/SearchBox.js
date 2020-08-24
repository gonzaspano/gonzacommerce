import React, {useState, useEffect} from 'react'

function SearchBox() {
    const [Input, setInput] = useState('')

    useEffect(() => {
        console.log(Input)
    },[Input])

    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" 
            placeholder="Search" aria-label="Search" onChange={event => setInput(event.target.value)} />
        </form>
    )
}

export default SearchBox