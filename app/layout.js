import Navigation from './components/Navigation'
import './globals.css'
import { Anek_Latin } from 'next/font/google'

const roboto = Anek_Latin({
  weight: '500',
  subsets: ['latin'],
  style: 'normal',
})

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first Next App</title>
      </head>
      <body className={ roboto.className }>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
