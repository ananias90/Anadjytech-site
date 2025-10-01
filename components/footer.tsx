import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#002147] text-[#f1f1f1] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {/* Branding Column */}
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_anadjytech_white-E7BD4LO2QLCrovY9N5TIF9mYV7HPJt.png"
              alt="AnadjyTech Logo"
              width={300}
              unoptimized
              height={100}
              className="h-[70px] md:h-[100px] w-auto object-contain mb-4"
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                boxShadow: "none",
              }}
              priority
            />
            <p className="text-white font-medium mb-3 text-lg">The smart way to tech</p>
            <p className="text-[#f1f1f1] text-sm">
              Your go-to destination for the latest and smartest tech gadgets that make your daily life easier and more
              connected.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[#f1f1f1] hover:text-[#4da6ff] transition-all duration-300 ease-in-out relative group"
                >
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#4da6ff] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-[#f1f1f1] hover:text-[#4da6ff] transition-all duration-300 ease-in-out relative group"
                >
                  Categories
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#4da6ff] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#f1f1f1] hover:text-[#4da6ff] transition-all duration-300 ease-in-out relative group"
                >
                  Blog
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#4da6ff] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#f1f1f1] hover:text-[#4da6ff] transition-all duration-300 ease-in-out relative group"
                >
                  About Us
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#4da6ff] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#f1f1f1] hover:text-[#4da6ff] transition-all duration-300 ease-in-out relative group"
                >
                  Contact
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#4da6ff] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/affiliate-disclosure"
                  className="text-[#f1f1f1] hover:text-[#4da6ff] transition-all duration-300 ease-in-out relative group"
                >
                  Affiliate Disclosure
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#4da6ff] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[#f1f1f1] hover:text-[#4da6ff] transition-all duration-300 ease-in-out relative group"
                >
                  Privacy Policy
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#4da6ff] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-[#f1f1f1] hover:text-[#4da6ff] transition-all duration-300 ease-in-out relative group"
                >
                  Cookie Policy
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#4da6ff] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[#f1f1f1] hover:text-[#4da6ff] transition-all duration-300 ease-in-out relative group"
                >
                  Terms & Conditions
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#4da6ff] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Follow Us</h3>
            <div className="mb-4">
              <a
                href="mailto:contact@anadjytech.com"
                className="flex items-center gap-2 text-[#f1f1f1] hover:text-[#4da6ff] transition-all duration-300 ease-in-out text-sm"
                aria-label="Send us an email"
              >
                <Mail className="w-4 h-4" />
                <span>contact@anadjytech.com</span>
              </a>
            </div>
            <div className="flex items-start gap-4">
              <a
                href="https://x.com/AnadjyTech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f1f1f1] hover:text-[#4da6ff] transition-all duration-300 ease-in-out cursor-pointer"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/anadjytech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f1f1f1] hover:text-[#4da6ff] transition-all duration-300 ease-in-out cursor-pointer"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61573915410639"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f1f1f1] hover:text-[#4da6ff] transition-all duration-300 ease-in-out cursor-pointer"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-[#f1f1f1]">
          <p>&copy; 2025 AnadjyTech. All rights reserved.</p>
          <p className="mt-2 text-xs text-[#555] opacity-75">
            As an Amazon Associate, we may earn commissions from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
