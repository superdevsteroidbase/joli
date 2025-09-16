import type { Metadata } from 'next';

import './globals.css'
import { Toaster } from "react-hot-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Joli Trips',
  description: 'Your go-to travel partner for affordable and unforgettable journeys!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          <Toaster position="bottom-center" />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
