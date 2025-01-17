
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Infinite intelligence",
  description: "Create by Broti using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} ><Header/> {children} <Contacts/> <Footer/></body>
    </html>
  );
}
