import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Email Service',
  description: 'Free Email Service API For Developers'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo_main.png"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
