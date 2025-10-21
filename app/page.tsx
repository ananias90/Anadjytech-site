import SiteHeader from "@/components/site-header"
import Hero from "@/components/hero"
import FeatureBar from "@/components/feature-bar"
import FeaturedRows from "@/components/featured-rows"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import NewArrivalsCarousel from "@/components/new-arrivals-carousel"
import SmartHomeMustHaves from "@/components/smart-home-must-haves"
import UsbcAccessories from "@/components/usb-c-accessories"
import UsbcHubsComparison from "@/components/usb-c-hubs-comparison"
import EditorsPicks from "@/components/editors-picks"
import MobileCTA from "@/components/MobileCTA"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AnadjyTech — Smart Tech & Gadgets Picks (2025)",
  description:
    "Discover USB-C essentials, smart-home gear, and 4K TV accessories. Curated picks, comparisons, and guides to make life smarter.",
  alternates: {
    canonical: "https://www.anadjytech.com/",
  },
  openGraph: {
    title: "AnadjyTech — The smart way to tech.",
    description: "Curated tech & gadgets, guides, and comparisons.",
    url: "https://www.anadjytech.com/",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-13%20at%208.48.59%20PM-bZ2M87FnUPofaEcQi0tWWY9IAEnSTQ.jpeg",
        width: 1200,
        height: 630,
        alt: "AnadjyTech - Smart Tech & Gadgets",
      },
    ],
    type: "website",
    siteName: "AnadjyTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnadjyTech — The smart way to tech.",
    description: "Curated tech & gadgets, guides, and comparisons.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-13%20at%208.48.59%20PM-bZ2M87FnUPofaEcQi0tWWY9IAEnSTQ.jpeg",
    ],
  },
}

export default function page() {
  return (
    <div className=" pb-20 lg:pb-0">
      <SiteHeader />
      <Hero />
      <FeatureBar />
      <FeaturedRows />
      <NewArrivalsCarousel />
      <SmartHomeMustHaves />
      <UsbcAccessories />
      <UsbcHubsComparison />
      <EditorsPicks />
      <Newsletter />
      <Footer />

      <MobileCTA />
    </div>
  )
}
