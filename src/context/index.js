'use client'
import { createContext,  useState } from "react";


export const GlobalContext = createContext(null)

export default function GlobalState({children}){

const  [query, setQuery] = useState('')
// this is for wishlist
   
// this for cart
  
return(
    <GlobalContext.Provider value={{ query, setQuery ,
    }}>
        {children}
    </GlobalContext.Provider>
)


}