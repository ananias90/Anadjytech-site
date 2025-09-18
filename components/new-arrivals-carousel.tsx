"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Anker 65W GaN USB-C Charger",
    description: "Compact fast charger for phones & laptops.",
    specs: ["65W GaN", "Dual USB-C", "Foldable plug"],
    image: "https://images.unsplash.com/photo-1555618568-9e1f6d6d3a3b?w=400&h=300&fit=crop",
    amazonUrl: "https://amazon.com/dp/example1",
    reviewUrl: "/blog",
  },
  {
    id: 2,
    name: "Baseus 8-in-1 USB-C Hub",
    description: "Expand your laptop with HDMI, USB, SD & more.",
    specs: ["4K HDMI", "PD 100W", "Aluminum build"],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    amazonUrl: "https://amazon.com/dp/example2",
    reviewUrl: "/blog",
  },
  {
    id: 3,
    name: "Smart Plug (WiFi)",
    description: "Automate lights & appliances with your voice.",
    specs: ["WiFi 2.4GHz", "App Control", "Energy Monitor"],
    image: "https://images.unsplash.com/photo-1510552776732-01acc9a4c8da?w=400&h=300&fit=crop",
    amazonUrl: "https://amazon.com/dp/example3",
    reviewUrl: "/blog",
  },
  {
    id: 4,
    name: "Sony WH-1000XM5 Headphones",
    description: "Noise-cancelling headphones for pure sound.",
    specs: ["ANC", "30h Battery", "Bluetooth 5.2"],
    image: "https://images.unsplash.com/photo-1601933470686-3ccf88dd3b87?w=400&h=300&fit=crop",
    amazonUrl: "https://amazon.com/dp/example4",
    reviewUrl: "/blog",
  },
  {
    id: 5,
    name: "LED TV Backlight Strip",
    description: "Immersive RGB lighting for your 4K TV.",
    specs: ["Music Sync", "App Control", "USB-powered"],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    amazonUrl: "https://amazon.com/dp/example5",
    reviewUrl: "/blog",
  },
]

export default function NewArrivalsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const getCardsPerView = () => {
    if (typeof window === "undefined") return 1
    if (window.innerWidth >= 1024) return 3 // desktop
    if (window.innerWidth >= 768) return 2 // tablet
    return 1 // mobile
  }

  const [cardsPerView, setCardsPerView] = useState(1)

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(getCardsPerView())
    }

    updateCardsPerView()
    window.addEventListener("resize", updateCardsPerView)
    return () => window.removeEventListener("resize", updateCardsPerView)
  }, [])

  const maxSlides = Math.max(0, products.length - cardsPerView)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, maxSlides])

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.min(index, maxSlides))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
  }

  return (
    <section className="w-full py-16 bg-gray-50" style={{ marginTop: "60px", marginBottom: "60px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a2b6d] mb-4 relative inline-block">
            New Arrivals
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600">Latest tech picks curated for you</p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white hover:shadow-xl transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white hover:shadow-xl transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Carousel Container */}
          <div
            className="overflow-hidden rounded-lg"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
                width: `${(products.length / cardsPerView) * 100}%`,
              }}
            >
              {products.map((product) => (
                <div key={product.id} className="flex-shrink-0 px-2" style={{ width: `${100 / products.length}%` }}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                    {/* Product Image */}
                    <div className="h-[200px] md:h-[250px] overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex flex-col flex-grow">
                      {/* Product Title */}
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">{product.description}</p>

                      {/* Buy Button */}
                      <a
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noreferrer nofollow sponsored noopener"
                        className="w-full bg-[#0066cc] hover:bg-blue-700 text-white font-semibold py-2 px-4 text-sm md:text-base rounded-lg transition-colors text-center block"
                      >
                        Check price on Amazon
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index ? "bg-[#1a2b6d] scale-110" : "bg-gray-400 hover:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
