"use client"
import React from 'react'
import { useState, useContext } from 'react'
import axios, { AxiosError } from 'axios'
import {useRouter} from 'next/navigation'
import { ManejoContext } from '@/context/manejoContext'

const Form = () => {

  const [error, setError] = useState("")
  const router = useRouter()
  const {logged, setLogged, setUser, user} = useContext(ManejoContext)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    if(formData.get('correo') !== formData.get('correo_confirm')) {
      setError("Los correos deben ser iguales")
      setTimeout(() => {
        setError("")
      }, 3000)
      return
    }

    if(formData.get('password') !== formData.get('password_confirm')) {
      setError("Las contraseñas deben ser iguales")
      setTimeout(() => {
        setError("")
      }, 3000)
      return
    }

    try {
      const signupResponse = await axios.post('/api/auth/singup', {
        "fullName": formData.get('nombres'), 
        "lastName": formData.get('apellidos'),
        "email": formData.get('correo'), 
        "password": formData.get('password'), 
        "documentType": formData.get('tipo_documento'), 
        "documentNumber": formData.get('numero_documento'), 
        "bornDate": formData.get('fecha_nacimiento')
      })
      
      setLogged("authenticated")
      setUser(signupResponse.data)
      router.push('/')
      
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data.message === "El usuario ya existe") {
          setError(error.response.data.message)
        } else {
          console.log(error.response?.data.message)
        }
        setTimeout(() => {
          setError("")
        }, 3000)
      }
    }
  } 

  return (
    <div className="md:col-span-3 mb-10">
      {
        error && 
        <p className="text-red-500">{error}</p>
      }
      <form  
        onSubmit={handleSubmit}
        className='w-1/2 my-0 mx-auto'
      >
        <h1 className='font-bold text-center text-2xl my-10'>INGRESE SUS DATOS PERSONALES</h1>
        <div>
          <label className='block font-semibold mb-2' htmlFor="nombres">Nombres</label>
          <input 
            className='border-2 border-gray-200 w-full p-3 rounded-sm mb-5 text-black'
            type="text"
            name="nombres"
            id="nombres"
            placeholder="Escribe tus nombres" 
            required
          />
        </div>

        <div>
          <label className='block font-semibold mb-2' htmlFor="apellidos">Apellidos</label>
          <input 
            className='border-2 border-gray-200 w-full p-3 rounded-sm mb-5 text-black'
            type="text"
            id="apellidos"
            name="apellidos"
            placeholder="Escribe tus apellidos" 
            required
          />
        </div>

        <div>
          <label className='block font-semibold mb-2' htmlFor="correo">Correo electrónico</label>
          <input 
            className='border-2 border-gray-200 w-full p-3 rounded-sm mb-5 text-black'
            type="email"
            id="correo"
            name="correo"
            placeholder="Escribe tu correo electrónico" 
            required
          />
        </div>

        <div>
          <label className='block font-semibold mb-2' htmlFor="confirmar_correo">Confirme su correo electrónico</label>
          <input 
            className='border-2 border-gray-200 w-full p-3 rounded-sm mb-5 text-black'
            type="email"
            id="confirmar_correo"
            name="correo_confirm"
            placeholder="Escribe de nuevo tu correo electrónico" 
            required
          />
        </div>

        <div>
          <label className='block font-semibold mb-2' htmlFor="password">Contraseña</label>
          <input 
            className='border-2 border-gray-200 w-full p-3 rounded-sm mb-5 text-black'
            type="password"
            id="password"
            name="password"
            placeholder="Escribe tu contraseña" 
            required
          />
        </div>

        <div>
          <label className='block font-semibold mb-2' htmlFor="confirmar_password">Repetir contraseña</label>
          <input 
            className='border-2 border-gray-200 w-full p-3 rounded-sm mb-5 text-black'
            type="password"
            id="confirmar_password"
            name="password_confirm"
            placeholder="Escribe de nuevo tu contraseña" 
            required
          />
        </div>

        <div>
          <label className='block font-semibold mb-2' htmlFor="tipo_documento">Tipo de documento</label>
          <select 
            name="tipo_documento" 
            id="tipo_documento" 
            required
            className='border-2 border-gray-200 w-full p-3 rounded-sm mb-5 text-black'
            placeholder='Seleccione su tipo de documento'
            defaultValue={""}
          >
            <option value="" disabled>
              -- Selecciona una opcion --
            </option>
            <option value="Tarjeta de identidad">Tarjeta de identidad</option>
            <option value="Cedula de ciudadania">Cedula de ciudadania</option>
            <option value="Cedula de extrangeria">Cedula de extrangeria</option>
          </select>
        </div>
        <div>
          <label className='block font-semibold mb-2' htmlFor="numero_documento">Número de documento</label>
          <input 
            className='border-2 border-gray-200 w-full p-3 rounded-sm mb-5 text-black'
            type="number"
            id="numero_documento"
            min={0} 
            name="numero_documento"
            placeholder="Escribe tu número de documento"
            required
          />
        </div>

        <div>
          <label className='block font-semibold mb-2' htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
          <input 
            className='border-2 border-gray-200 w-full p-3 rounded-sm mb-5 text-black'
            id="fecha_nacimiento"
            type="text"
            name="fecha_nacimiento"
            placeholder='DD/MM/AAAA'
            onFocus={(e) => (e.currentTarget.type = "date")}
            required
          />
        </div>
        <button className='py-3 text-white font-bold uppercase rounded-md w-full bg-secondary mt-5 hover:bg-secondary_hover transition-all'>registrarme</button>
      </form>
    </div>
  );
};

export default Form