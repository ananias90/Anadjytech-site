"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="relative py-12 sm:py-20 overflow-hidden hero-section"
      data-reveal
      style={{
        outline: "none",
        border: "none",
        boxShadow: "none",
        overflow: "hidden",
        marginTop: "0",
        paddingTop: "3rem",
        position: "relative",
        zIndex: 1,
        backgroundColor: "#1e3a8a", // blue-900 fallback
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-13%20at%208.48.59%20PM-bZ2M87FnUPofaEcQi0tWWY9IAEnSTQ.jpeg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#1e3a8a", // blue-900 fallback
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-900/98 via-blue-800/95 to-blue-700/92"
          style={{
            backgroundColor: "#1e3a8a", // Additional fallback
            backgroundImage:
              "linear-gradient(to right, rgba(30, 58, 138, 0.98), rgba(30, 64, 175, 0.95), rgba(29, 78, 216, 0.92))",
          }}
        ></div>
      </div>

      <div
        className="container mx-auto px-4 relative z-10"
        style={{
          outline: "none",
          border: "none",
          borderLeft: "0",
          borderRight: "0",
          boxShadow: "none",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0"
          style={{
            outline: "none",
            border: "none",
            borderLeft: "0",
            borderRight: "0",
            boxShadow: "none",
          }}
        >
          <div className="max-w-2xl text-center lg:text-left hero-fade-in-up" data-hero-headline>
            <h1
              className="font-bold text-white mb-6 sm:mb-8 leading-tight"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 3rem)", // Responsive scaling from 24px to 48px
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.7)",
                color: "#ffffff !important",
                backgroundColor: "transparent !important",
              }}
            >
              DISCOVER{" "}
              <span
                className="text-white font-black"
                style={{
                  textShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.7)",
                  color: "#ffffff !important",
                  backgroundColor: "transparent !important",
                }}
              >
                GADGETS
              </span>{" "}
              THAT
              <br className="hidden sm:block" />
              <span
                className="block sm:inline"
                style={{
                  textShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.7)",
                  color: "#ffffff !important",
                  backgroundColor: "transparent !important",
                }}
              >
                {" "}
                MAKE YOUR DAILY LIFE
              </span>
              <br className="hidden sm:block" />
              <span
                className="text-white font-black block sm:inline"
                style={{
                  textShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.7)",
                  color: "#ffffff !important",
                  backgroundColor: "transparent !important",
                }}
              >
                SMARTER
              </span>
            </h1>

            <div
              className="hero-cta flex flex-wrap gap-4 mt-6 relative z-2 justify-center lg:justify-start sm:inline-flex sm:gap-4 hero-fade-in-up-delayed"
              style={{
                marginTop: "22px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div className="grid gap-3 w-full sm:contents sm:w-auto">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-6 py-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:ring-4 focus:ring-blue-300 focus:ring-offset-2"
                  data-cta="shop-now"
                  data-reveal
                >
                  <Link href="/categories" aria-label="Shop now for the latest tech gadgets">
                    Shop Now
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/20 hover:text-white font-medium rounded-xl px-6 py-4 transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 bg-transparent"
                  style={{
                    textShadow: "0 3px 6px rgba(0, 0, 0, 0.9), 0 1px 3px rgba(0, 0, 0, 0.8)",
                    color: "#ffffff !important",
                    backgroundColor: "transparent !important",
                  }}
                  data-reveal
                >
                  <Link href="/categories#categories" aria-label="Browse product categories">
                    Browse Categories
                  </Link>
                </Button>
              </div>
            </div>

            <div className="max-w-xl mx-auto lg:mx-0 mt-8 hero-fade-in-left">
              <p
                className="text-white text-base sm:text-lg leading-relaxed"
                style={{
                  textShadow: "0 3px 6px rgba(0, 0, 0, 0.9), 0 1px 3px rgba(0, 0, 0, 0.8)",
                  color: "#ffffff !important",
                  backgroundColor: "transparent !important",
                }}
              >
                Welcome to AnadjyTech, your go-to destination for the latest and smartest tech gadgets on the market.
                Whether you're looking for smartphones, wireless speakers, home tech accessories, or the perfect
                high-tech gift — we've got everything you need to enhance your digital lifestyle.
              </p>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 hero-fade-in-up-delayed">
            <div className="w-60 sm:w-80 h-60 sm:h-80 relative group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Image  unoptimized width={300} height={300}
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_intro-WlxzrB3vuNCHtKyAcb9THtwZiesfE7.png"
                    alt="Tech Gadgets Gift Box"
                    className="w-48 sm:w-64 h-48 sm:h-64 object-contain drop-shadow-2xl transition-all duration-500 group-hover:drop-shadow-3xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
