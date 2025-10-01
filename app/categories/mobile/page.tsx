import type { Metadata } from "next"
import { ChevronRight } from "lucide-react"
import SiteHeader from "@/components/site-header"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Mobile & Charging Tech – Power Banks, Chargers & Cables | AnadjyTech",
  description:
    "Stay powered on-the-go with the latest mobile charging accessories: power banks, wireless chargers, fast cables, and portable solar chargers.",
  alternates: {
    canonical: "https://www.anadjytech.com/categories/mobile",
  },
  openGraph: {
    title: "Mobile & Charging Tech – Power Banks, Chargers & Cables | AnadjyTech",
    description:
      "Stay powered on-the-go with the latest mobile charging accessories: power banks, wireless chargers, fast cables, and portable solar chargers.",
    url: "https://www.anadjytech.com/categories/mobile",
    siteName: "AnadjyTech",
    images: [
      {
        url: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Mobile & Charging Tech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile & Charging Tech – Power Banks, Chargers & Cables | AnadjyTech",
    description:
      "Stay powered on-the-go with the latest mobile charging accessories: power banks, wireless chargers, fast cables, and portable solar chargers.",
    images: ["https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=1200&h=630&fit=crop"],
  },
}

const MobilePage = () => {
  const products = [
    {
      name: "Anker PowerCore 10000",
      price: "$29.99",
      image: "/anker-powercore-power-bank.jpg",
      description: "Compact 10,000mAh power bank with fast charging technology.",
    },
    {
      name: "MagSafe Charger",
      price: "$39.99",
      image: "/magsafe-wireless-charger.jpg",
      description: "Official Apple MagSafe wireless charger for iPhone 12 and later.",
    },
    {
      name: "USB-C Fast Cable",
      price: "$19.99",
      image: "/usb-c-fast-charging-cable.jpg",
      description: "6ft USB-C to USB-C cable supporting 100W fast charging.",
    },
    {
      name: "Wireless Charging Pad",
      price: "$24.99",
      image: "/wireless-charging-pad.png",
      description: "Qi-certified wireless charging pad for all compatible devices.",
    },
    {
      name: "Car Charger",
      price: "$16.99",
      image: "/car-charger-dual-usb.jpg",
      description: "Dual-port car charger with USB-A and USB-C ports.",
    },
    {
      name: "Portable Solar Charger",
      price: "$49.99",
      image: "/portable-solar-charger.jpg",
      description: "Foldable solar panel charger for outdoor adventures.",
    },
  ]

  const comparisonItems = [
    {
      name: "Anker PowerCore",
      capacity: "10,000mAh",
      charging: "18W Fast",
      wireless: "No",
      price: "$29.99",
    },
    {
      name: "MagSafe Charger",
      capacity: "N/A",
      charging: "15W Wireless",
      wireless: "Yes",
      price: "$39.99",
    },
    {
      name: "Wireless Pad",
      capacity: "N/A",
      charging: "10W Wireless",
      wireless: "Yes",
      price: "$24.99",
    },
  ]

  const faqs = [
    {
      question: "How long does a power bank last?",
      answer:
        "A 10,000mAh power bank can typically charge most smartphones 2-3 times. Battery life depends on usage patterns and device efficiency.",
    },
    {
      question: "Are wireless chargers safe?",
      answer:
        "Yes, Qi-certified wireless chargers are safe and include built-in protections against overheating, overcharging, and foreign object detection.",
    },
    {
      question: "What's the fastest charging cable?",
      answer:
        "USB-C cables supporting USB Power Delivery (PD) can deliver up to 100W of power, making them the fastest charging option available.",
    },
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900/98 via-blue-800/95 to-blue-700/92 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-blue-100 mb-8">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <ChevronRight className="h-4 w-4" />
            <a href="/categories" className="hover:text-white transition-colors">
              Categories
            </a>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Mobile & Charging</span>
          </nav>

          {/* Hero Content */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">Mobile & Charging Tech</h1>
            <p className="text-xl text-white max-w-2xl mx-auto text-shadow">
              Stay powered on-the-go with the latest accessories.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Top Mobile & Charging Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                  <Image  unoptimized width={300} height={300}
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Buy on Amazon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Product Comparison</h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Product</th>
                  <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Capacity</th>
                  <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Charging</th>
                  <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Wireless</th>
                  <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Price</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-6 py-4 font-medium text-gray-900">{item.name}</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">{item.capacity}</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">{item.charging}</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">{item.wireless}</td>
                    <td className="border border-gray-200 px-6 py-4 font-semibold text-blue-600">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparisonItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">{item.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="font-medium">{item.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Charging:</span>
                    <span className="font-medium">{item.charging}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wireless:</span>
                    <span className="font-medium">{item.wireless}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-semibold text-blue-600">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amazon Affiliate Disclosure */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 text-center">
            <strong>Amazon Affiliate Disclosure:</strong> As an Amazon Associate, we earn from qualifying purchases.
            This helps support our site at no additional cost to you. We only recommend products we believe in.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
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
    </div>
  )
}

export default MobilePage
