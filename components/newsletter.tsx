"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      if (email.includes("@")) {
        setStatus("success")
        setMessage("Thank you! Check your email for your 10% discount code.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage("Please enter a valid email address.")
      }
    }, 1000)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-[#f0f4ff] to-white" data-reveal>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Get the latest tech trends & deals in your inbox
          </h2>

          {/* <p className="text-gray-600 text-lg mb-8">Join our newsletter today and get 10% off your first purchase.</p> */}

          <div className="max-w-md mx-auto mb-4">
            <form onSubmit={handleSubmit} className="space-y-4" data-newsletter>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white border border-gray-200 text-gray-800 placeholder-gray-500 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  disabled={status === "loading"}
                  aria-label="Email address"
                />
                <Button
                  type="submit"
                  disabled={status === "loading" || !email}
                  className="bg-[#0A67FF] hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="flex items-center justify-center gap-2 text-green-600 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>{message}</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center justify-center gap-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{message}</span>
                </div>
              )}
            </form>
          </div>

          {/* <p className="text-gray-500 text-sm">We respect your privacy. Unsubscribe anytime.</p> */}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
