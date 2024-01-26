import React, { useState, useContext } from "react"
import axios from "axios"

const   BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) =>{
    const [error,setError] = useState(null)
    const [sites, setSites] = useState([])
    const [active,setActive] = useState(1)

    const getData = async() =>{
        const response = await axios.get(`${BASE_URL}get-data`)
        setSites(response.data)
        console.log(response.data)    
    }
    

    return(
        <GlobalContext.Provider value = {{
            getData,
            setError,
            sites,
            setSites,
            active,
            setActive,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}