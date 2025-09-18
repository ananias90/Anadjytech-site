import type { Metadata } from "next"
import { ChevronRight } from "lucide-react"
import SiteHeader from "@/components/site-header"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Work & Study Gadgets - Productivity Tech | AnadjyTech",
  description:
    "Boost your productivity with smart tech: Logitech MX Master mouse, mechanical keyboards, monitor light bars, external monitors, portable SSDs, and noise-cancelling headphones.",
  keywords:
    "work gadgets, study tech, productivity tools, Logitech MX Master, mechanical keyboard, monitor light bar, external monitor, portable SSD, noise-cancelling headphones",
  openGraph: {
    title: "Work & Study Gadgets - Productivity Tech | AnadjyTech",
    description: "Boost your productivity with smart tech: mice, keyboards, monitors, and more.",
    type: "website",
    url: "https://www.anadjytech.com/categories/work-study",
  },
  alternates: {
    canonical: "https://www.anadjytech.com/categories/work-study",
  },
}

export default function WorkStudyPage() {
  const products = [
    {
      name: "Logitech MX Master 3S",
      price: "$99.99",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
      description: "Advanced wireless mouse with precision tracking and customizable buttons for productivity.",
      specs: ["4000 DPI", "70-day battery", "USB-C charging", "Multi-device"],
      amazonUrl: "https://amazon.com/dp/B09HM94VDS",
    },
    {
      name: "Mechanical Keyboard",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
      description: "Premium mechanical keyboard with tactile switches and RGB backlighting.",
      specs: ["Cherry MX switches", "RGB lighting", "USB-C", "Programmable keys"],
      amazonUrl: "https://amazon.com/dp/B08W2CSXLM",
    },
    {
      name: "Monitor Light Bar",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1586953200969-2b65d56bd16b?w=400&h=300&fit=crop",
      description: "Asymmetric lighting bar that reduces eye strain during long work sessions.",
      specs: ["No screen glare", "Auto dimming", "Touch control", "USB powered"],
      amazonUrl: "https://amazon.com/dp/B08WT889V6",
    },
    {
      name: "4K External Monitor",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
      description: "27-inch 4K monitor with USB-C connectivity and height adjustment.",
      specs: ["4K resolution", "USB-C hub", "Height adjustable", "IPS panel"],
      amazonUrl: "https://amazon.com/dp/B08CZLBR5V",
    },
    {
      name: "Portable SSD 1TB",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
      description: "Ultra-fast portable SSD with USB-C for quick file transfers and backups.",
      specs: ["1TB capacity", "1050 MB/s", "USB-C 3.2", "Compact design"],
      amazonUrl: "https://amazon.com/dp/B08GTYFC37",
    },
    {
      name: "Noise-Cancelling Headphones",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
      description: "Premium wireless headphones with active noise cancellation for focused work.",
      specs: ["Active ANC", "30h battery", "Quick charge", "Multipoint"],
      amazonUrl: "https://amazon.com/dp/B09JQMJHXY",
    },
  ]

  const comparisonItems = [
    {
      name: "Logitech MX Master 3S",
      price: "$99.99",
      features: {
        DPI: "4000",
        "Battery Life": "70 days",
        Connectivity: "Wireless + USB-C",
        "Multi-device": "Yes (3 devices)",
        Customizable: "Yes",
      },
    },
    {
      name: "Mechanical Keyboard",
      price: "$129.99",
      features: {
        "Switch Type": "Cherry MX",
        Backlighting: "RGB",
        Connectivity: "USB-C",
        "Multi-device": "No",
        Customizable: "Yes",
      },
    },
    {
      name: "Monitor Light Bar",
      price: "$79.99",
      features: {
        "Light Type": "Asymmetric LED",
        "Power Source": "USB",
        Connectivity: "Touch control",
        "Multi-device": "Universal",
        Customizable: "Auto dimming",
      },
    },
  ]

  const faqs = [
    {
      question: "What gadgets improve productivity?",
      answer:
        "A good mouse, mechanical keyboard, proper lighting, and external monitor can significantly boost productivity by reducing strain and improving workflow efficiency.",
    },
    {
      question: "Do I need a light bar for my monitor?",
      answer:
        "A monitor light bar reduces eye strain during long work sessions by providing asymmetric lighting that illuminates your workspace without creating screen glare.",
    },
    {
      question: "Are wireless keyboards reliable?",
      answer:
        "Modern wireless keyboards are very reliable with long battery life, low latency, and stable connections. Many professionals prefer them for the clean desk setup.",
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
            <span className="text-white">Work & Study</span>
          </nav>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">Work & Study Gadgets</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Boost your productivity with smart tech.</p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{product.description}</p>

                  <div className="mb-4 flex-1">
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map((spec, specIndex) => (
                        <span key={specIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Buy on Amazon
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Product Comparison</h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  {comparisonItems.map((item, index) => (
                    <th key={index} className="p-4 text-center font-semibold">
                      {item.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Price</td>
                  {comparisonItems.map((item, index) => (
                    <td key={index} className="p-4 text-center font-bold text-blue-600">
                      {item.price}
                    </td>
                  ))}
                </tr>
                {Object.keys(comparisonItems[0].features).map((feature, featureIndex) => (
                  <tr key={featureIndex} className={featureIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-medium text-gray-900">{feature}</td>
                    {comparisonItems.map((item, itemIndex) => (
                      <td key={itemIndex} className="p-4 text-center text-gray-700">
                        {item.features[feature]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {comparisonItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-xl font-bold text-blue-600 mb-4">{item.price}</p>
                <div className="space-y-2">
                  {Object.entries(item.features).map(([feature, value], featureIndex) => (
                    <div key={featureIndex} className="flex justify-between">
                      <span className="font-medium text-gray-700">{feature}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6">
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
