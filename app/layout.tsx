import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wilfredo Paiz | Desarrollador de Software",
  description: "Sitio web portafolio de Wilfredo Paiz, desarrollador de software especializado en aplicaciones web. Actualmente con base en Valencia, España.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
          <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'