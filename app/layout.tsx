import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/ui/scrollToTop"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "AnadjyTech - Your Tech Guide",
  description:
    "Discover the latest tech gadgets, reviews, and buying guides at AnadjyTech. Your trusted source for smart home devices, audio equipment, and innovative technology.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="stylesheet" href="/assets/css/interactions.css" />
      </head>
      <body>
        <Suspense>
          {children}
          <ScrollToTop />
        </Suspense>
        <script src="/assets/js/app.js"></script>
        <script src="/assets/js/search-autocomplete.js"></script>
      </body>
    </html>
  )
}
