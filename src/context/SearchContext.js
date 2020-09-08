import React, { useContext, useState } from 'react'

export const SearchContext = React.createContext()
export const useSearchContext = () => useContext(SearchContext)

export function SearchContextProvider ( {children} ) {
    const [InputValue, setInputValue] = useState('')

    function getValue(text) {
        setInputValue(text)
    }

    return <>
        <SearchContext.Provider value= {{ getValue, InputValue }} >
            {children}
        </SearchContext.Provider>
    </>
}