import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wilfredo Paiz | Software Developer",
  description: "Portfolio website for Wilfredo Paiz, a software developer specializing in modern web applications.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
          <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'