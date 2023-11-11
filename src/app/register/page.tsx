import Layout from '@/components/Layout'
import React from 'react'
import register_image from '../../../public/register_image.png'
import Image from 'next/image'
import Form from '@/components/Form'

const RegisterPage = () => {
  return (
    <Layout>
      <section className=' md:grid md:grid-cols-5'>
        <Image src={register_image} alt="register_image" className=' hidden md:inline-block w-full h-1/2 md:col-span-2 md:h-screen'/>
        <Form />
      </section>
    </Layout>
  )
}

export default RegisterPage