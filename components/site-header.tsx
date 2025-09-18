"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

const searchSuggestions = [
  "USB-C charger",
  "Smartwatch",
  "Bluetooth speaker",
  "Wireless earbuds",
  "4K TV calibration",
  "Smart home devices",
  "Laptop accessories",
]

let globalSearchQuery = ""
let globalSearchCallback: ((query: string) => void) | null = null

export function setSearchCallback(callback: (query: string) => void) {
  globalSearchCallback = callback
}

export function getSearchQuery() {
  return globalSearchQuery
}

const RECENT_SEARCHES_KEY = "anadjytech_recent_searches"
const MAX_RECENT_SEARCHES = 5

function getRecentSearches(): string[] {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function addRecentSearch(query: string) {
  if (typeof window === "undefined" || !query.trim()) return

  const recent = getRecentSearches()
  const filtered = recent.filter((item) => item.toLowerCase() !== query.toLowerCase())
  const updated = [query, ...filtered].slice(0, MAX_RECENT_SEARCHES)

  try {
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated))
  } catch {
    // Ignore localStorage errors
  }
}

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
)

function SearchInput({
  className,
  placeholder,
  isMobile = false,
}: { className?: string; placeholder: string; isMobile?: boolean }) {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null)
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  useEffect(() => {
    setRecentSearches(getRecentSearches())
  }, [])

  const performSearch = (query: string) => {
    globalSearchQuery = query
    if (globalSearchCallback) {
      globalSearchCallback(query)
    }
  }

  const navigateToSearch = (query: string) => {
    if (query.trim()) {
      addRecentSearch(query.trim())
      setRecentSearches(getRecentSearches())
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const handleInputChange = (value: string) => {
    setSearchValue(value)
    setSelectedSuggestionIndex(-1)

    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }

    const timer = setTimeout(() => {
      performSearch(value)
    }, 250)

    setDebounceTimer(timer)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion)
    setShowSuggestions(false)
    setSelectedSuggestionIndex(-1)
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
    navigateToSearch(suggestion)
  }

  const handleInputFocus = () => {
    setShowSuggestions(true)
    setSelectedSuggestionIndex(-1)
  }

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false)
      setSelectedSuggestionIndex(-1)
    }, 200)
  }

  const allSuggestions = [
    ...recentSearches,
    ...searchSuggestions.filter((s) => !recentSearches.some((r) => r.toLowerCase() === s.toLowerCase())),
  ]

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (selectedSuggestionIndex >= 0 && selectedSuggestionIndex < allSuggestions.length) {
        const selectedSuggestion = allSuggestions[selectedSuggestionIndex]
        setSearchValue(selectedSuggestion)
        setShowSuggestions(false)
        setSelectedSuggestionIndex(-1)
        navigateToSearch(selectedSuggestion)
      } else {
        setShowSuggestions(false)
        setSelectedSuggestionIndex(-1)
        navigateToSearch(searchValue)
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false)
      setSelectedSuggestionIndex(-1)
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (showSuggestions) {
        setSelectedSuggestionIndex((prev) => (prev < allSuggestions.length - 1 ? prev + 1 : 0))
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (showSuggestions) {
        setSelectedSuggestionIndex((prev) => (prev > 0 ? prev - 1 : allSuggestions.length - 1))
      }
    }
  }

  const handleClear = () => {
    setSearchValue("")
    setShowSuggestions(false)
    setSelectedSuggestionIndex(-1)
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
    performSearch("")
  }

  const handleSearchClick = () => {
    setShowSuggestions(false)
    setSelectedSuggestionIndex(-1)
    navigateToSearch(searchValue)
  }

  return (
    <div className="relative">
      <input
        id="site-search-input"
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={handleKeyDown}
        className={`${className} bg-gray-50 text-gray-700 placeholder-gray-500 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
        style={{
          color: "#333",
          backgroundColor: "#f5f5f5",
        }}
        aria-expanded={showSuggestions}
        aria-haspopup="listbox"
        role="combobox"
        aria-autocomplete="list"
        aria-activedescendant={selectedSuggestionIndex >= 0 ? `suggestion-${selectedSuggestionIndex}` : undefined}
      />

      {searchValue && (
        <button
          onClick={handleClear}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Clear search"
        >
          <XIcon className="w-4 h-4" />
        </button>
      )}

      <button
        onClick={handleSearchClick}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        aria-label="Search"
      >
        <SearchIcon className="w-4 h-4" />
      </button>

      {showSuggestions && (
        <div
          id="site-search-suggestions"
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"
          role="listbox"
          aria-label="Search suggestions"
        >
          {recentSearches.length > 0 && (
            <>
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b border-gray-100">
                Recent Searches
              </div>
              {recentSearches.map((search, index) => (
                <button
                  key={`recent-${index}`}
                  id={`suggestion-${index}`}
                  className={`suggestion-item w-full text-left px-4 py-2 text-gray-700 text-sm transition-colors duration-150 ${
                    selectedSuggestionIndex === index ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleSuggestionClick(search)}
                  role="option"
                  aria-selected={selectedSuggestionIndex === index}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {search}
                  </div>
                </button>
              ))}
              {searchSuggestions.length > 0 && (
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b border-gray-100">
                  Suggestions
                </div>
              )}
            </>
          )}
          {searchSuggestions
            .filter((s) => !recentSearches.some((r) => r.toLowerCase() === s.toLowerCase()))
            .map((suggestion, index) => {
              const adjustedIndex = recentSearches.length + index
              return (
                <button
                  key={`suggestion-${index}`}
                  id={`suggestion-${adjustedIndex}`}
                  className={`suggestion-item w-full text-left px-4 py-2 text-gray-700 text-sm transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${
                    selectedSuggestionIndex === adjustedIndex ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50"
                  }`}
                  data-value={suggestion.toLowerCase()}
                  onClick={() => handleSuggestionClick(suggestion.toLowerCase())}
                  role="option"
                  aria-selected={selectedSuggestionIndex === adjustedIndex}
                >
                  {suggestion}
                </button>
              )
            })}
        </div>
      )}
    </div>
  )
}

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
        hamburgerRef.current?.focus()
      }
    }

    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div
        className="w-full sticky top-0 z-[60] bg-blue-600"
        style={{
          backgroundColor: "#0B5FE0",
          color: "#ffffff",
          background: "#0B5FE0",
        }}
      >
        <div className="mx-auto max-w-screen-2xl px-3 md:px-4 py-1 md:py-1.5">
          {/* Desktop layout */}
          <div className="hidden md:flex items-center justify-between gap-3">
            {/* Left: Email */}
            <div className="flex items-center gap-2">
              <a
                href="mailto:contact@anadjytech.com"
                className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/40 rounded px-1"
                aria-label="Send us an email"
                style={{ color: "#ffffff !important" }}
              >
                <MailIcon className="w-4 h-4" style={{ color: "#ffffff !important" }} />
                <span style={{ color: "#ffffff !important", backgroundColor: "transparent !important" }}>
                  contact@anadjytech.com
                </span>
              </a>
            </div>

            {/* Center: Nouveau bandeau sobre */}
            <div className="flex items-center gap-2 text-center">
              <span
                className="text-sm font-medium"
                style={{ color: "#ffffff !important", backgroundColor: "transparent !important" }}
              >
                Smart tech picks · Honest reviews · Affiliate links to Amazon
              </span>
            </div>

            {/* Right: 3 icônes sociales seulement */}
            <div className="flex items-center gap-1">
              <a
                href="https://x.com/AnadjyTech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40 transition-opacity"
                aria-label="Follow us on X (Twitter)"
                style={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TwitterIcon className="w-4 h-4" style={{ color: "#ffffff !important" }} />
              </a>
              <a
                href="https://www.instagram.com/anadjytech/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40 transition-opacity"
                aria-label="Follow us on Instagram"
                style={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InstagramIcon className="w-4 h-4" style={{ color: "#ffffff !important" }} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61573915410639"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40 transition-opacity"
                aria-label="Follow us on Facebook"
                style={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FacebookIcon className="w-4 h-4" style={{ color: "#ffffff !important" }} />
              </a>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex flex-wrap items-center justify-between gap-3">
            {/* Email - order 1 */}
            <div className="order-1 flex items-center gap-2">
              <a
                href="mailto:contact@anadjytech.com"
                className="flex items-center gap-2 text-xs font-medium hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/40 rounded px-1"
                aria-label="Send us an email"
                style={{ color: "#ffffff !important" }}
              >
                <MailIcon className="w-3 h-3" style={{ color: "#ffffff !important" }} />
                <span style={{ color: "#ffffff !important", backgroundColor: "transparent !important" }}>
                  contact@anadjytech.com
                </span>
              </a>
            </div>

            {/* Social icons - order 3, alignées à droite */}
            <div className="order-3 flex items-center gap-1 ml-auto">
              <a
                href="https://x.com/AnadjyTech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40 transition-opacity"
                aria-label="Follow us on X (Twitter)"
                style={{
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TwitterIcon className="w-3 h-3" style={{ color: "#ffffff !important" }} />
              </a>
              <a
                href="https://www.instagram.com/anadjytech/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40 transition-opacity"
                aria-label="Follow us on Instagram"
                style={{
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InstagramIcon className="w-3 h-3" style={{ color: "#ffffff !important" }} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61573915410639"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40 transition-opacity"
                aria-label="Follow us on Facebook"
                style={{
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FacebookIcon className="w-3 h-3" style={{ color: "#ffffff !important" }} />
              </a>
            </div>

            {/* Bandeau sobre - order 2, full width, centered */}
            <div className="order-2 w-full text-center mt-1">
              <span
                className="text-xs font-medium"
                style={{ color: "#ffffff !important", backgroundColor: "transparent !important" }}
              >
                Smart tech picks · Honest reviews · Affiliate links to Amazon
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header - Adjusted height and spacing for compact design */}
      <header className="bg-white shadow-sm sticky top-0 z-[70]" style={{ height: "80px" }}>
        <div className="container mx-auto px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between gap-6 h-full">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_anadjytech_transparent-NESbl2XszuZcgBbDQcoPKzB3I3rcB1.png"
                  alt="AnadjyTech Logo"
                  width={300}
                  height={120}
                  className="h-20 lg:h-24 w-auto object-contain"
                  priority
                  style={{ background: "transparent" }}
                />
              </div>
            </Link>

            <div className="hidden md:block flex-1 w-72 mx-6">
              <SearchInput className="w-full pl-4 pr-12 py-2.5" placeholder="Search gadgets..." />
            </div>

            {/* Mobile menu button */}
            <button
              ref={hamburgerRef}
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation - Adjusted spacing to 20-28px */}
            <nav className="hidden md:flex items-center gap-7 flex-shrink-0">
              <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/categories" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                Categories
              </Link>
              <Link href="/blog" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation Menu - Restored conditional rendering and transitions */}
        {isMenuOpen && (
          <>
            <div className="fixed inset-0 bg-black/20 z-[80] md:hidden" onClick={closeMenu} aria-hidden="true" />

            <div
              id="mobile-menu"
              ref={menuRef}
              className={`fixed inset-x-0 bg-white shadow-2xl z-[90] md:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "top-[136px] opacity-100 translate-y-0"
                  : "top-[136px] opacity-0 -translate-y-4 pointer-events-none"
              }`}
              style={{ top: "136px" }} // Adjusted for both utility bar and header height
              aria-hidden={!isMenuOpen}
            >
              <div className="p-4">
                {/* Close button inside panel */}
                <button
                  onClick={closeMenu}
                  className="absolute top-3 right-3 p-1 text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close menu"
                >
                  <XIcon className="w-5 h-5" />
                </button>

                <div className="flex flex-col gap-3">
                  {/* Mobile search bar */}
                  <div className="mb-2">
                    <SearchInput className="w-full pl-4 pr-12 py-2.5" placeholder="Search gadgets..." isMobile={true} />
                  </div>

                  <nav className="flex flex-col gap-3">
                    <Link
                      href="/"
                      className="text-gray-800 text-lg font-medium px-2 py-2 rounded hover:bg-gray-50 transition-colors"
                      onClick={closeMenu}
                    >
                      Home
                    </Link>
                    <Link
                      href="/categories"
                      className="text-gray-800 text-lg font-medium px-2 py-2 rounded hover:bg-gray-50 transition-colors"
                      onClick={closeMenu}
                    >
                      Categories
                    </Link>
                    <Link
                      href="/blog"
                      className="text-gray-800 text-lg font-medium px-2 py-2 rounded hover:bg-gray-50 transition-colors"
                      onClick={closeMenu}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/about"
                      className="text-gray-800 text-lg font-medium px-2 py-2 rounded hover:bg-gray-50 transition-colors"
                      onClick={closeMenu}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/contact"
                      className="text-gray-800 text-lg font-medium px-2 py-2 rounded hover:bg-gray-50 transition-colors"
                      onClick={closeMenu}
                    >
                      Contact
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  )
}
