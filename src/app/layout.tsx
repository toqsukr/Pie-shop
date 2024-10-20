import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Pirogami',
  description: 'The pie shop',
}

const roboto = Roboto({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  )
}
