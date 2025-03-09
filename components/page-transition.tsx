"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isFirstMount, setIsFirstMount] = useState(true)

  // Skip animation on first mount
  useEffect(() => {
    if (isFirstMount) {
      setIsFirstMount(false)
    }
  }, [isFirstMount])

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={isFirstMount ? "enter" : "hidden"}
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

