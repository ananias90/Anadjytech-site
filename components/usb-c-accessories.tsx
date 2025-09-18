"use client"

import Image from "next/image"
import Link from "next/link"

const usbcProducts = [
  {
    id: 1,
    name: "Anker 65W GaN USB-C Charger",
    description: "Compact fast charger for phones & laptops.",
    specs: ["65W GaN", "Dual USB-C", "Foldable plug"],
    image: "https://images.unsplash.com/photo-1555618568-9e1f6d6d3a3b",
    amazonLink: "https://amazon.com/dp/example1",
    reviewLink: "/blog",
  },
  {
    id: 2,
    name: "Baseus 8-in-1 USB-C Hub",
    description: "Expand your laptop with HDMI, USB, SD & more.",
    specs: ["4K HDMI", "PD 100W", "Aluminum build"],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    amazonLink: "https://amazon.com/dp/example2",
    reviewLink: "/blog",
  },
  {
    id: 3,
    name: "USB-C to HDMI 4K Adapter",
    description: "Plug-and-play to your 4K TV or monitor.",
    specs: ["4K@60Hz", "HDR", "Aluminum shell"],
    image: "https://images.unsplash.com/photo-1518770660439-46e3de3f3a2f",
    amazonLink: "https://amazon.com/dp/example3",
    reviewLink: "/blog",
  },
  {
    id: 4,
    name: "Samsung T7 Portable SSD (1TB)",
    description: "Blazing-fast external storage.",
    specs: ["Up to 1050MB/s", "USB-C", "Shock-resistant"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    amazonLink: "https://amazon.com/dp/example4",
    reviewLink: "/blog",
  },
  {
    id: 5,
    name: "USB-C Fast Charging Cable (100W)",
    description: "Durable cable for rapid charging & data.",
    specs: ["100W PD", "Nylon-braided", "1m–2m"],
    image: "https://images.unsplash.com/photo-1588776814546-46e3de3f3a2f",
    amazonLink: "https://amazon.com/dp/example5",
    reviewLink: "/blog",
  },
]

export default function UsbcAccessories() {
  return (
    <section className="py-16 bg-white" style={{ marginTop: "60px", marginBottom: "60px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a2b6d] mb-4 relative inline-block">
            USB-C Accessories You Need Every Day
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Essential USB-C accessories for charging, connectivity, and productivity in the modern digital world.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usbcProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 group border border-gray-100"
            >
              {/* Product Image */}
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Product Info */}
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{product.name}</h3>

                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Specs */}
                <ul className="space-y-1 mb-4">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="space-y-2">
                  <a
                    href={product.amazonLink}
                    target="_blank"
                    rel="noreferrer nofollow sponsored noopener"
                    className="w-full bg-[#0066cc] hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-center block"
                  >
                    Check price on Amazon
                  </a>
                  <Link
                    href={product.reviewLink}
                    className="w-full border border-[#0066cc] hover:border-blue-700 text-[#0066cc] hover:text-blue-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-center block bg-white"
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
