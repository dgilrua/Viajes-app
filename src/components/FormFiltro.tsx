import {ReactEventHandler, useContext} from 'react'
import { ManejoContext } from '@/context/manejoContext'
import { useState } from 'react'
import Image from 'next/image'
import calendar from '../../public/calendar.svg'
import arrows from '../../public/arrows.svg'
import lupa from '../../public/lupa.svg'
import return_icon from '../../public/return.svg'

interface Props {
  datos: {
    id_viaje: string,
    destino: string,
    fecha_viaje: string,
    precio_puesto: number,
    imagen: string
  }[]
}

const FormFiltro: React.FC<Props> = ({datos}) => {

  const fechas = datos.map((viaje) => viaje.fecha_viaje)
  const precio = datos.map((viaje) => viaje.precio_puesto)
  const precioSinDuplicados = precio.filter((valor, indice) => precio.indexOf(valor) === indice)
  precioSinDuplicados.sort((a, b) => a - b)

  const {datosFiltrados, setFechaFiltro, fechaFiltro, setPrecioFiltro, precioFiltro} = useContext(ManejoContext)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    datosFiltrados(fechaFiltro, precioFiltro)
  }


  return (
    <form className='flex flex-col mx-auto sm:mx-0 items-center px-2 w-1/2 sm:w-full sm:flex-row md:w-3/6 bg-white gap-10 rounded-[3rem] shadow-md sm:px-10 py-7 mb-10' onSubmit={handleSubmit}>
      <div className='flex gap-10'>
        <div className='flex items-center justify-center'>
          <Image src={calendar} alt='img_calendar' width={40} height={40}/>
        </div>
        <div className='flex flex-col items-center font-semibold'>
          <label htmlFor='fecha'>Fecha</label>
          <select 
            className='appearance-none text-center cursor-pointer form_select' 
            name="fecha" 
            id='fecha' 
            onChange={(e) => setFechaFiltro(e.currentTarget.value)}
            value={fechaFiltro}
          >
            <option value="todas_fechas">Todas las fechas</option>
            {fechas.map((fecha) => (
              <option key={crypto.randomUUID()} value={fecha}>{fecha}</option>
            ))}
          </select>
        </div>
      </div>
      <div className='flex gap-10'>
        <div className='flex items-center justify-center'>
          <Image src={arrows} alt='imagen arrow' width={40} height={40}/>
        </div>
        <div className='flex flex-col items-center font-semibold'>
          <label htmlFor="precio">Precio</label>
          <select  
            className='appearance-none text-center cursor-pointer form_select ' 
            name="precio" 
            id='precio' 
            onChange={(e) => setPrecioFiltro(e.currentTarget.value)}
            value={precioFiltro}
          >
            <option value="todos_precios">Todos los precios</option>
            {precioSinDuplicados.map((precio) => (
              <option key={crypto.randomUUID()} value={precio}>{precio}</option>
            ))}
          </select>
        </div>
      </div>
      <button>
        <Image src={lupa} alt='imagen return' width={40} height={40}/> 
      </button>
    </form>
  )
}

export default FormFiltro