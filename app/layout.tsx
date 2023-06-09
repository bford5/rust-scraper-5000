import './globals.css'

import {getServerSession} from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

import { Ubuntu } from 'next/font/google'

import Hydrate from '@/utils/Hydrate'

import Navigation from './components/navigation'
import Footer from './components/footer'

// ----xxxx----

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],


})

export const metadata = {
  title: 'rust scraper project',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // fetch user info
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <html lang="en">
      <body className={`${ubuntu.className}`}>
        <Hydrate>
          {/* having ? on session below stops trying to access .user IF session returns null */}
          <Navigation user={session?.user} expires={session?.expires as string}/>
          <main>{children}</main>
          <Footer/>
        </Hydrate>
      </body>
    </html>
  )
}
