"use client"

import { Button } from "../ui/button"

import { Truck, RotateCcw, Shield, Star, ChevronDown, Users, Award, Heart, Leaf, Zap, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function AboutContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[440px] lg:min-h-[520px] py-16 sm:py-20 overflow-hidden bg-[#4472C4]">
        <div className="absolute inset-0">
          <img src="/modern-tech-company-office-with-gadgets-and-innova.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        {/* Dark Blue Overlay - Responsive opacity (34-36% mobile, 38-40% desktop) */}
        <div className="absolute inset-0 bg-[#0A67FF]/[0.35] lg:bg-[#0A67FF]/[0.39]"></div>

        {/* Soft Bottom Fade - Responsive height (48px mobile, 64px desktop) */}
        <div className="absolute bottom-0 left-0 right-0 h-12 lg:h-16 bg-gradient-to-t from-white to-transparent"></div>

        {/* Content - Constrained to max-width 800px and centered */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">About AnadjyTech</h1>
            <p className="text-xl sm:text-2xl text-white font-semibold mb-6">
              Your trusted destination for the latest and smartest tech gadgets.
            </p>
          </div>
        </div>
      </section>

      {/* USP Strip */}
      <section className="bg-[#f7f9fc] py-4 sm:py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
              <Truck className="w-5 h-5 text-[#0A67FF] flex-shrink-0" />
              <span className="text-sm font-medium text-[#333]">Free Worldwide Shipping</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
              <RotateCcw className="w-5 h-5 text-[#0A67FF] flex-shrink-0" />
              <span className="text-sm font-medium text-[#333]">30-Day Free Returns</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
              <Shield className="w-5 h-5 text-[#0A67FF] flex-shrink-0" />
              <span className="text-sm font-medium text-[#333]">Secure Checkout</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
              <Star className="w-5 h-5 text-[#0A67FF] flex-shrink-0" />
              <span className="text-sm font-medium text-[#333]">Curated Tech Picks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12">Mission & Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-left">
                <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-gray-100">
                  <img src="/team-mission-smart-tech-simple-guidance.jpg" alt="Our Mission" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We make smart tech simple — curated picks, clear guidance, and friendly support.
                </p>
              </div>
              <div className="text-left">
                <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-gray-100">
                  <img src="/company-growth-timeline-2019-to-2025-global-expans.jpg" alt="Our Story" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded in 2019; today serving customers in 60+ countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-[#f7f9fc] py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Star className="w-12 h-12 text-[#0A67FF] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Curated Shop</h3>
              <p className="text-gray-600">Only gear that passes our checks</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <CheckCircle className="w-12 h-12 text-[#0A67FF] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Clear Guides</h3>
              <p className="text-gray-600">Reviews, how-tos, buying advice</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-[#0A67FF] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality & Warranty</h3>
              <p className="text-gray-600">Trusted brands, 30-day returns</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Heart className="w-12 h-12 text-[#0A67FF] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Friendly Support</h3>
              <p className="text-gray-600">Quick, human help</p>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">By the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#0A67FF] mb-2">25k+</div>
              <div className="text-gray-600">Happy customers</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#0A67FF] mb-2">400+</div>
              <div className="text-gray-600">Products curated</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#0A67FF] mb-2">60+</div>
              <div className="text-gray-600">Countries shipped</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#0A67FF] mb-2">4.8/5</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-[#f7f9fc] py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Our Values</h2>
            <div className="max-w-2xl mx-auto mb-8">
              <img src="/company-values-customer-first-reliability-accessib.jpg" alt="Our Values" className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <Users className="w-16 h-16 text-[#0A67FF] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Customer-first</h3>
            </div>
            <div className="text-center">
              <Award className="w-16 h-16 text-[#0A67FF] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Reliability</h3>
            </div>
            <div className="text-center">
              <Zap className="w-16 h-16 text-[#0A67FF] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Accessibility</h3>
            </div>
            <div className="text-center">
              <Leaf className="w-16 h-16 text-[#0A67FF] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainability</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Our Journey</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#0A67FF] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2019
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Launch</h3>
                  <p className="text-gray-600">AnadjyTech was founded with a mission to simplify tech</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#0A67FF] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2021
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">10k orders</h3>
                  <p className="text-gray-600">Reached our first major milestone</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#0A67FF] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2023
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Smart-home expansion</h3>
                  <p className="text-gray-600">Expanded into smart home technology</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#0A67FF] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2025
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Global shipping & guides</h3>
                  <p className="text-gray-600">Launched worldwide shipping and comprehensive guides</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-[#f7f9fc] py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Meet the Team</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ananias.jpg-BFowHCx1H10WEDpf6rUZdrHt64tlxA.jpeg"
                  alt="Portrait of Ananias Cerlus"
                  width={300}
                  height={300}
                  className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ananias Cerlus</h3>
              <h4 className="text-[#0A67FF] font-medium mb-3">Founder & Tech Enthusiast</h4>
              <p className="text-gray-600 text-sm">
                Passionate about making smart tech gadgets simple and accessible for everyone.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rozie%20saintima.jpg-nO5uexSX4R1dqMwrXK9wwe3dQDHR60.jpeg"
                  alt="Portrait of Rozie Saintima"
                  width={300}
                  height={300}
                  className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Rozie Saintima</h3>
              <h4 className="text-[#0A67FF] font-medium mb-3">Co-Founder & Content Lead</h4>
              <p className="text-gray-600 text-sm">
                Focused on clear, helpful content to guide readers toward the best tech choices and reviews.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chen.jpg-V6EoZpQbnUxlOoLtIQDZfnf6OCSVut.jpeg"
                  alt="Portrait of Davi Johnley"
                  width={300}
                  height={300}
                  className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Davi Johnley</h3>
              <h4 className="text-[#0A67FF] font-medium mb-3">Partner & Marketing Advisor</h4>
              <p className="text-gray-600 text-sm">
                Helping AnadjyTech grow and reach tech lovers worldwide with smart gadgets and guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-800 ml-2">4.8/5</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 italic mb-4">
                "AnadjyTech helped me find the perfect smart home setup. Their guides are so clear and helpful!"
              </p>
              <p className="font-semibold text-gray-800">— Jennifer M.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 italic mb-4">
                "Fast shipping, great products, and amazing customer service. Highly recommend!"
              </p>
              <p className="font-semibold text-gray-800">— Robert K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f7f9fc] py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What are your shipping times?",
                answer: "We offer free worldwide shipping with delivery times of 3-7 business days for most locations.",
              },
              {
                question: "What is your return policy?",
                answer: "We offer a 30-day free return policy on all products. Items must be in original condition.",
              },
              {
                question: "Do you provide warranty on products?",
                answer: "Yes, all products come with manufacturer warranty plus our additional quality guarantee.",
              },
              {
                question: "Is your checkout secure?",
                answer: "Absolutely. We use industry-standard SSL encryption and secure payment processing.",
              },
              {
                question: "How can I contact support?",
                answer: "You can reach our friendly support team via email, live chat, or phone during business hours.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0A67FF] focus:ring-inset"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
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
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#0A67FF] py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to discover the latest in smart tech?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/categories">
              <Button className="bg-white text-[#0A67FF] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                Shop the Latest Tech
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A67FF] px-8 py-4 text-lg font-semibold rounded-lg transition-colors bg-transparent"
              >
                Read our Guides
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
