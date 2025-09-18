import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Best Audio & Entertainment Picks - AnadjyTech",
  description:
    "Discover the best headphones, earbuds, speakers & more. Expert reviews and comparisons for premium audio gear.",
  openGraph: {
    title: "Best Audio & Entertainment Picks - AnadjyTech",
    description:
      "Discover the best headphones, earbuds, speakers & more. Expert reviews and comparisons for premium audio gear.",
    url: "https://www.anadjytech.com/categories/audio",
  },
}

const audioProducts = [
  {
    name: "Sony WH-1000XM5",
    description: "Industry-leading noise cancelling wireless headphones with 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
    specs: ["Active Noise Cancelling", "30hr Battery", "Hi-Res Audio", "Touch Controls"],
    amazonUrl: "https://amazon.com/dp/example1",
    reviewUrl: "#",
  },
  {
    name: "Bose SoundLink Speaker",
    description: "Portable Bluetooth speaker with 360-degree sound and 16-hour battery life.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    specs: ["360° Sound", "16hr Battery", "Water Resistant", "Voice Assistant"],
    amazonUrl: "https://amazon.com/dp/example2",
    reviewUrl: "#",
  },
  {
    name: "Apple AirPods Pro",
    description: "Premium wireless earbuds with spatial audio and adaptive transparency.",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
    specs: ["Spatial Audio", "ANC", "6hr + 24hr Case", "MagSafe Charging"],
    amazonUrl: "https://amazon.com/dp/example3",
    reviewUrl: "#",
  },
  {
    name: "JBL Soundbar",
    description: "Wireless soundbar with detachable surround speakers for immersive audio.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    specs: ["5.1 Surround", "Wireless Subwoofer", "4K HDR", "Chromecast Built-in"],
    amazonUrl: "https://amazon.com/dp/example4",
    reviewUrl: "#",
  },
  {
    name: "Gaming Headset",
    description: "Wireless gaming headset with lossless 2.4GHz connection and 24-hour battery.",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440",
    specs: ["Wireless 2.4GHz", "24hr Battery", "DTS Headphone:X", "ClearCast Mic"],
    amazonUrl: "https://amazon.com/dp/example5",
    reviewUrl: "#",
  },
  {
    name: "Portable Bluetooth Speaker",
    description: "Hi-res Bluetooth speaker with customizable EQ and 12-hour playtime.",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d",
    specs: ["Hi-Res Audio", "12hr Battery", "IPX7 Waterproof", "Custom EQ"],
    amazonUrl: "https://amazon.com/dp/example6",
    reviewUrl: "#",
  },
]

const comparisonData = [
  {
    name: "Sony WH-1000XM5",
    noiseCancelling: "Industry Leading",
    batteryLife: "30 hours",
    wireless: "Bluetooth 5.2",
  },
  {
    name: "Apple AirPods Pro",
    noiseCancelling: "Excellent",
    batteryLife: "6hr + 24hr Case",
    wireless: "Bluetooth 5.3",
  },
  {
    name: "Bose SoundLink",
    noiseCancelling: "N/A (Speaker)",
    batteryLife: "16 hours",
    wireless: "Bluetooth 5.1",
  },
]

const faqs = [
  {
    question: "Which headphones are best for travel?",
    answer:
      "For travel, look for headphones with active noise cancelling (like Sony WH-1000XM5 or Bose QuietComfort), long battery life, and comfortable fit for extended wear. Foldable designs are also great for packing. Wireless models eliminate the hassle of tangled cables during travel.",
  },
  {
    question: "What's the difference between a soundbar and speaker?",
    answer:
      "Soundbars are designed specifically for TV audio enhancement, featuring multiple drivers in a single bar-shaped unit that sits below your TV. Regular speakers are more versatile for music listening and can be positioned anywhere. Soundbars often include dialogue enhancement and surround sound processing.",
  },
  {
    question: "Are gaming headsets good for music?",
    answer:
      "Many gaming headsets can work well for music, especially higher-end models with good drivers and frequency response. However, dedicated music headphones typically offer better audio quality and more balanced sound. Gaming headsets prioritize features like microphones and positional audio over pure music reproduction.",
  },
]

export default function AudioCategoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/categories" className="hover:text-blue-600 transition-colors">
              Categories
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Audio & Entertainment</span>
          </nav>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a2b6d] mb-4">Best Audio & Entertainment Picks</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Headphones, earbuds, speakers & more.</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b6d] mb-4">Featured Audio Products</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audioProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.specs.map((spec, specIndex) => (
                        <span key={specIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="flex gap-3">
                      <Link
                        href={product.amazonUrl}
                        target="_blank"
                        rel="nofollow sponsored noopener"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 text-center"
                      >
                        Check price on Amazon
                      </Link>
                      <Link
                        href={product.reviewUrl}
                        className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-xl transition-colors duration-200 text-center"
                      >
                        Read Review
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b6d] mb-4">Audio Device Comparison</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Model</th>
                  <th className="px-6 py-4 text-left font-semibold">Noise Cancelling</th>
                  <th className="px-6 py-4 text-left font-semibold">Battery Life</th>
                  <th className="px-6 py-4 text-left font-semibold">Wireless</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-gray-700">{item.noiseCancelling}</td>
                    <td className="px-6 py-4 text-gray-700">{item.batteryLife}</td>
                    <td className="px-6 py-4 text-gray-700">{item.wireless}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {comparisonData.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Noise Cancelling:</span>
                    <span className="font-semibold">{item.noiseCancelling}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Battery Life:</span>
                    <span className="font-semibold">{item.batteryLife}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wireless:</span>
                    <span className="font-semibold">{item.wireless}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b6d] mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  )
}
