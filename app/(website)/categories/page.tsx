import type { Metadata } from "next"
import { Suspense } from "react"
import CategoriesClientPage from "./_components/CategoriesClientPage"

export const metadata: Metadata = {
  title: "Tech Categories – Shop Gadgets by Type | AnadjyTech",
  description:
    "Explore curated tech categories on AnadjyTech: USB-C accessories, smart home devices, audio gear, work essentials, mobile chargers, and gaming gadgets.",
  keywords:
    "tech categories, USB-C accessories, smart home, audio entertainment, work productivity, mobile charging, gaming tech",
  openGraph: {
    title: "Tech Categories – Shop Gadgets by Type | AnadjyTech",
    description:
      "Explore curated tech categories on AnadjyTech: USB-C accessories, smart home devices, audio gear, work essentials, mobile chargers, and gaming gadgets.",
    type: "website",
    url: "https://www.anadjytech.com/categories",
    images: [
      {
        url: "https://www.anadjytech.com/images/categories-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Categories - Shop Gadgets by Type",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Categories – Shop Gadgets by Type | AnadjyTech",
    description:
      "Explore curated tech categories on AnadjyTech: USB-C accessories, smart home devices, audio gear, work essentials, mobile chargers, and gaming gadgets.",
  },
  alternates: {
    canonical: "https://www.anadjytech.com/categories",
  },
}

export default function CategoriesPage() {
  return (
    <div>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <CategoriesClientPage />
      </Suspense>
    </div>
  )
}
