"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "./language-switcher"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Function to handle hash navigation
  const handleHashNavigation = (e, hash) => {
    e.preventDefault()

    // If we're not on the home page, navigate to home first
    if (pathname !== "/") {
      router.push("/")
      // Set a timeout to allow the navigation to complete
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 300)
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById(hash.replace("#", ""))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-black/80 backdrop-blur-md shadow-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            Wilfredo Paiz
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 items-center">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white transition-all duration-300"
              onClick={(e) => handleHashNavigation(e, "#about")}
            >
              {t("nav.about")}
            </Button>
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white transition-all duration-300"
              onClick={(e) => handleHashNavigation(e, "#skills")}
            >
              {t("nav.skills")}
            </Button>
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white transition-all duration-300"
              onClick={(e) => handleHashNavigation(e, "#projects")}
            >
              {t("nav.projects")}
            </Button>
            <Link href="/cv">
              <Button
                variant="ghost"
                className={`text-gray-300 hover:text-white transition-all duration-300 ${
                  pathname === "/cv" ? "bg-gray-800/50" : ""
                }`}
              >
                {t("nav.cv")}
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white transition-all duration-300"
              onClick={(e) => handleHashNavigation(e, "#contact")}
            >
              {t("nav.contact")}
            </Button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-300">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gray-950/95 backdrop-blur-md border-gray-800">
                <div className="flex flex-col gap-6 mt-10">
                  <Button
                    variant="link"
                    className="text-xl font-medium text-gray-200 hover:text-white transition-colors justify-start p-0"
                    onClick={(e) => {
                      handleHashNavigation(e, "#about")
                      document.querySelector("[data-radix-collection-item]")?.click() // Close sheet
                    }}
                  >
                    {t("nav.about")}
                  </Button>
                  <Button
                    variant="link"
                    className="text-xl font-medium text-gray-200 hover:text-white transition-colors justify-start p-0"
                    onClick={(e) => {
                      handleHashNavigation(e, "#skills")
                      document.querySelector("[data-radix-collection-item]")?.click() // Close sheet
                    }}
                  >
                    {t("nav.skills")}
                  </Button>
                  <Button
                    variant="link"
                    className="text-xl font-medium text-gray-200 hover:text-white transition-colors justify-start p-0"
                    onClick={(e) => {
                      handleHashNavigation(e, "#projects")
                      document.querySelector("[data-radix-collection-item]")?.click() // Close sheet
                    }}
                  >
                    {t("nav.projects")}
                  </Button>
                  <Link
                    href="/projects"
                    className="text-xl font-medium text-gray-200 hover:text-white transition-colors"
                    onClick={() => document.querySelector("[data-radix-collection-item]")?.click()} // Close sheet
                  >
                    {t("nav.allProjects")}
                  </Link>
                  <Link
                    href="/cv"
                    className={`text-xl font-medium text-gray-200 hover:text-white transition-colors ${
                      pathname === "/cv" ? "text-white" : ""
                    }`}
                    onClick={() => document.querySelector("[data-radix-collection-item]")?.click()} // Close sheet
                  >
                    {t("nav.cv")}
                  </Link>
                  <Button
                    variant="link"
                    className="text-xl font-medium text-gray-200 hover:text-white transition-colors justify-start p-0"
                    onClick={(e) => {
                      handleHashNavigation(e, "#contact")
                      document.querySelector("[data-radix-collection-item]")?.click() // Close sheet
                    }}
                  >
                    {t("nav.contact")}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}

