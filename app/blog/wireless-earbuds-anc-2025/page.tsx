import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogArticle from "@/components/blog/blog-article"

export const metadata: Metadata = {
  title: "Wireless Earbuds with ANC: Top Picks for 2025 | AnadjyTech",
  description: "Noise cancelling compared, fit and mic quality tested — the earbuds we actually recommend in 2025.",
  keywords: "wireless earbuds, ANC, noise cancelling, audio, 2025, reviews",
  openGraph: {
    title: "Wireless Earbuds with ANC: Top Picks for 2025",
    description: "Noise cancelling compared, fit and mic quality tested — the earbuds we actually recommend in 2025.",
    type: "article",
    publishedTime: "2025-08-10",
    authors: ["AnadjyTech Editorial"],
    tags: ["Audio", "Earbuds", "ANC", "2025"],
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog-cover-earbuds-anc-2025-1920x1080-wIFAdqte29eUkh3ZJeeE4ZCTVwLcsE.webp",
        width: 1920,
        height: 1080,
        alt: "ANC earbuds on blue background.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wireless Earbuds with ANC: Top Picks for 2025",
    description: "Noise cancelling compared, fit and mic quality tested — the earbuds we actually recommend in 2025.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog-cover-earbuds-anc-2025-1920x1080-wIFAdqte29eUkh3ZJeeE4ZCTVwLcsE.webp",
    ],
  },
  alternates: {
    canonical: "/blog/wireless-earbuds-anc-2025",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Wireless Earbuds with ANC: Top Picks for 2025",
  description: "Noise cancelling compared, fit and mic quality tested — the earbuds we actually recommend in 2025.",
  author: { "@type": "Person", name: "Ananias Cerlus" },
  publisher: {
    "@type": "Organization",
    name: "AnadjyTech",
    logo: { "@type": "ImageObject", url: "https://www.anadjytech.com/og/anadjytech-logo.png" },
  },
  datePublished: "2025-08-10",
  dateModified: "2025-08-10",
  image: ["https://www.anadjytech.com/og/wireless-earbuds-anc-2025.png"],
  mainEntityOfPage: "https://www.anadjytech.com/blog/wireless-earbuds-anc-2025",
}

const articleData = {
  slug: "wireless-earbuds-anc-2025",
  title: "Wireless Earbuds with ANC: Top Picks for 2025",
  category: "Audio",
  excerpt: "Noise cancelling compared, fit and mic quality tested — the earbuds we actually recommend in 2025.",
  author: "AnadjyTech Editorial",
  publishedAt: "2025-08-10",
  readMins: 6,
  image: {
    mobile:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog-cover-earbuds-anc-2025-800x450-V7GjlzZS4xJQPNMIeTv7TVxQMbfCzv.webp",
    tablet:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog-cover-earbuds-anc-2025-1366x768-6zWUc0OKXlPzWKMhLtMz4YWhGPyTAn.webp",
    desktop:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog-cover-earbuds-anc-2025-1920x1080-wIFAdqte29eUkh3ZJeeE4ZCTVwLcsE.webp",
    alt: "ANC earbuds on blue background.",
    width: 1920,
    height: 1080,
  },
  tags: ["Audio", "Earbuds", "ANC", "2025"],

  // Key takeaways
  keyTakeaways: [
    "Fit & seal matter more than raw ANC numbers.",
    "Mic quality varies a lot — check wind reduction and background noise.",
    "Look for dual-device pairing and custom EQ in the app.",
    "Battery: 6–8 h buds, 24–32 h with case is solid in 2025.",
    "IP rating (sweat/rain) if you work out; Qi2/MagSafe is a plus.",
  ],

  // Specs table
  specs: {
    Drivers: "Dynamic 10–12 mm or hybrid",
    ANC: "Hybrid feed-forward/feedback; transparency mode",
    Codecs: "AAC/LC3 (baseline); LDAC/LC3plus optional",
    Multipoint: "Yes (2 devices)",
    Battery: "7 h buds · 28 h case (typ.)",
    Charging: "USB-C; Qi/Qi2 optional",
    "Water rating": "IPX4–IP55",
    App: "Custom EQ, controls remap, fit test",
  },

  // Pros and cons
  pros: ["Great isolation in noisy spaces", "Compact for commute/gym", "Good calls with the right mics"],
  cons: ["Fit is personal—may need tips swap", "ANC drains battery faster", "Small cases are easy to misplace"],

  // Best links
  bestLinks: [
    {
      label: "Top Pick — Balanced ANC",
      url: "#",
      merchant: "Store A",
      note: "Great all-rounder",
    },
    {
      label: "Best for Calls",
      url: "#",
      merchant: "Store B",
      note: "Mic clarity & wind reduction",
    },
    {
      label: "Best Budget",
      url: "#",
      merchant: "Store C",
      note: "Under $100",
    },
  ],

  // Related posts
  relatedPosts: [
    {
      title: "USB-C Accessories You'll Use Every Day",
      slug: "usb-c-accessories-daily-use",
      image: "/usb-c-accessories.png",
      excerpt: "Essential USB-C gear for your laptop, phone, and tablet setup.",
    },
    {
      title: "MagSafe vs Qi2: Wireless Charging Guide",
      slug: "magsafe-vs-qi2-wireless-charging",
      image: "/wireless-charging-guide.png",
      excerpt: "Understanding the latest wireless charging standards and compatibility.",
    },
    {
      title: "Best Smartphone Audio Settings for 2025",
      slug: "smartphone-audio-settings-2025",
      image: "/smartphone-audio.png",
      excerpt: "Optimize your phone's audio output for better music and calls.",
    },
  ],
}

export default function WirelessEarbudsANCPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">
        <Header />
        <BlogArticle post={articleData} />
        <Footer />
      </div>
    </>
  )
}
