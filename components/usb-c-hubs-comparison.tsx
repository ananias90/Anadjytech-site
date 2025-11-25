"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "What does Power Delivery (PD) mean?",
    answer: "It's the charging capacity supported for laptops and phones.",
  },
  {
    question: "Why does HDMI matter?",
    answer: "It determines resolution and refresh rate supported for external displays.",
  },
  {
    question: "Do USB-C hubs overheat?",
    answer: "Most get warm during use, but quality hubs manage heat safely.",
  },
]

export default function UsbcHubsComparison({ products = [] }: { products?: any[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  console.log("Dataaaaaa ", products)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Transform the products data to match the hub structure
  const hubs = products.map(product => ({
    product: product.name,
    ports: extractPortsInfo(product),
    powerDelivery: extractPowerDelivery(product),
    hdmi: extractHDMIInfo(product),
    weight: extractWeightInfo(product),
    buyLink: product.amazonUrl || product.amazonLink || "#"
  }))

  // Helper functions to extract information from product data
  function extractPortsInfo(product: any) {
    if (product.specs && Array.isArray(product.specs)) {
      const portSpecs = product.specs.filter((spec: string) => 
        spec.toLowerCase().includes('usb') || 
        spec.toLowerCase().includes('hdmi') ||
        spec.toLowerCase().includes('sd') ||
        spec.toLowerCase().includes('card') ||
        spec.toLowerCase().includes('port')
      )
      if (portSpecs.length > 0) return portSpecs.join(', ')
    }
    
    // Fallback to name analysis
    const name = product.name.toLowerCase()
    if (name.includes('8-in-1')) return '8 ports including HDMI, USB, SD'
    if (name.includes('7-in-1')) return '7 ports including HDMI, USB, SD'
    if (name.includes('6-in-1')) return '6 ports including HDMI, USB'
    
    return 'Multiple ports'
  }

  function extractPowerDelivery(product: any) {
    if (product.specs && Array.isArray(product.specs)) {
      const pdSpec = product.specs.find((spec: string) => 
        spec.toLowerCase().includes('pd') || 
        spec.toLowerCase().includes('power delivery') ||
        spec.toLowerCase().includes('watt') ||
        spec.toLowerCase().includes('charging')
      )
      if (pdSpec) return pdSpec
    }
    
    // Fallback to name analysis
    const name = product.name.toLowerCase()
    if (name.includes('100w')) return 'PD 100W'
    if (name.includes('87w')) return 'PD 87W'
    if (name.includes('65w')) return 'PD 65W'
    
    return 'PD Supported'
  }

  function extractHDMIInfo(product: any) {
    if (product.specs && Array.isArray(product.specs)) {
      const hdmiSpec = product.specs.find((spec: string) => 
        spec.toLowerCase().includes('hdmi') || 
        spec.toLowerCase().includes('4k') ||
        spec.toLowerCase().includes('display')
      )
      if (hdmiSpec) return hdmiSpec
    }
    
    // Fallback to name analysis
    const name = product.name.toLowerCase()
    if (name.includes('4k')) return '4K HDMI'
    if (name.includes('hdmi')) return 'HDMI Supported'
    
    return 'HDMI Available'
  }

  function extractWeightInfo(product: any) {
    // Default weight since this info might not be available
    return 'Lightweight'
  }

  // Don't render if no products
  if (!products || products.length === 0) {
    return null
  }

  return (
    <section className="py-16 px-4 bg-gray-50" style={{ marginTop: "60px", marginBottom: "60px" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b6d] mb-4 relative inline-block">
            Best USB-C Hubs (2025)
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare the top USB-C hubs with detailed specifications to find the perfect match for your setup.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-50 sticky top-0">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ports</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Power Delivery</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">HDMI</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Weight</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Buy</th>
                </tr>
              </thead>
              <tbody>
                {hubs.map((hub, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{hub.product}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{hub.ports}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{hub.powerDelivery}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{hub.hdmi}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{hub.weight}</td>
                    <td className="px-6 py-4">
                      <Link
                        href={hub.buyLink}
                        target="_blank"
                        aria-label={`Check price for ${hub.product} on Amazon`}
                        rel="noreferrer nofollow sponsored noopener"
                        className="inline-flex items-center px-4 py-2 bg-[#0066cc] text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Check price on Amazon
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4 mb-12">
          {hubs.map((hub, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{hub.product}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-600">Ports:</span>
                  <span className="text-sm text-gray-900">{hub.ports}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-600">Power Delivery:</span>
                  <span className="text-sm text-gray-900">{hub.powerDelivery}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-600">HDMI:</span>
                  <span className="text-sm text-gray-900">{hub.hdmi}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-600">Weight:</span>
                  <span className="text-sm text-gray-900">{hub.weight}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <Link
                    href={hub.buyLink}
                    target="_blank"
                    aria-label={`Check price for ${hub.product} on Amazon`}
                    rel="noreferrer nofollow sponsored noopener"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#0066cc] text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Check price on Amazon
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-[#1a2b6d] mb-6 text-center relative inline-block w-full">
            <span className="relative">
              Frequently Asked Questions
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </span>
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}