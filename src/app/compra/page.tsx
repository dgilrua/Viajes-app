"use client"
import Layout from '@/components/Layout'
import { ManejoContext } from '@/context/manejoContext'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import sillas_imagen from '../../../public/sillas_imagen.png'

const CompraPage = () => {

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

  return (
    <Layout>
      <section className='py-10'> 
        <div className='w-2/3 mx-auto p-10 bg-contenedor rounded-xl shadow-md'>
          <div>
            <h1 className='text-3xl font-bold'>{destino}</h1>
            <div className='w-1/3 mt-10'>
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
                <p className='font-bold text-lg'>Cantidad de sillas</p>
                <input 
                  type="number" 
                  min={1} 
                  max={puestos_disponibles}
                  className='bg-contenedor text-text text-right font-bold'
                  value={1}
                />
              </div>
            </div>
            <div className='grid grid-cols-5 mt-10'>
              <div className='bg-contenedor_sillas rounded-xl p-2'>
                <Image src={sillas_imagen} className='mx-auto' alt='sillas' width={200} height={200} />
              </div>
              <div className='col-span-4'>

              </div>
            </div>
            <div className='flex justify-between mt-10'>
              <div className='w-1/2'>
                <p className='font-bold text-xl mb-5'>Elegir metodo de pago</p>
                <select name="" id=""
                  className='border-red-950 px-2 py-3 text-text w-2/3'
                >
                  <option value="">Seleccionar medio de pago</option>
                  <option value="">Nequi</option>
                  <option value="">Daviplata</option>
                  <option value="">Bancolombia</option>
                </select>
              </div>
              <div className='flex gap-10 items-end'>
                <button 
                  className='px-7 py-3 h-2/3 rounded-md font-bold text-xl text-white bg-primary'
                >Cancelar</button>
                <button 
                  className='px-7 py-3 h-2/3 rounded-md font-bold text-xl text-white bg-secondary'
                  onClick={() => router.push('/compra')}
                >Confirmar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CompraPage