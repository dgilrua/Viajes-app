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
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password"
            id="password"
            name="password"
            placeholder="Escribe tu contraseña" 
            required
          />
        </div>
        <button>Iniciar sesión</button>
      </form>
    </div>
  )
}

export default FormLogin