"use client"
import React from 'react'
import { useContext } from 'react'
import { ManejoContext } from '@/context/manejoContext'
import Layout from '@/components/Layout'
import Image from 'next/image'

const DetallesPage = () => {

  const {informacionViaje} = useContext(ManejoContext)
  const {id_viaje,
    destino,
    fecha_viaje,
    precio_puesto,
    imagen,
    hora_salida,
    hora_llegada,
    origen,
    puestos_disponibles,
    placa_chiva} = informacionViaje

  return (
    <Layout>
      <section className='w-3/4 mx-auto'>
        <div>
            <div>
              <button>Regresar</button>
              <h1>{destino}</h1>
            </div>
            <div>
              <Image src={`/${imagen}`} alt={`imagen ${imagen}`} width={500} height={500}/>
            </div>
        </div>
      <div>
        {id_viaje}
        {destino}
        {fecha_viaje}
        {precio_puesto}
        {imagen}
        {hora_salida}
        {hora_llegada}
        {origen}
        {puestos_disponibles}
        {placa_chiva}
      </div>
      </section>
    </Layout>
  )
}

export default DetallesPage