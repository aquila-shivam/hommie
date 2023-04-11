import getCurrentUser from './actions/getCurrentUser';
import ClientOnly from './components/ClientOnly';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import ToasterProvider from './components/providers/ToasterProvider';
import './globals.css'
import {Nunito} from 'next/font/google'

export const metadata = {
  title: 'Hommie',
  description: '',
}


const font = Nunito({
  subsets:['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <ToasterProvider/>
        <LoginModal/>
        <RegisterModal/>
        <Navbar currentUser = {currentUser}/>
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
