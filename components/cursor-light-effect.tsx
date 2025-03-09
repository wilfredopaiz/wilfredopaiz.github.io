"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorLightEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get the hero section element
      const heroSection = document.querySelector("section") as HTMLElement
      if (!heroSection) return

      const rect = heroSection.getBoundingClientRect()

      // Check if mouse is within the hero section
      if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
        setIsVisible(true)
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        })
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      className="pointer-events-none absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 blur-[80px] z-10"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        transform: `translate(${mousePosition.x - 150}px, ${mousePosition.y - 150}px)`,
        opacity: isVisible ? 0.7 : 0,
      }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 200,
        mass: 0.8,
      }}
    />
  )
}

