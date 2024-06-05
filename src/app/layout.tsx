import type { Metadata } from 'next';
import {ThemeProvider} from 'next-themes';
import './globals.css';
import NavBar from '@/components/navbar';
import { GeistSans } from 'geist/font/sans';


export const metadata: Metadata = {
  title: 'Notasdev 📑',
  description: 'Comparto articulos sobre tecnologia y desarrollo de software',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="es" className={GeistSans.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
        <div className='dark:bg-gradient-to-b dark:from-transparent dark:to-[#000407] dark:bg-[#0E1629] dark:text-white'>
          <div className="flex min-h-screen flex-col py-8  mx-auto md:max-w-screen-xl  max-w-screen-sm p-4 ">
          <header>
            <NavBar />
          </header>

          {/* main content  */}
          <main className="flex w-full flex-col gap-20 ">{children}</main>
        </div>
        </div>
        </ThemeProvider>
        
      </body>
    </html>
    
  );
}
