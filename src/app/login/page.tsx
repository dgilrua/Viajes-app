import React from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import FormLogin from '@/components/FormLogin'
import login_image from '../../../public/login_image.png'

const LoginPage = () => {
  return (
    <Layout>
      <section className='md:grid md:grid-cols-5'>
        <Image src={login_image} alt="register_image" className=' hidden md:inline-block md:w-full md:h-screen md:col-span-2'/>
        <FormLogin />
      </section>
    </Layout>
  )
}

export default LoginPage