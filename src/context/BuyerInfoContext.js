import React, { useContext, useState, useEffect } from 'react'

export const BuyerInfoContext = React.createContext()

export const useBuyerInfoContext = () => useContext(BuyerInfoContext)

export function BuyerInfoContextProvider( {children} ) {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")    
    const [mail, setMail] = useState("")
    const [tel, setTel] = useState("")

    
    const submitHandler = (e) => {
        e.preventDefault()
    }

    const buyerInfo = {
        name: name,
        surname: surname,
        mail: mail,
        tel: tel,
    }

    return (
        <BuyerInfoContext.Provider value= {{ buyerInfo, setName, setSurname, setMail, setTel, submitHandler}} >
            {children}
        </BuyerInfoContext.Provider>
    )

}