import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {ManejoProvider} from '@/context/manejoContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChivasAPP',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ManejoProvider>
            {children}
        </ManejoProvider>
      </body>
    </html>
  )
}
