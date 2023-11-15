"use client"
import {createContext, useState} from 'react'

export const ManejoContext = createContext()


export const ManejoProvider = ({children}) => {

  const [logged, setLogged] = useState("unauthenticated")
  const [user, setUser] = useState()
  const [fechaFiltro, setFechaFiltro] = useState("")
  const [precioFiltro, setPrecioFiltro] = useState()

  return (
    <ManejoContext.Provider 
      value={{
        logged, 
        setLogged, 
        user, 
        setUser, 
        precioFiltro, 
        setPrecioFiltro,
        fechaFiltro,
        setFechaFiltro
    }}>
      {children}
    </ManejoContext.Provider>
  )
}