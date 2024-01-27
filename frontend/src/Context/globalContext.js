import React, { useState, useContext } from "react"
import axios from "axios"

const   BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) =>{
    const user = "admin"
    const [error,setError] = useState(null)
    const [sites, setSites] = useState([])
    const [active,setActive] = useState(1)
    const [names, setNames] = useState([])

    const getData = async() =>{
        try{
            const response = await axios.get(`${BASE_URL}get-user-data/${user}` , {
                user:"patterns"
            })
            setSites(response.data)
            // console.log(response.data)  
        } catch(err){
            console.log(err.response);
        }
          
    }

    const getPatternNames = async(req,res) =>{
        try{
            const response = await axios.post(`${BASE_URL}search-url` , {
                url:"patterns"
            })
            const patterns = response.data[0].patterns;
            // console.log(patterns)
            setNames(patterns)
        }
        catch(err){
            console.log(err.response)
        }
    }

    

    return(
        <GlobalContext.Provider value = {{
            getData,
            setError,
            sites,
            setSites,
            active,
            setActive,
            getPatternNames,
            names
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}