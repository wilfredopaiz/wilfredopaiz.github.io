"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { scrollToElement } from "@/lib/scroll-utils"

interface SmoothLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function SmoothLink({ href, children, className = "", onClick }: SmoothLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick()
    }

    // If it's a hash link on the current page
    if (href.startsWith("/#")) {
      e.preventDefault()
      const id = href.replace("/#", "")
      scrollToElement(id)

      // Update URL without page reload
      window.history.pushState({}, "", href.replace("/", ""))
    } else if (href.startsWith("#")) {
      e.preventDefault()
      const id = href.replace("#", "")
      scrollToElement(id)

      // Update URL without page reload
      window.history.pushState({}, "", href)
    } else {
      // For non-hash links, use normal navigation
      router.push(href)
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}

