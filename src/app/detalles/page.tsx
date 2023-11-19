"use client"
import React from 'react'
import { useContext } from 'react'
import { ManejoContext } from '@/context/manejoContext'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { useState } from 'react'
import reeturn_icon from '../../../public/return.svg'
import { useRouter } from 'next/navigation'

const DetallesPage = () => {

  const {informacionViaje, logged} = useContext(ManejoContext)
  const {id_viaje,
    destino,
    fecha_viaje,
    precio_puesto,
    imagen,
    hora_salida,
    hora_llegada,
    lugar_salida,
    puestos_disponibles,
    placa_chiva} = informacionViaje
  const router = useRouter()
  const [aviso, setAviso] = useState("")

  const handleReservar = () => {
    const datos = {imagen, destino, fecha_viaje, estado: "reservado", id: crypto.randomUUID()}
    localStorage.setItem('paseosReservados', JSON.stringify([datos, ...JSON.parse(localStorage.getItem('paseosReservados') || '[]')]))
    setAviso("Reserva exitosa")
    setTimeout(() => {
      router.push('/')
    setAviso("")
    }, 2000)
  }

  return (
    <Layout>
      <section className='w-3/4 mx-auto md:grid md:grid-cols-2 py-20'>
        <div>
            <div className='flex items-center gap-10 mb-10'>
              <button onClick={() => router.push('/')}>
                <Image src={reeturn_icon} alt='return_icon' width={50} height={50}/>
              </button>
              <h1 className='text-4xl font-bold'>{destino}</h1>
            </div>
            <div>
              <Image 
                src={`/${imagen}`} alt={`imagen ${imagen}`} width={500} height={500}
                className='sm:w-[700px] object-cover sm:h-[600px] rounded-md'
              />
            </div>
        </div>
        <div className='p-16'>
          <h2 className='font-bold text-2xl text-center uppercase'>Informacion del viaje</h2>
          <div className='mt-10 md:mt-20 md:p-10'>
            <div className='mt-3 flex justify-between items-center'>
              <p className='font-bold text-lg'>Fecha</p>
              <p className='text-text font-bold'>{fecha_viaje}</p>
            </div>
            <div className='mt-3 flex justify-between items-center'>
              <p className='font-bold text-lg'>Hora de salida</p>
              <p className='text-text font-bold'>{hora_salida}</p>
            </div>
            <div className='mt-3 flex justify-between items-center'>
              <p className='font-bold text-lg'>Hora de llegada</p>
              <p className='text-text font-bold'>{hora_llegada}</p>
            </div>
            <div className='mt-3 flex justify-between items-center'>
              <p className='font-bold text-lg'>Origen</p>
              <p className='text-text font-bold'>{lugar_salida}</p>
            </div>
            <div className='mt-3 flex justify-between items-center'>
              <p className='font-bold text-lg'>Puestos disponibles</p>
              <p className='text-text font-bold'>{puestos_disponibles}</p>
            </div>
            <div className='mt-3 flex justify-between items-center'>
              <p className='font-bold text-lg'>Chiva</p>
              <p className='text-text font-bold'>{placa_chiva}</p>
            </div>
            <div className='flex justify-between items-center mt-10'>
            <p className='font-bold text-2xl'>${precio_puesto}</p>
            {
              logged === 'authenticated' ? 
              <>
                <button 
                  className='px-7 py-3 rounded-md font-bold text-xl text-white bg-secondary'
                  onClick={handleReservar}
                >Reservar</button>
                <button 
                  className='px-7 py-3 rounded-md font-bold text-xl text-white bg-primary'
                  onClick={() => router.push('/compra')}
                >Comprar</button>
              </> : 
              <button 
                className='px-7 py-3 rounded-md font-bold text-xl text-white bg-secondary'
                onClick={() => router.push('/login')}
              >Inicia sesion</button>
            }
          </div>
          {aviso && <p className='text-secondary text-3xl font-bold text-center mt-10'>{aviso}</p>}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DetallesPage