import type { Metadata } from "next";
import { Bricolage_Grotesque,Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolage = Inter({
  variable: "--font-bricolage",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${bricolage.variable} antialiased`} >
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
