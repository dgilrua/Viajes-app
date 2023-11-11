"use client"
import React from 'react'
import { useState } from 'react'
import axios, { AxiosError } from 'axios'

const Form = () => {

  const [error, setError] = useState("")

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
      const response = await axios.post('/api/auth/singup', {
        "fullName": formData.get('nombres'), 
        "lastName": formData.get('apellidos'),
        "email": formData.get('correo'), 
        "password": formData.get('password'), 
        "documentType": formData.get('tipo_documento'), 
        "documentNumber": formData.get('numero_documento'), 
        "bornDate": formData.get('fecha_nacimiento')
      })
      console.log(response.data)
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
    <div className="md:col-span-3">
      {
        error && 
        <p className="text-red-500">{error}</p>
      }
      <form  onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombres">Nombres</label>
          <input 
            type="text"
            name="nombres"
            id="nombres"
            placeholder="Escribe tus nombres" 
            required
          />
        </div>

        <div>
          <label htmlFor="apellidos">Apellidos</label>
          <input 
            type="text"
            id="apellidos"
            name="apellidos"
            placeholder="Escribe tus apellidos" 
            required
          />
        </div>

        <div>
          <label htmlFor="correo">Correo electrónico</label>
          <input 
            type="email"
            id="correo"
            name="correo"
            placeholder="Escribe tu correo electrónico" 
            required
          />
        </div>

        <div>
          <label htmlFor="confirmar_correo">Confirme su correo electrónico</label>
          <input 
            type="email"
            id="confirmar_correo"
            name="correo_confirm"
            placeholder="Escribe de nuevo tu correo electrónico" 
            required
          />
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password"
            id="password"
            name="password"
            placeholder="Escribe tu contraseña" 
            required
          />
        </div>

        <div>
          <label htmlFor="confirmar_password">Repetir contraseña</label>
          <input 
            type="password"
            id="confirmar_password"
            name="password_confirm"
            placeholder="Escribe de nuevo tu contraseña" 
            required
          />
        </div>

        <div>
          <label htmlFor="tipo_documento">Tipo de documento</label>
          <select name="tipo_documento" defaultValue={""} id="tipo_documento" required>
            <option value="" disabled>
              -- Selecciona una opcion --
            </option>
            <option value="Tarjeta de identidad">Tarjeta de identidad</option>
            <option value="Cedula de ciudadania">Cedula de ciudadania</option>
            <option value="Cedula de extrangeria">Cedula de extrangeria</option>
          </select>
        </div>
        <div>
          <label htmlFor="numero_documento">Número de documento</label>
          <input 
            type="number"
            id="numero_documento"
            min={0} 
            name="numero_documento"
            placeholder="Escribe tu número de documento"
            required
          />
        </div>

        <div>
          <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
          <input 
            id="fecha_nacimiento"
            type="date"
            name="fecha_nacimiento"
            required
          />
        </div>
        <button>registrarme</button>
      </form>
    </div>
  );
};

export default Form