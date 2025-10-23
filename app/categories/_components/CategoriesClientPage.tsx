"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Footer from "../../../components/footer"
import Newsletter from "../../../components/newsletter"
import FiltersSidebar from "../../../components/FiltersSidebar"
import MobileCTA from "../../../components/MobileCTA"
import { ChevronRight, Usb, Home, Headphones, Briefcase, Smartphone, Gamepad2, Grid3X3, List } from "lucide-react"
import { Button } from "../../../components/ui/button"
import SiteHeader from "../../../components/site-header"
import Link from "next/link"
import { sampleProducts } from "@/data"



export default function CategoriesClientPage() {
  const searchParams = useSearchParams()
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const categories = [
    {
      icon: Usb,
      title: "USB-C Accessories",
      description: "Hubs, chargers, adapters & cables for daily use.",
      href: "/categories/usb-c",
    },
    {
      icon: Home,
      title: "Smart Home",
      description: "Lights, cameras, plugs & devices for connected living.",
      href: "/categories/smart-home",
    },
    {
      icon: Headphones,
      title: "Audio & Entertainment",
      description: "Headphones, earbuds, soundbars & speakers.",
      href: "/categories/audio",
    },
    {
      icon: Briefcase,
      title: "Work & Study",
      description: "Productivity tools, monitors & office essentials.",
      href: "/categories/work",
    },
    {
      icon: Smartphone,
      title: "Mobile & Charging",
      description: "Power banks, wireless chargers & phone accessories.",
      href: "/categories/mobile",
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Controllers, keyboards, mice & gaming accessories.",
      href: "/categories/gaming",
    },
  ]

  const filterOptions = {
    categories: [
      { name: "USB-C Accessories", count: 24 },
      { name: "Smart Home", count: 18 },
      { name: "Audio & Entertainment", count: 32 },
      { name: "Work & Study", count: 15 },
      { name: "Mobile & Charging", count: 28 },
      { name: "Gaming", count: 21 },
    ],
    brands: [
      { name: "Apple", count: 12 },
      { name: "Samsung", count: 15 },
      { name: "Anker", count: 18 },
      { name: "Logitech", count: 10 },
      { name: "Razer", count: 8 },
      { name: "Philips", count: 6 },
    ],
  }

  // Filter products based on URL parameters
  const filteredProducts = sampleProducts.filter((product) => {
    const types = searchParams.get("type")?.split(",") || []
    const brands = searchParams.get("brand")?.split(",") || []
    const rating = searchParams.get("rating")
    const search = searchParams.get("search")

    if (types.length > 0 && !types.includes(product.category)) return false
    if (brands.length > 0 && !brands.includes(product.brand)) return false

    if (rating && product.rating < Number(rating)) return false

    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) return false

    return true
  })

  const faqs = [
    {
      question: "How do you curate your tech categories?",
      answer:
        "We organize products by use case and lifestyle needs, making it easier to find exactly what you're looking for.",
    },
    {
      question: "Are all products tested before recommendation?",
      answer:
        "Yes, our team tests products for quality, performance, and value before featuring them in our categories.",
    },
    {
      question: "Do you offer warranty support for categorized products?",
      answer:
        "Warranty support comes directly from manufacturers. We provide guidance on warranty claims and product support.",
    },
  ]

  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      {/* <SiteHeader /> */}

      <section className="bg-gradient-to-br from-blue-900/98 via-blue-800/95 to-blue-700/92 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-blue-100 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white" aria-current="page">
              Categories
            </span>
          </nav>

          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">Explore Our Categories</h1>
            <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto text-shadow">
              Browse curated tech & gadgets by theme.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <FiltersSidebar
              categories={filterOptions.categories}
              brands={filterOptions.brands}
              priceRange={[0, 200]}
              maxPrice={200}
            />

            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600" aria-live="polite">
                  Showing {filteredProducts.length} of {sampleProducts.length} products
                </p>
                <div className="flex items-center gap-2" role="group" aria-label="View mode selection">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid view"
                    aria-pressed={viewMode === "grid"}
                  >
                    <Grid3X3 className={`${viewMode === "grid" ? "text-white" : "text-blue-700"} w-4 h-4 text-bl`} aria-hidden="true" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    aria-label="List view"
                    aria-pressed={viewMode === "list"}
                  >
                    <List className={`${viewMode === "list" ? "text-white" : "text-blue-700"} w-4 h-4 text-bl`} aria-hidden="true" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {categories.map((category, index) => {
                  const IconComponent = category.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 text-center group"
                    >
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-200 transition-colors">
                          <IconComponent className="h-8 w-8 text-blue-600" aria-hidden="true" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                      <p className="text-gray-600 mb-6">{category.description}</p>
                      <Link
                        href={category.href}
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        aria-label={`Explore ${category.title} category`}
                      >
                        Explore
                      </Link>
                    </div>
                  )
                })}
              </div>

              <div
                className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
                role="region"
                aria-label="Product listings"
              >
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
                  >
                    <div className="relative w-full h-48 mb-4">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={`${product.name} - ${product.brand} product image`}
                        fill
                        unoptimized
                        className="object-cover rounded-lg"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {product.category} • {product.brand}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noreferrer nofollow sponsored noopener"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                      >
                        Check price on Amazon
                      </Link>
                      <div className="flex items-center gap-1" aria-label={`Rating: ${product.rating} out of 5 stars`}>
                        <span className="text-yellow-400" aria-hidden="true">
                          ★
                        </span>
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />

      <MobileCTA />
    </div>
  )
}
