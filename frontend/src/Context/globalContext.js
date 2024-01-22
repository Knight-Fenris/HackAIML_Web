import React, { useState, useContext } from "react"
import axios from "axios"

const   BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) =>{
    const [error,setError] = useState(null)
    const [site, setSite] = useState([])

    const getData = async() =>{
        // const response = await axios.get(`${BASE_URL}get-data`)
        // setSite(response.data)
        // console.log(response.data)    
    }
    

    return(
        <GlobalContext.Provider value = {{
            getData,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}