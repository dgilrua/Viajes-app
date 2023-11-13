import Layout from '@/components/Layout'
import React from 'react'
import register_image from '../../../public/register_image.png'
import Image from 'next/image'
import Form from '@/components/Form'

const RegisterPage = () => {
  return (
    <Layout>
      <section className='md:grid md:grid-cols-5'>
        <Image src={register_image} alt="register_image" className=' hidden md:inline-block md:w-full md:h-full md:col-span-2'/>
        <Form />
      </section>
    </Layout>
  )
}

export default RegisterPage