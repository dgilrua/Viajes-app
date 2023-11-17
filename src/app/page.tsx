"use client"
import Layout from '@/components/Layout'
import React from 'react'
import {Paseos} from '@/data/informacion_viajes'
import {useState, useContext, useEffect} from 'react'
import { ManejoContext } from '@/context/manejoContext'
import ViajeCard from '@/components/ViajeCard'
import FormFiltro from '@/components/FormFiltro'
import {motion} from 'framer-motion'

interface viaje {
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

const HomePage = () => {

  const {datos} = useContext(ManejoContext)

  return (
    <Layout>
      <>
        <section className='w-11/12 max-w-7xl my-0 mx-auto pt-14'>
          <h1 className='text-5xl font-semibold mb-10 text-center md:text-left'>LUGARES INCREÍBLES</h1>
          <div>
            <FormFiltro datos={Paseos}/>
          </div>
          <div>
            {
              Object.keys(datos).length === 0 ?
              <div className='pt-10 pb-20 sm:pb-44 md:pb-[29rem]'>
                <h1 className='text-4xl font-bold uppercase text-center text-secondary'>No hay viajes disponibles con estos parametros</h1>
              </div>:
              <ul className='md:grid md:grid-cols-3 gap-7 p-10'>
                {datos.map((viaje: viaje) => (
                  <ViajeCard 
                    key={viaje.id_viaje}
                    id_viaje={viaje.id_viaje}
                    destino={viaje.destino}
                    fecha_viaje={viaje.fecha_viaje}
                    precio_puesto={viaje.precio_puesto}
                    imagen={viaje.imagen}
                    lugar_salida={viaje.lugar_salida}
                    hora_salida={viaje.hora_salida}
                    hora_llegada={viaje.hora_llegada}
                    puestos_disponibles={viaje.puestos_disponibles}
                    placa_chiva={viaje.placa_chiva}
                  />
                ))}
              </ul>
            }
          </div>
        </section>
      </>
    </Layout> 
  )
}

export default HomePage