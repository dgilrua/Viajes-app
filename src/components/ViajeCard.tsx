import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { ManejoContext } from '@/context/manejoContext'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'

interface Props  {
  id_viaje: string,
  destino: string,
  fecha_viaje: string,
  precio_puesto: number,
  imagen: string,
  hora_salida: string,
  hora_llegada: string,
  lugar_salida: string,
  puestos_disponibles: number
  placa_chiva: string
}

const ViajeCard: React.FC<Props> = ({id_viaje, destino, fecha_viaje, precio_puesto, imagen, hora_salida, hora_llegada, lugar_salida, puestos_disponibles, placa_chiva}) => {

  const {setInformacionViaje} = useContext(ManejoContext)

  const router = useRouter()

  const handleClick = () => {
    setInformacionViaje({
      id_viaje,
      destino,
      fecha_viaje,
      precio_puesto,
      imagen,
      hora_salida,
      hora_llegada,
      lugar_salida,
      puestos_disponibles,
      placa_chiva
    })
    router.push('/detalles')
  }

  return (
    <motion.li 
      className='bg-white flex flex-col w-96 rounded-md shadow-md mt-5 md:mt-0 mx-auto'
      variants={{hidden: {x: -10, opacity: 0}}}
    >
      <div>
        <Image src={`/${imagen}`} alt={`imagen ${imagen}`} width={400} height={400}
          className='inline-block object-cover w-96 h-96 rounded-md'
        />
      </div>
      <div className='px-5 my-5'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-bold'>{destino}</h2>
          <p className='text-slate-600 text-sm'>{fecha_viaje}</p>
        </div>
        <div className='flex justify-between mt-10'>
          <p className='font-bold text-xl'>${precio_puesto}</p>
          <button 
            className='px-6 bg-primary text-white font-semibold py-2 rounded-md hover:bg-secondary transition-all'
            onClick={handleClick}
          >Ver detalle</button>
        </div>
      </div>
    </motion.li>
  )
}

export default ViajeCard