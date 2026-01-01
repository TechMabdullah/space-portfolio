"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const container = useRef<HTMLDivElement>(null)
  const letters = useRef<HTMLSpanElement[]>([])

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      onComplete,
    })

    tl.fromTo(
      letters.current,
      { y: 120 },
      {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.08,
      }
    )
      .to(letters.current, {
        y: -120,
        duration: 0.9,
        ease: "power4.in",
        stagger: 0.06,
        delay: 0.5,
      })
      .to(container.current, {
        y: "-100%",
        duration: 1.2,
        ease: "expo.inOut",
      })
  }, [onComplete])

  const text = "M.Abdullah Ansari" // 👈 change this

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <h1 className="flex overflow-hidden text-white text-[clamp(3rem,8vw,7rem)] font-semibold tracking-[0.25em]">
        {text.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) letters.current[i] = el
            }}
            className="inline-block"
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  )
}
