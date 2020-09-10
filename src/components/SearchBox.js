import React, {useEffect} from 'react'
import { useSearchContext } from '../context/SearchContext'

function SearchBox() {
    const {InputValue, getValue} = useSearchContext()

    useEffect(() => {

    },[InputValue])

    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" 
            placeholder="Search" aria-label="Search" onChange={event => getValue(event.target.value)} />
        </form>
    )
}

export default SearchBox
