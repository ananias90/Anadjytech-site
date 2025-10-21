"use client"

import { usbcProducts } from "@/data"
import Image from "next/image"
import Link from "next/link"

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
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                  <Link
                    href={product.amazonLink}
                    target="_blank"
                    aria-label={`Check price for ${product.name} on Amazon`}
                    rel="noreferrer nofollow sponsored noopener"
                    className="w-full bg-[#0066cc] hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-center block"
                  >
                    Check price on Amazon
                  </Link>
                  <Link
                    aria-label={`Read reviews for ${product.name}`}
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
