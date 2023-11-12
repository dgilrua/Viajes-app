"use client"
import {SessionProvider} from 'next-auth/react'
interface Props {
  children: React.ReactNode
}

const Providers: React.FC<Props> = ({children}: Props) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Providers