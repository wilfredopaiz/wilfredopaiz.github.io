"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`${language === "en" ? "bg-gray-800" : ""} text-gray-300 hover:text-white focus:text-white cursor-pointer flex items-center gap-2`}
        >
          <div className="relative w-5 h-3.5 overflow-hidden rounded">
            <Image
              src="/uk.svg?height=35&width=50"
              alt="UK Flag"
              width={50}
              height={35}
              className="object-cover"
            />
          </div>
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("es")}
          className={`${language === "es" ? "bg-gray-800" : ""} text-gray-300 hover:text-white focus:text-white cursor-pointer flex items-center gap-2`}
        >
          <div className="relative w-5 h-3.5 overflow-hidden rounded">
            <Image
              src="/es.svg?height=35&width=50"
              alt="Spain Flag"
              width={50}
              height={35}
              className="object-cover"
            />
          </div>
          <span>Español</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

