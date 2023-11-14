"use client"
import {signIn} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import { useState } from 'react'

const FormLogin = () => {

  const router = useRouter()
  const [error, setError] = useState("")
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const response = await signIn('credentials', {
      email: formData.get('correo'),
      password: formData.get('password'),
      redirect: false
    })

    console.log(response)

    if (!response?.ok) {
      setError("Las credenciales son incorrectas")
      setTimeout(() => {
        setError("")
      }, 3000)
      return
    }

    if (response?.ok) {
      router.push('/')
    }
  }

  return (
    <div className='md:col-span-3 md:mt-44'>
      {error && <p>{error}</p>}
      <form 
        onSubmit={handleSubmit}
        className='w-1/2 mx-auto'
      >
        <h1 className='font-bold text-2xl mt-20 mb-10 uppercase'>Ingrese sus credenciales</h1>
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