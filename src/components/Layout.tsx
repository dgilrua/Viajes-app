"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.svg'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import usuario_logo from '../../public/usuario_logo.svg'

interface MyProps {
  children: JSX.Element
}

const Layout: React.FC<MyProps> = ({children}) => {
  
  const pathname = usePathname()
  const {status} = useSession()
  return (
    <>
      <header className=' md:h-36 md:flex w-full justify-between pb-10 pt-0 px-10 md:p-10 items-center bg-primary'>
        <div className='flex md:flex-row flex-col items-center mb-10 md:mb-0'>
          <Image src={logo} alt="logo_tienda" height={150} className='mb-5'/>
          <Link className=' transition-all text-white hover:text-gray-300 text-xl font-bold px-7 w-2/3 text-center md:w-auto rounded-md uppercase' href='/'>Inicio</Link>
          {status === 'authenticated' && <Link className=' transition-all text-white hover:text-gray-300 text-xl font-bold px-7 w-2/3 text-center md:w-auto rounded-md uppercase' href='/historial'>Historial de viajes</Link>}
        </div>
        <div className={`${status === "unauthenticated" ? 'md:w-3/12 md:mr-20' : "md:w-2/12 md:mr-20"}`}>
          <nav className='flex md:flex-row flex-col gap-5 md:justify-between w-full md:w-1/2 items-center'>
            {status === 'unauthenticated' ? (
              <>
                <Link className={`hover:bg-secondary_hover transition-all text-white py-3 font-semibold px-7 w-2/3 text-center md:w-auto rounded-md uppercase ${pathname === '/register' ? 'bg-secondary_active' : 'bg-secondary'}`} href='/register'>Registrarse</Link>
                <Link className={`hover:bg-secondary_hover transition-all text-white ${pathname === '/login' ? 'bg-secondary_active' : 'bg-secondary'}  py-3 font-semibold px-7 w-2/3 text-center md:w-auto rounded-md uppercase`} href='/login'>Ingresar</Link>
              </>
            ) : (
              <button onClick={() => signOut()}>
                <Image src={usuario_logo} alt='usuario_logo' width={65} height={65}/>
              </button>
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