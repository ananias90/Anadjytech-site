import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

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
        <style>{`
#backToTop {
  background: #000000 !important;
  color: #ffffff !important;
  box-shadow: 0 0 0 5px #000000 !important;
  border: 3px solid #000000 !important;
}
#backToTop:hover {
  background: #1a1a1a !important;
  color: #ffffff !important;
}
        `}</style>
        <link rel="stylesheet" href="/assets/css/interactions.css" />
      </head>
      <body>
        {children}
        <button
          id="backToTop"
          aria-label="Back to top"
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "#000000",
            color: "#ffffff",
            border: "3px solid #000000",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            opacity: "1",
            visibility: "visible",
            transition: "all 0.3s ease",
            zIndex: "9999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "bold",
            boxShadow: "0 0 0 5px #000000, 0 4px 12px rgba(0,0,0,0.8)",
            textShadow: "0 0 2px #000000",
          }}
        >
          ↑
        </button>
        <script src="/assets/js/app.js"></script>
        <script src="/assets/js/search-autocomplete.js"></script>
      </body>
    </html>
  )
}
