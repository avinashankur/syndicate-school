import './globals.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Syndicate National School',
  description: 'Best Highschool in New Delhi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
