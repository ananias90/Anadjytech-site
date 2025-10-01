"use client"

import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Soundbar with Subwoofer",
    description: "Immersive audio for your TV.",
    specs: ["Dolby Audio", "Bluetooth 5.0", "HDMI ARC"],
    image: "https://images.unsplash.com/photo-1587202372775-98973f5c1c72",
    amazonUrl: "https://amazon.com/dp/example1",
    learnMoreUrl: "/blog",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    description: "Compact earbuds with great sound.",
    specs: ["Noise Reduction", "Touch Control", "24h Battery"],
    image: "https://images.unsplash.com/photo-1588421357574-87938a3861d1",
    amazonUrl: "https://amazon.com/dp/example2",
    learnMoreUrl: "/blog",
  },
  {
    id: 3,
    name: "Power Bank 20,000mAh",
    description: "Portable fast-charging power.",
    specs: ["USB-C PD 65W", "Dual Output", "LED Display"],
    image: "https://images.unsplash.com/photo-1586015555759-3e99f9d5b1be",
    amazonUrl: "https://amazon.com/dp/example3",
    learnMoreUrl: "/blog",
  },
  {
    id: 4,
    name: "Wireless Charging Pad",
    description: "Fast wireless charging for phones.",
    specs: ["15W Qi", "Slim design", "LED indicator"],
    image: "https://images.unsplash.com/photo-1591797442444-039f23ddcc14",
    amazonUrl: "https://amazon.com/dp/example4",
    learnMoreUrl: "/blog",
  },
  {
    id: 5,
    name: "Mechanical Keyboard (RGB)",
    description: "Gaming keyboard with tactile feedback.",
    specs: ["RGB backlight", "Hot-swappable keys", "USB-C"],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    amazonUrl: "https://amazon.com/dp/example5",
    learnMoreUrl: "/blog",
  },
]

export default function EditorsPicks() {
  return (
    <section className="py-16 px-4 bg-gray-50" style={{ marginTop: "60px", marginBottom: "60px" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b6d] mb-4 relative inline-block">
            Editor's Picks
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our top recommendations for the best tech products this month
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6"
            >
              {/* Product Image */}
              <div className="h-48 mb-4 rounded-xl overflow-hidden bg-gray-100 relative">
                <Image
                  unoptimized
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Product Info */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{product.name}</h3>

                <p className="text-gray-600 text-sm mb-3 line-clamp-1">{product.description}</p>

                {/* Specs */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="text-sm text-gray-500 flex items-center">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="space-y-2">
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noreferrer nofollow sponsored noopener"
                    className="w-full bg-[#0066cc] hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center block"
                  >
                    Check price on Amazon
                  </a>
                  {/* Secondary Button */}
                  <Link
                    href={product.learnMoreUrl}
                    className="w-full border border-[#0066cc] hover:border-blue-700 text-[#0066cc] hover:text-blue-700 text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center block bg-white"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
