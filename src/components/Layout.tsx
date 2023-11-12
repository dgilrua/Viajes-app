"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.svg'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'

interface MyProps {
  children: JSX.Element
}

const Layout: React.FC<MyProps> = ({children}) => {
  
  const pathname = usePathname()
  const {status} = useSession()
  console.log(status)
  return (
    <>
      <header className=' md:h-36 md:flex w-full justify-between pb-10 pt-0 px-10 md:p-10 items-center bg-primary'>
        <div className='flex md:flex-row flex-col items-center mb-10 md:mb-0'>
          <Image src={logo} alt="logo_tienda" height={150} className='mb-5'/>
          <h2 className=' ml-5 text-3xl font-bold text-white'>
            {pathname === '/' ? 'Inicio' : pathname === '/register' ? 'Registro' : 'Ingresar'}
          </h2>
        </div>
        <div className='md:w-3/12 md:mr-32'>
          <nav className='flex md:flex-row flex-col gap-5 md:justify-between w-full md:w-1/2 items-center'>
            <Link className='text-white bg-secondary py-3 font-semibold px-7 w-2/3 text-center md:w-auto rounded-md uppercase' href='/'>Inicio</Link>
            {status === 'unauthenticated' ? (
              <>
                <Link className='text-white bg-secondary py-3 font-semibold px-7 w-2/3 text-center md:w-auto rounded-md uppercase' href='/register'>Registrarse</Link>
                <Link className='text-white bg-secondary py-3 font-semibold px-7 w-2/3 text-center md:w-auto rounded-md uppercase' href='/login'>Ingresar</Link>
              </>
            ) : (
              <button className='bg-white' onClick={() => signOut()}>Cerrar sesion</button>
            )} 
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout