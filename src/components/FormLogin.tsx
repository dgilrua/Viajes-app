"use client"
import {useRouter} from 'next/navigation'
import { useState, useContext } from 'react'
import axios, {AxiosError} from 'axios'
import { ManejoContext } from '@/context/manejoContext'

const FormLogin = () => {

  const router = useRouter()
  const [error, setError] = useState("")
  const {logged, setLogged, setUser, user} = useContext(ManejoContext)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    try {
      const signinResponse = await axios.post('/api/auth/login', {
        "email": formData.get('correo'), 
        "password": formData.get('password'), 
      })
      setLogged("authenticated")
      setUser(signinResponse.data)
      sessionStorage.setItem('user', JSON.stringify(signinResponse.data))
      sessionStorage.setItem('logged', "authenticated")
      router.push('/')

    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message)
        setTimeout(() => {
          setError("")
        }, 3000)
      }
    }
    
  }

  return (
    <div className='md:col-span-3 md:mt-44 p-10'>
      {error && <p>{error}</p>}
      <form 
        onSubmit={handleSubmit}
        className='w-[95%] md:w-1/2 mx-auto bg-white p-10 pt-0 rounded-md shadow-md'
      >
        <h1 className='font-bold text-2xl pt-14 mb-10 uppercase'>Ingrese sus credenciales</h1>
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
        <button className='py-3 text-white font-bold uppercase rounded-md w-full bg-secondary mt-5 hover:bg-secondary_hover transition-all'>Iniciar sesión</button>
      </form>
    </div>
  )
}

export default FormLogin