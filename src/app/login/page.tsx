import React from 'react'
import Layout from '@/components/Layout'
import FormLogin from '@/components/FormLogin'

const LoginPage = () => {
  return (
    <Layout>
      <section>
        <div>
          <h1>Login Page</h1>          
        </div>
        <div>
          <FormLogin />
        </div>
      </section>
    </Layout>
  )
}

export default LoginPage