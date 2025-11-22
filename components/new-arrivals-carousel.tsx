"use client"

import type React from "react"
import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Product } from "@/lib/api/products"
import Slider from "react-slick"

// Import slick carousel styles
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface NewArrivalsCarouselProps {
  products?: Product[]
}

// Custom arrow components
const NextArrow = (props: any) => {
  const { onClick } = props
  return (
    <button
      onClick={onClick}
      className="absolute 2xl:-right-12 -right-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white hover:shadow-xl transition-all duration-200"
      aria-label="Next slide"
    >
      <ChevronRight className="w-5 h-5 text-gray-700" />
    </button>
  )
}

const PrevArrow = (props: any) => {
  const { onClick } = props
  return (
    <button
      onClick={onClick}
      className="absolute 2xl:-left-12 -left-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white hover:shadow-xl transition-all duration-200"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-5 h-5 text-gray-700" />
    </button>
  )
}

export default function NewArrivalsCarousel({ products: apiProducts = [] }: NewArrivalsCarouselProps) {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sliderRef = useRef<Slider>(null)

  // Ensure products is a valid array
  const products = Array.isArray(apiProducts) && apiProducts.length > 0 ? apiProducts : []

  // Don't render if no products
  if (products.length === 0) {
    return null
  }

  // React Slick configuration
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: isAutoPlaying,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center gap-2 mt-8">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-400 transition-all duration-200"></div>
    ),
    dotsClass: "slick-dots custom-dots"
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

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <Slider ref={sliderRef} {...sliderSettings}>
            {products.map((product) => (
              <div key={product._id || product.id} className="px-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  {/* Product Image */}
                  <div className="h-[200px] md:h-[250px] overflow-hidden">
                    <Link href={`/products/${product.slug}`}>
                      <Image
                        src={product.images && product.images.length > 0 ? product.images[0] : "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </Link>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    {/* Product Title */}
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-900">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-3  min-h-10 line-clamp-2 flex-grow">
                      {product.shortDescription || product.description}
                    </p>

                    {/* Buy Button */}
                    {product.amazonUrl || product.amazonLink ? (
                      <Link
                        href={product.amazonUrl || product.amazonLink || "#"}
                        target="_blank"
                        aria-label={`Check price for ${product.name} on Amazon`}
                        rel="noreferrer nofollow sponsored noopener"
                        className="w-full bg-[#0066cc] hover:bg-blue-700 text-white font-semibold py-2 px-4 text-sm md:text-base rounded-lg transition-colors text-center block"
                      >
                        Check price on Amazon
                      </Link>
                    ) : (
                      <Link
                        href={`/products/${product.slug}`}
                        className="w-full bg-[#0066cc] hover:bg-blue-700 text-white font-semibold py-2 px-4 text-sm md:text-base rounded-lg transition-colors text-center block"
                      >
                        View Details
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom CSS for slick dots */}
      <style jsx global>{`
        .slick-dots.custom-dots li {
          width: auto;
          height: auto;
          margin: 0 4px;
        }
        
        .slick-dots.custom-dots li.slick-active div {
          background-color: #1a2b6d;
          transform: scale(1.1);
        }
        
        .slick-dots.custom-dots li button:before {
          display: none;
        }
        
        /* Hide default slick arrows since we're using custom ones */
        .slick-prev, .slick-next {
          display: none !important;
        }
      `}</style>
    </section>
  )
}