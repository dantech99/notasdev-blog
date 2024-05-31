import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/ui/navbar';
import { GeistSans } from 'geist/font/sans';
const inter = Inter({ subsets: ['latin'] });

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
    <html lang="es" className={GeistSans.className}>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col py-8  mx-auto md:max-w-screen-xl  max-w-screen-sm p-4 ">
          <header>
            <NavBar />
          </header>

          {/* main content  */}
          <main className="flex w-full flex-col gap-20 ">{children}</main>
        </div>
      </body>
    </html>
  );
}
