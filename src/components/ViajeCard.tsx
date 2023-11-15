import Image from 'next/image'
import React from 'react'

interface Props  {
  id_viaje: string,
  destino: string,
  fecha_viaje: string,
  precio_puesto: number,
  imagen: string
}

const ViajeCard: React.FC<Props> = ({id_viaje, destino, fecha_viaje, precio_puesto, imagen}) => {
  return (
    <div className='bg-white flex flex-col w-96 rounded-md'>
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
          <button className='px-6 bg-primary text-white font-semibold py-2 rounded-md'>Ver detalle</button>
        </div>
      </div>
    </div>
  )
}

export default ViajeCard