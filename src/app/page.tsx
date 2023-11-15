"use client"
import Layout from '@/components/Layout'
import React from 'react'
import {useState, useContext, useEffect} from 'react'
import { ManejoContext } from '@/context/manejoContext'
import {Paseos} from '@/data/informacion_viajes'
import ViajeCard from '@/components/ViajeCard'
import FormFiltro from '@/components/FormFiltro'

const HomePage = () => {

  const [datos, setDatos] = useState(Paseos)

  return (
    <Layout>
      <>
        <section className='w-11/12 max-w-7xl my-0 mx-auto pt-14'>
          <h1 className='text-5xl font-semibold'>LUGARES INCREÍBLES</h1>
          <div>
            <FormFiltro datos={datos}/>
          </div>
          <div className='md:grid md:grid-cols-3 gap-7 p-10'>
            {datos.map((viaje) => (
              <ViajeCard 
                key={viaje.id_viaje}
                id_viaje={viaje.id_viaje}
                destino={viaje.destino}
                fecha_viaje={viaje.fecha_viaje}
                precio_puesto={viaje.precio_puesto}
                imagen={viaje.imagen}
              />
            ))}
          </div>
        </section>
      </>
    </Layout> 
  )
}

export default HomePage