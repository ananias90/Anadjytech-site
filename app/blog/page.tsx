import type { Metadata } from "next"
import { Suspense } from "react"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"
import SiteHeader from "@/components/site-header"
import MobileCTA from "@/components/MobileCTA";
import BlogClientPage from "./BlogClientPage";


export const metadata: Metadata = {
  title: "Tech & Gadgets Blog | AnadjyTech — The smart way to tech",
  description: "Latest tech trends, reviews, and how-tos for smart decisions.",
  keywords:
    "tech blog, gadget reviews, smartphone buying guide, laptop reviews, wireless earbuds, smart home, how-to guides, tech deals, AnadjyTech",
  openGraph: {
    title: "Tech & Gadgets Blog | AnadjyTech",
    description: "Latest tech trends, reviews, and how-tos for smart decisions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech & Gadgets Blog | AnadjyTech",
    description: "Latest tech trends, reviews, and how-tos for smart decisions.",
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      <SiteHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogClientPage />
      </Suspense>
      <Newsletter />
      <Footer />

      <MobileCTA />
    </div>
  )
}
