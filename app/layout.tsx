import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

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
    <html lang="en" className={`${poppins.variable}`}>
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
