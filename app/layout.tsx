import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/main/Footer"
import AppProvider from "@/components/provider/AppProvider"
import Cursor from "@/components/ui/Cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Dev Portfolio",
  description: "A portfolio showcasing my development projects and skills.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-x-hidden`}
      >
        <AppProvider>
          <Cursor />

          {/* Page wrapper */}
          <div className="min-h-screen flex flex-col">
            {/* Main content */}
            <main className="flex-1 relative z-10">
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  )
}
