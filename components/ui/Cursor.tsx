"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function MetacraftersCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useGSAP(() => {
    if (!mounted || !dotRef.current || !ringRef.current) return

    // 1. Setup instant dot (snappy)
    const xDot = gsap.quickTo(dotRef.current, "x", { duration: 0.05, ease: "none" })
    const yDot = gsap.quickTo(dotRef.current, "y", { duration: 0.05, ease: "none" })

    // 2. Setup trailing ring (smooth delay like Metacrafters)
    const xRing = gsap.quickTo(ringRef.current, "x", { duration: 0.4, ease: "power3" })
    const yRing = gsap.quickTo(ringRef.current, "y", { duration: 0.4, ease: "power3" })

    const moveCursor = (e: MouseEvent) => {
      xDot(e.clientX)
      yDot(e.clientY)
      xRing(e.clientX)
      yRing(e.clientY)
    }

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHovering = target.closest('button, a, [data-cursor="hover"]')
      
      gsap.to(ringRef.current, {
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(255,255,255,0.1)" : "transparent",
        duration: 0.3
      })
      gsap.to(dotRef.current, {
        scale: isHovering ? 0 : 1, // Dot disappears on hover for a clean look
        duration: 0.2
      })
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleHover)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleHover)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <>
      {/* Small center dot */}
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" 
      />
      {/* Lagging outer ring */}
      <div 
        ref={ringRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference" 
      />
    </>
  )
}
