import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FeaturedRows() {
  const featuredCards = [
    {
      title: "Latest Innovations",
      description: "Discover cutting-edge gadgets that just dropped.",
      buttonText: "Explore New Tech",
      href: "/categories?category=new-arrivals",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_Minimalistic_futuristic_flat_lay_of_the_latest_tech_g_3.jpg-N2zFu4xSbQ3TfQqwJUsaHY7BqPKdHI.jpeg",
    },
    {
      title: "Customer Favorites",
      description: "Top-rated picks loved by our community.",
      buttonText: "Shop Top Picks",
      href: "/categories?category=best-sellers",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_Minimalistic_futuristic_illustration_of_bestselling_g_0.jpg-JCwnUwtvXxNnLKgFaa5QEVIXp8GeIm.jpeg",
    },
    {
      title: "Exclusive Deals",
      description: "Limited-time savings on premium tech.",
      buttonText: "Grab Deals",
      href: "/categories?category=deals",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lucid_Origin_Minimalistic_futuristic_promotional_banner_with_b_1%20%281%29.jpg-NrZI8sk9OMxygUz8RZUhpyDkTLawkr.jpeg",
    },
  ]

  return (
    <section className="py-12 bg-gray-50" data-reveal>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden p-6"
              data-card
            >
              <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{card.description}</p>

              <Link href={card.href}>
                <Button className="w-full bg-[#0A67FF] hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition-all duration-300 focus:ring-4 focus:ring-blue-300">
                  {card.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
