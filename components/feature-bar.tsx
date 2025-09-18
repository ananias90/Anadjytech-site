import { Truck, RefreshCw, Shield, Star } from "lucide-react"

export default function FeatureBar() {
  const features = [
    {
      icon: Truck,
      title: "Free Worldwide Shipping",
    },
    {
      icon: RefreshCw,
      title: "30-Day Free Returns",
    },
    {
      icon: Shield,
      title: "Secure Checkout",
    },
    {
      icon: Star,
      title: "Curated Tech Picks",
    },
  ]

  return (
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-[#0066cc]" />
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">{feature.title}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
