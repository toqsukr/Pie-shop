import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Pirogami',
  description: 'The pie shop',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  )
}
