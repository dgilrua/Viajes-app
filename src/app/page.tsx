"use client"
import Layout from '@/components/Layout'
import {useSession} from 'next-auth/react'
import React from 'react'

const HomePage = () => {

  const {data: session, status} = useSession()

  console.log(session, status)

  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout> 
  )
}

export default HomePage