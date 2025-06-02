import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

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
        <ClerkProvider appearance={{ variables: { colorPrimary: '#fe5933' } }}>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
