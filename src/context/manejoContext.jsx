"use client"
import {Paseos} from '@/data/informacion_viajes'
import {createContext, useState} from 'react'

export const ManejoContext = createContext()


export const ManejoProvider = ({children}) => {

  const [logged, setLogged] = useState("unauthenticated")
  const [user, setUser] = useState()
  const [datos, setDatos] = useState(Paseos)
  const [fechaFiltro, setFechaFiltro] = useState("todas_fechas")
  const [precioFiltro, setPrecioFiltro] = useState("todos_precios")
  const [informacionViaje, setInformacionViaje] = useState({})
  const [paseosComprados, setPaseosComprados] = useState([])

  const datosFiltrados = (fecha, precio) => {
    const datosFiltrados = Paseos.filter((item) => {
      if (fecha === "todas_fechas" && precio === "todos_precios") {
        return item
      } else if (fecha === "todas_fechas" && precio !== "todos_precios") {
        return item.precio_puesto.toString() === precio
      } else if (fecha !== "todas_fechas" && precio === "todos_precios") {
        return item.fecha_viaje === fecha
      } else if (fecha !== "todas_fechas" && precio !== "todos_precios") {
        return item.fecha_viaje === fecha && item.precio_puesto.toString() === precio
      }
    })
    setDatos(datosFiltrados)
  }

  return (
    <ManejoContext.Provider 
      value={{
        logged, 
        setLogged, 
        user, 
        setFechaFiltro,
        setPrecioFiltro,
        fechaFiltro,
        precioFiltro,
        setUser, 
        datosFiltrados,
        datos,
        setInformacionViaje,
        informacionViaje,
        setPaseosComprados,
        paseosComprados
    }}>
      {children}
    </ManejoContext.Provider>
  )
}