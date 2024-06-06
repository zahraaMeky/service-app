import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
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
