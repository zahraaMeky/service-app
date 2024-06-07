import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Outfit } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Outfit({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: "Home Service App",
  description: "full-stack home service application built with Next.js, React.js, Hygraph (formerly GraphCMS), and Tailwind CSS. The app is designed to connect homeowners with local service providers for various home maintenance and improvement needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
    <body>
      <Navbar/>
      <main className="relative overflow-hidden">
        {children}
      </main>
      {/* <Footer/> */}
    </body>
  </html>
  );
}
