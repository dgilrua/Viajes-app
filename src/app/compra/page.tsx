"use client"
import Layout from '@/components/Layout'
import { ManejoContext } from '@/context/manejoContext'
import { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import sillas_imagen from '../../../public/sillas_imagen.png'
import silla_ocupada from '../../../public/silla_ocupada.png'
import silla_disponible from '../../../public/silla_disponible.png'

const CompraPage = () => {

  const {informacionViaje} = useContext(ManejoContext)
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
  const [cantidadSillas, setCantidadSillas] = useState(1)
  const [aviso, setAviso] = useState("")

  const manejoCantidadSillas = (e: React.ChangeEvent<HTMLInputElement>) => { 
    if (Number(e.target.value) > puestos_disponibles) {
      setCantidadSillas(puestos_disponibles)
  
    } else if (Number(e.target.value) < 1) {
      setCantidadSillas(1)
      
    } else {
      setCantidadSillas(Number(e.target.value))
    }
  }

  const handleComprar = () => {
    const datos = {imagen, destino, fecha_viaje, estado: "compra", id: crypto.randomUUID()}
    localStorage.setItem('paseosComprados', JSON.stringify([datos, ...JSON.parse(localStorage.getItem('paseosComprados') || '[datos]')]))
    setAviso("Compra exitosa")
    setTimeout(() => {
      router.push('/')
      setAviso("")
    }, 2000)
  }

  return (
    <Layout>
      <section className='py-10'> 
        <div className='w-[98%] md:w-2/3 mx-auto p-10 bg-contenedor rounded-xl shadow-md'>
          <div>
            <div>
              <h1 className='text-3xl font-bold'>{destino}</h1>
              {aviso && <p className='text-secondary text-3xl font-bold'>{aviso}</p>}
            </div>
            <div className='md:w-1/3 mt-10'>
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
                  value={cantidadSillas}
                  onChange={manejoCantidadSillas}
                />
              </div>
            </div>
            <div className='md:grid md:grid-cols-5 mt-10'>
              <div className='bg-contenedor_sillas rounded-xl p-2'>
                <Image src={sillas_imagen} className='mx-auto' alt='sillas' width={200} height={200} />
              </div>
              <div className='col-span-4 px-10'>
                <div className='md:grid md:grid-cols-3'>
                  <div className='mt-10 md:mt-0'>
                    <div className='flex justify-around items-center'>
                      <Image src={silla_ocupada} alt='silla ocupada' width={50} height={50} />
                      <p className='font-bold text-xl text-text'>Silla ocupada</p>
                    </div>
                    <div className='flex justify-around items-center mt-10'>
                      <Image src={silla_disponible} alt='silla ocupada' width={50} height={50} />
                      <p className='font-bold text-xl text-text'>Silla disponible</p>
                    </div>
                  </div>
                  <div className='md:px-10 col-span-2'>
                    <h3 className='font-bold text-3xl mb-10 mt-10 md:mt-0'>Sillas seleccionadas</h3>
                    <div className='flex justify-between'>
                      <p className='text-2xl font-bold'>Cantidad</p>
                      <p className='text-2xl font-bold text-text mr-0 md:mr-32'>{cantidadSillas}</p>
                    </div>
                    <div className='flex justify-between mt-5'>
                      <p className='text-2xl font-bold'>Precio</p>
                      <p className='text-2xl font-bold text-text mr-0 md:mr-32'>$ {precio_puesto*cantidadSillas}</p>
                    </div>
                  </div>
                </div>
                <div className='mt-10 font-bold text-lg md:w-1/2 md:ml-20 ml-0'>
                  <p>Si el viaje lo realizará junto a un menor de edad, debe agregar un permiso firmado por los acudientes del menor, donde informe que el menor está autorizado para hacer el viaje</p>
                  <button 
                    className='px-7 py-3 h-2/3 rounded-md font-bold text-xl text-white bg-secondary mt-10'
                  >Adjuntar archivos</button>
                </div>
              </div>  
            </div>
            <div className='md:flex md:justify-between mt-10'>
              <div className='md:w-1/2'>
                <p className='font-bold text-xl mb-5'>Elegir metodo de pago</p>
                <select name="" id=""
                  className='select_form px-2 py-3 text-text w-full md:w-2/3'
                >
                  <option value="">Seleccionar medio de pago</option>
                  <option value="">Nequi</option>
                  <option value="">Daviplata</option>
                  <option value="">Bancolombia</option>
                </select>
              </div>
              <div className='flex gap-10 items-end mt-10 md:mt-0'>
                <button 
                  className='px-7 py-3 h-2/3 rounded-md font-bold text-xl text-white bg-primary'
                  onClick={() => router.back()}
                >Cancelar</button>
                <button 
                  className='px-7 py-3 h-2/3 rounded-md font-bold text-xl text-white bg-secondary'
                  onClick={handleComprar}
                >Confirmar compra</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CompraPage