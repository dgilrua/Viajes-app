"use client"
import {createContext, useState} from 'react'

export const ManejoContext = createContext()


export const ManejoProvider = ({children}) => {

  const [logged, setLogged] = useState("unauthenticated")
  const [user, setUser] = useState()

  return (
    <ManejoContext.Provider value={{logged, setLogged, setUser, user}}>
      {children}
    </ManejoContext.Provider>
  )
}