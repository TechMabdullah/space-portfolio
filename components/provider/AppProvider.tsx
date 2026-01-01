"use client"

import { useEffect, useState } from "react"
import Loader from "@/components/ui/Loader"

export default function AppProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMounted, setIsMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    if (loading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [loading, isMounted])

  if (!isMounted) return children

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {children}
    </>
  )
}
