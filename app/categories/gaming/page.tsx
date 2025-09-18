import type { Metadata } from "next"
import { ChevronRight, Plus, Minus } from "lucide-react"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Gaming Tech Gear – Best Gaming Accessories | AnadjyTech",
  description:
    "Discover the best gaming tech gear on AnadjyTech: gaming mice, mechanical keyboards, headsets, monitors, stream decks, and gaming chairs for the ultimate setup.",
  canonical: "https://www.anadjytech.com/categories/gaming",
  openGraph: {
    title: "Gaming Tech Gear – Best Gaming Accessories | AnadjyTech",
    description:
      "Discover the best gaming tech gear on AnadjyTech: gaming mice, mechanical keyboards, headsets, monitors, stream decks, and gaming chairs for the ultimate setup.",
    url: "https://www.anadjytech.com/categories/gaming",
    siteName: "AnadjyTech",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Gaming Tech Gear Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaming Tech Gear – Best Gaming Accessories | AnadjyTech",
    description:
      "Discover the best gaming tech gear on AnadjyTech: gaming mice, mechanical keyboards, headsets, monitors, stream decks, and gaming chairs for the ultimate setup.",
    images: ["https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=630&fit=crop"],
  },
}

export default function GamingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900/98 via-blue-800/95 to-blue-700/92 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <a href="/" className="text-blue-200 hover:text-white transition-colors">
              Home
            </a>
            <ChevronRight className="h-4 w-4 text-blue-300" />
            <a href="/categories" className="text-blue-200 hover:text-white transition-colors">
              Categories
            </a>
            <ChevronRight className="h-4 w-4 text-blue-300" />
            <span className="text-white">Gaming Tech</span>
          </nav>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">Gaming Tech Gear</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-shadow">
              Upgrade your setup with the best gaming accessories.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Razer Gaming Mouse */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop"
                  alt="Razer Gaming Mouse"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Razer Gaming Mouse</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  High-precision gaming mouse with customizable RGB lighting and programmable buttons.
                </p>
                <div className="space-y-3 mt-auto">
                  <p className="text-2xl font-bold text-blue-600">$79.99</p>
                  <div className="flex gap-2">
                    <a
                      href="https://amazon.com"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                    >
                      Buy on Amazon
                    </a>
                    <a
                      href="/blog/gaming-mouse-guide"
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center text-sm font-medium"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Corsair Mechanical Keyboard */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop"
                  alt="Corsair Mechanical Keyboard"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Corsair Mechanical Keyboard</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Premium mechanical gaming keyboard with Cherry MX switches and per-key RGB lighting.
                </p>
                <div className="space-y-3 mt-auto">
                  <p className="text-2xl font-bold text-blue-600">$149.99</p>
                  <div className="flex gap-2">
                    <a
                      href="https://amazon.com"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                    >
                      Buy on Amazon
                    </a>
                    <a
                      href="/blog/mechanical-keyboards"
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center text-sm font-medium"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* HyperX Gaming Headset */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop"
                  alt="HyperX Gaming Headset"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">HyperX Gaming Headset</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Professional gaming headset with 7.1 surround sound and noise-cancelling microphone.
                </p>
                <div className="space-y-3 mt-auto">
                  <p className="text-2xl font-bold text-blue-600">$99.99</p>
                  <div className="flex gap-2">
                    <a
                      href="https://amazon.com"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                    >
                      Buy on Amazon
                    </a>
                    <a
                      href="/blog/gaming-headsets"
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center text-sm font-medium"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Elgato Stream Deck */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=400&fit=crop"
                  alt="Elgato Stream Deck"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Elgato Stream Deck</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  15-key LCD control deck for streamers with customizable buttons and instant actions.
                </p>
                <div className="space-y-3 mt-auto">
                  <p className="text-2xl font-bold text-blue-600">$149.99</p>
                  <div className="flex gap-2">
                    <a
                      href="https://amazon.com"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                    >
                      Buy on Amazon
                    </a>
                    <a
                      href="/blog/streaming-setup"
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center text-sm font-medium"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ASUS Gaming Monitor */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop"
                  alt="ASUS Gaming Monitor"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">ASUS Gaming Monitor</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  27-inch 144Hz gaming monitor with 1ms response time and G-Sync compatibility.
                </p>
                <div className="space-y-3 mt-auto">
                  <p className="text-2xl font-bold text-blue-600">$299.99</p>
                  <div className="flex gap-2">
                    <a
                      href="https://amazon.com"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                    >
                      Buy on Amazon
                    </a>
                    <a
                      href="/blog/gaming-monitors"
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center text-sm font-medium"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Gaming Chair */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop"
                  alt="Gaming Chair"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gaming Chair</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Ergonomic gaming chair with lumbar support, adjustable armrests, and premium materials.
                </p>
                <div className="space-y-3 mt-auto">
                  <p className="text-2xl font-bold text-blue-600">$249.99</p>
                  <div className="flex gap-2">
                    <a
                      href="https://amazon.com"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                    >
                      Buy on Amazon
                    </a>
                    <a
                      href="/blog/gaming-chairs"
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center text-sm font-medium"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Gaming Gear Comparison</h2>

          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Product</th>
                    <th className="px-6 py-4 text-left font-semibold">Key Features</th>
                    <th className="px-6 py-4 text-left font-semibold">Performance</th>
                    <th className="px-6 py-4 text-left font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Razer Gaming Mouse</td>
                    <td className="px-6 py-4 text-gray-600">RGB Lighting, Programmable Buttons</td>
                    <td className="px-6 py-4 text-gray-600">20,000 DPI, 1ms Response</td>
                    <td className="px-6 py-4 font-bold text-blue-600">$79.99</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">HyperX Gaming Headset</td>
                    <td className="px-6 py-4 text-gray-600">7.1 Surround, Noise-Cancelling Mic</td>
                    <td className="px-6 py-4 text-gray-600">50mm Drivers, Memory Foam</td>
                    <td className="px-6 py-4 font-bold text-blue-600">$99.99</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">ASUS Gaming Monitor</td>
                    <td className="px-6 py-4 text-gray-600">144Hz, G-Sync Compatible</td>
                    <td className="px-6 py-4 text-gray-600">27-inch, 1ms Response Time</td>
                    <td className="px-6 py-4 font-bold text-blue-600">$299.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Razer Gaming Mouse</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Features:</span> RGB Lighting, Programmable Buttons
                </div>
                <div>
                  <span className="font-medium">Performance:</span> 20,000 DPI, 1ms Response
                </div>
                <div>
                  <span className="font-medium">Price:</span> <span className="font-bold text-blue-600">$79.99</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-3">HyperX Gaming Headset</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Features:</span> 7.1 Surround, Noise-Cancelling Mic
                </div>
                <div>
                  <span className="font-medium">Performance:</span> 50mm Drivers, Memory Foam
                </div>
                <div>
                  <span className="font-medium">Price:</span> <span className="font-bold text-blue-600">$99.99</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-3">ASUS Gaming Monitor</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Features:</span> 144Hz, G-Sync Compatible
                </div>
                <div>
                  <span className="font-medium">Performance:</span> 27-inch, 1ms Response Time
                </div>
                <div>
                  <span className="font-medium">Price:</span> <span className="font-bold text-blue-600">$299.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Gaming Tech FAQ</h2>

          <div className="space-y-4">
            <details className="bg-white rounded-2xl shadow-md overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900">Do gaming keyboards improve performance?</span>
                <Plus className="h-5 w-5 text-gray-500 group-open:hidden" />
                <Minus className="h-5 w-5 text-gray-500 hidden group-open:block" />
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                <p>
                  Yes, gaming keyboards can improve performance through faster response times, anti-ghosting technology,
                  and customizable macros. Mechanical switches provide tactile feedback and durability that can enhance
                  your gaming experience, especially in competitive scenarios.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-2xl shadow-md overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900">What headset is best for long sessions?</span>
                <Plus className="h-5 w-5 text-gray-500 group-open:hidden" />
                <Minus className="h-5 w-5 text-gray-500 hidden group-open:block" />
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                <p>
                  For long gaming sessions, look for headsets with memory foam padding, adjustable headbands, and
                  lightweight designs. The HyperX Cloud series and SteelSeries Arctis models are popular choices for
                  comfort during extended use, with breathable materials and ergonomic designs.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-2xl shadow-md overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900">Is a gaming chair worth it?</span>
                <Plus className="h-5 w-5 text-gray-500 group-open:hidden" />
                <Minus className="h-5 w-5 text-gray-500 hidden group-open:block" />
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                <p>
                  A quality gaming chair is worth the investment if you spend several hours gaming or working at your
                  desk. Good gaming chairs provide proper lumbar support, reduce back strain, and improve posture. Look
                  for chairs with adjustable features and quality materials for long-term comfort and health benefits.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  )
}
