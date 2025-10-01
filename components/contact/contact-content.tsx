"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function ContactContent() {
  const [formData, setFormData] = useState({
    topic: "",
    fullName: "",
    email: "",
    orderId: "",
    message: "",
    consent: false,
    marketing: false,
    honeypot: "", // Anti-spam honeypot field
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  const showSuccessToast = (message: string) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 5000)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.topic) newErrors.topic = "Please select a topic"
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters"
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters"
    }
    if (!formData.consent) newErrors.consent = "You must agree to our privacy policy"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Anti-spam: Check honeypot
    if (formData.honeypot) {
      console.log("Spam detected")
      return
    }

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      showSuccessToast("Thank you for your message! We'll get back to you within 24 hours.")
      setFormData({
        topic: "",
        fullName: "",
        email: "",
        orderId: "",
        message: "",
        consent: false,
        marketing: false,
        honeypot: "",
      })
      setErrors({})
      setIsSubmitting(false)

      // Anti-spam: Disable submit for 5 seconds after submission
      setTimeout(() => {
        setIsSubmitting(false)
      }, 5000)
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  return (
    <main>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
          <img src="/icons/check-circle.svg" alt="Check Circle" className="w-5 h-5" />
          <span>{toastMessage}</span>
          <button onClick={() => setShowToast(false)} className="ml-2">
            <img src="/icons/x.svg" alt="Close" className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section
        className="relative min-h-[440px] lg:min-h-[520px] flex items-center justify-center overflow-hidden"
        data-reveal
      >
        {/* Background Images - Responsive */}
        <div className="absolute inset-0 z-0">
          {/* Mobile Background */}
          <Image
            src="/about-hero-blue-soft-828x600.webp"
            alt=""
            width={828}
            unoptimized
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-center lg:hidden"
            loading="lazy"
            role="presentation"
          />
          {/* Tablet Background */}
          <Image
            src="/about-hero-blue-soft-1366x700.webp"
            alt=""
            width={1366}
            unoptimized
            height={700}
            className="absolute inset-0 w-full h-full object-cover object-center hidden lg:block xl:hidden"
            loading="lazy"
            role="presentation"
          />
          {/* Desktop Background */}
          <Image
            src="/about-hero-blue-soft-1920x900.webp"
            alt=""
            width={1920}
            unoptimized
            height={900}
            className="absolute inset-0 w-full h-full object-cover object-center hidden xl:block"
            priority
            role="presentation"
          />
        </div>

        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-35 lg:bg-opacity-40 z-10"></div>

        {/* Soft Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-20"></div>

        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-30 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            We're here to help with any questions, support needs, or feedback you may have.
          </p>
        </div>
      </section>

      {/* USP Strip */}
      <section className="bg-[#f7f9fc] py-6" data-reveal>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-[#0A67FF] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 3h15v13H1z" />
                <path d="M16 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <span className="text-sm font-medium text-[#333] whitespace-nowrap">Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-[#0A67FF] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18H9" />
                <path d="M19 18h2l-3.5-7L19 4" />
                <path d="M5 18h2l-3.5-7L5 4" />
                <path d="M9 18h6" />
              </svg>
              <span className="text-sm font-medium text-[#333] whitespace-nowrap">30-Day Free Returns</span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-[#0A67FF] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              </svg>
              <span className="text-sm font-medium text-[#333] whitespace-nowrap">Secure Checkout</span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-[#0A67FF] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
              <span className="text-sm font-medium text-[#333] whitespace-nowrap">Curated Tech Picks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 bg-white" data-reveal>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0A67FF] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/icons/mail.svg" alt="Mail" className="w-8 h-8 text-[#0A67FF]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email Support</h3>
              <a
                href="mailto:contact@anadjytech.com"
                className="text-[#0A67FF] hover:text-blue-700 transition-colors font-medium"
              >
                contact@anadjytech.com
              </a>
              <p className="text-sm text-gray-600 mt-2">We respond within 24 hours</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0A67FF] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/icons/phone.svg" alt="Phone" className="w-8 h-8 text-[#0A67FF]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Phone Support</h3>
              <a href="tel:+19549515873" className="text-[#0A67FF] hover:text-blue-700 transition-colors font-medium">
                +1(954) 951-5873
              </a>
              <p className="text-sm text-gray-600 mt-2">Mon–Fri, 9:00–18:00</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0A67FF] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/icons/clock.svg" alt="Clock" className="w-8 h-8 text-[#0A67FF]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Business Hours</h3>
              <p className="text-gray-600 font-medium">Mon–Fri, 9:00–18:00</p>
              <p className="text-sm text-gray-600 mt-2">Weekend support via email</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0A67FF] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/icons/map-pin.svg" alt="Map Pin" className="w-8 h-8 text-[#0A67FF]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600 font-medium">Based in Miami, Florida</p>
              <p className="text-sm text-gray-600 mt-2">Serving readers worldwide</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0A67FF] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/icons/help-circle.svg" alt="Help Circle" className="w-8 h-8 text-[#0A67FF]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">FAQ</h3>
              <a href="/about#faq" className="text-[#0A67FF] hover:text-blue-700 transition-colors font-medium">
                View FAQ
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Quick answers about our reviews, deals, and affiliate process
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0A67FF] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/icons/rotate-cw.svg" alt="Rotate CW" className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Returns</h3>
              <a
                href="/categories#returns"
                className="text-[#0A67FF] hover:text-blue-700 transition-colors font-medium"
              >
                Return Policy
              </a>
              <p className="text-sm text-gray-600 mt-2">30-day return support for affiliate partners</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Connect with Us</h3>
              <div
                className="flex items-center justify-center gap-6 mt-4 md:gap-8"
                role="group"
                aria-label="Social links"
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61573915410639"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit AnadjyTech on Facebook"
                  className="transition-transform hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-blue-600 hover:text-blue-800 md:w-8 md:h-8"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/AnadjyTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit AnadjyTech on Instagram"
                  className="transition-transform hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-blue-600 hover:text-blue-800 md:w-8 md:h-8"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.689.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.205.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/AnadjyTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit AnadjyTech on Twitter"
                  className="transition-transform hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-blue-600 hover:text-blue-800 md:w-8 md:h-8"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#f7f9fc]" data-reveal>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Send Us a Message</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6" data-contact>
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                    Topic *
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A67FF] focus:border-transparent"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="order">Order Status</option>
                    <option value="return">Returns & Refunds</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                  {errors.topic && <p className="text-red-500 text-sm mt-1">{errors.topic}</p>}
                </div>

                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Your full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-2">
                    Order ID (optional)
                  </label>
                  <Input
                    type="text"
                    id="orderId"
                    name="orderId"
                    value={formData.orderId}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="e.g., ORD-123456"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message * (20-1000 characters)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[150px]"
                    placeholder="Tell us how we can help you..."
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    {errors.message && <p className="text-red-500">{errors.message}</p>}
                    <span className="ml-auto">{formData.message.length}/1000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Attachment (optional, up to 5 MB)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0A67FF] transition-colors">
                    <img src="/icons/upload.svg" alt="Upload" className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF up to 5MB</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-[#0A67FF] border-gray-300 rounded focus:ring-[#0A67FF]"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-700">
                      I agree to the{" "}
                      <a href="/privacy" className="text-[#0A67FF] hover:text-blue-700">
                        Privacy Policy
                      </a>{" "}
                      and consent to the processing of my personal data. *
                    </label>
                  </div>
                  {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="marketing"
                      name="marketing"
                      checked={formData.marketing}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-[#0A67FF] border-gray-300 rounded focus:ring-[#0A67FF]"
                    />
                    <label htmlFor="marketing" className="text-sm text-gray-700">
                      I would like to receive marketing communications and product updates from NadjyTech.
                    </label>
                  </div>
                </div>

                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0A67FF] hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-16 bg-white" data-reveal>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h2>
            <p className="text-gray-600">Based in Miami, serving readers worldwide</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Miami,Florida&z=10&output=embed"
                  className="w-full h-80 sm:h-96 lg:h-[380px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map of Miami, Florida"
                  title="Google Maps showing Miami, Florida"
                ></iframe>
              </div>
              <div className="text-center mt-4">
                <p className="text-gray-600 mb-2">Based in Miami, serving readers worldwide.</p>
                <a
                  href="https://www.google.com/maps?q=Miami,Florida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A67FF] hover:text-blue-700 transition-colors text-sm font-medium"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section className="py-16 bg-[#f7f9fc]" data-reveal>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Follow Us</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
            <a
              href="https://www.facebook.com/profile.php?id=61573915410639"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit AnadjyTech on Facebook"
              className="transition-all duration-300 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#007BFF] hover:text-[#0056b3]"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/AnadjyTech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit AnadjyTech on Instagram"
              className="transition-all duration-300 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#007BFF] hover:text-[#0056b3]"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.205.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/AnadjyTech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit AnadjyTech on Twitter"
              className="transition-all duration-300 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#007BFF] hover:text-[#0056b3]"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
