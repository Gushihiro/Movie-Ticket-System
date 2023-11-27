import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './ui/navbar/navbar';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie Ticketing System',
  description: 'Mock movie ticketing system to simulate purchasing tickets for movies currently in theaters.',
}

export const navLinks = [
  "movies",
  "theaters",
  "concession"
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
