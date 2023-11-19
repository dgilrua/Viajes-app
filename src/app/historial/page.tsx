"use client"
import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import { ManejoContext } from '@/context/manejoContext'
import { useContext } from 'react'
import Image from 'next/image'
const HistorialPage = () => {

  //const {paseosComprados} = useContext(ManejoContext)

  const paseosComprados = JSON.parse(localStorage.getItem('paseosComprados') || '[]')

  return (
    <Layout>
      <div className='w-2/3 mx-auto py-[130px]'>
        <h1 className='text-4xl font-bold mb-10'>Historial de compras</h1>
        <ul className='md:grid md:grid-cols-3 gap-7 p-10'>
        {
          paseosComprados.map((paseo:any) => (
            <li key={paseo.id}
              className='bg-white flex flex-col w-96 rounded-md shadow-md mt-5 md:mt-0'
            >
              <div>
                <Image src={`/${paseo.imagen}`} alt={`imagen ${paseo.imagen}`} width={400} height={400}
                  className='inline-block object-cover w-96 h-96 rounded-md'
                />
              </div>
              <div className='px-5 my-5'>
                <div className='flex justify-between'>
                  <h2 className='text-2xl font-bold'>{paseo.destino}</h2>
                  <p className='text-slate-600 text-sm'>{paseo.fecha_viaje}</p>
                </div>
                <div className='flex justify-between mt-10'>
                <p className='font-bold text-xl'>{paseo.estado}</p>
                <button 
                  className='px-6 bg-primary text-white font-semibold py-2 rounded-md hover:bg-secondary transition-all'
                >Cancelar</button>
              </div>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
    </Layout>
  )
}

export default HistorialPage