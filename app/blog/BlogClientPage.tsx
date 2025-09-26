"use client"
import BlogFiltersSidebar from "@/components/blog/BlogFiltersSidebar";

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ChevronLeft, ChevronRight, Truck, RotateCcw, Shield, Star, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogFiltersSidebar from "@/components/blog/BlogFiltersSidebar"

const blogPosts = [
  
    {
  id: 20,
  slug: "remote-work-accessories-2025",
  title: "Remote Work Accessories 2025: Tools for a Smarter Home Office",
  excerpt:
    "Must-have home-office accessories to boost comfort and productivity—no prices shown on site.",
  category: "Guides",
  difficulty: "Beginner",
  tags: ["Smart Home", "USB-C"],
  author: "AnadjyTech Editorial",
  publishedAt: "2025-09-18",
  readMins: 9,
  image: "/images/blog/remote-work-accessories-2025/thumb.jpg", // optionnel
  alt: "Home office accessories on a desk",
},

  {
    id: 19,
    slug: "ai-gadgets-2025",
    title: "AI Gadgets 2025: Smart Devices That Make Life Easier",
    excerpt:
      "Discover the smartest AI-powered devices of 2025 that make your daily routines faster, simpler, and more efficient.",
    category: "Reviews",
    difficulty: "Intermediate",
    tags: ["Smart Home", "Audio"],
    author: "AnadjyTech Editorial",
    publishedAt: "2025-09-18",
    readMins: 10,
    image: "/images/blog/ai-gadgets-2025/thumb.jpg",
    alt: "Collection of the best AI-powered gadgets for 2025 including smart assistants, wearables, and home devices",
    published: true,
    featured: false,
    hidden: false,
  },
  {
    id: 18,
    slug: "how-to-calibrate-4k-tv-2025",
    title: "How to Calibrate a 4K TV in 2025: Step-by-Step Guide for the Best Picture",
    excerpt:
      "Simple steps to unlock the full potential of your television with proper calibration for color accuracy, brightness, and overall viewing experience.",
    category: "How-tos",
    difficulty: "Intermediate",
    tags: ["Audio"],
    author: "AnadjyTech Editorial",
    publishedAt: "2025-09-17",
    readMins: 11,
    image: "/images/blog/how-to-calibrate-4k-tv-2025/thumb.jpg",
    alt: "Modern 4K TV in a living room showing calibration settings and tools for optimal picture quality",
    published: true,
    featured: false,
    hidden: false,
  },
  {
    id: 17,
    slug: "gaming-accessories-2025",
    title: "Gaming Accessories 2025: Gear That Levels Up Your Play",
    excerpt: "Discover the must-have accessories every gamer needs this year for better performance, comfort, and fun.",
    category: "Reviews",
    difficulty: "Beginner",
    tags: ["USB-C"],
    author: "AnadjyTech Editorial",
    publishedAt: "2025-09-16",
    readMins: 9,
    image: "/images/blog/gaming-accessories-2025/thumb.jpg",
    alt: "Collection of the best gaming accessories for 2025 including mouse, keyboard, headset, and controller",
    published: true,
    featured: false,
    hidden: false,
  },
  {
    id: 16,
    slug: "ultimate-2025-smartphone-buying-guide",
    title: "Ultimate 2025 Smartphone Buying Guide",
    excerpt:
      "Discover the top smartphones of 2025, compare specs, and find the perfect device for your budget and needs.",
    category: "Guides",
    difficulty: "Beginner",
    tags: ["Smart Home"],
    author: "AnadjyTech Editorial",
    publishedAt: "2025-09-15",
    readMins: 12,
    image: "/images/blog/ultimate-2025-smartphone-buying-guide/thumb.jpg",
    alt: "Collection of the best smartphones for 2025 including iPhone, Samsung, Google Pixel and gaming phones",
    published: true,
    featured: false,
    hidden: false,
  },
  {
    id: 15,
    slug: "best-power-banks-2025",
    title: "Best Power Banks 2025: Reliable Charging on the Go",
    excerpt:
      "Stay powered anywhere with the most reliable, fast-charging power banks of 2025. Compare capacity, speed, and portability.",
    category: "Reviews",
    difficulty: "Beginner",
    tags: ["USB-C"],
    author: "AnadjyTech Editorial",
    publishedAt: "2025-09-14",
    readMins: 8,
    image: "/images/blog/best-power-banks-2025/thumb.jpg",
    alt: "Collection of the best power banks for 2025 including portable and high-capacity models",
    published: true,
    featured: false,
    hidden: false,
  },
  {
    id: 14,
    slug: "mechanical-keyboards-2025",
    title: "Mechanical Keyboards 2025: Best Picks for Typing and Gaming",
    excerpt:
      "Discover the top mechanical keyboards of 2025 for work, study, and gaming. Compare switches, layouts, and value for money.",
    category: "Reviews",
    difficulty: "Intermediate",
    tags: ["USB-C"],
    author: "AnadjyTech Editorial",
    publishedAt: "2025-09-13",
    readMins: 10,
    image: "/images/blog/mechanical-keyboards-2025/thumb.jpg",
    alt: "Collection of the best mechanical keyboards for 2025 including gaming and productivity models",
    published: true,
    featured: false,
    hidden: false,
  },
  {
    id: 13,
    slug: "noise-cancelling-headphones-2025",
    title: "Noise-Cancelling Headphones 2025: Best Picks for Work and Travel",
    excerpt:
      "The ultimate guide to the best headphones for work, travel, and daily focus. Compare top models with detailed reviews and buying advice.",
    category: "Reviews",
    difficulty: "Beginner",
    tags: ["Audio"],
    author: "AnadjyTech Editorial",
    publishedAt: "2025-09-12",
    readMins: 9,
    image: "/images/blog/noise-cancelling-headphones-2025/thumb.jpg",
    alt: "Collection of the best noise-cancelling headphones for 2025 including premium and budget options",
    published: true,
    featured: false,
    hidden: false,
  },
  {
    id: 12,
    slug: "smart-home-gadgets-2025",
    title: "Smart Home Gadgets 2025: Must-Have Devices for a Connected Life",
    excerpt:
      "Transform your home into a smart sanctuary with cutting-edge devices that blend convenience, security, and energy efficiency.",
    category: "Guides",
    difficulty: "Intermediate",
    tags: ["Smart Home"],
    author: "AnadjyTech Editorial",
    publishedAt: "2025-09-05",
    readMins: 10,
    image: "/smart-home-devices-2025.jpg",
    alt: "Collection of smart home devices including smart displays, thermostats, and security cameras",
    published: true,
    featured: false,
    hidden: false,
  },
  {
    id: 11,
    slug: "usb-c-hubs-2025",
    title: "Best USB-C Hubs 2025: Top Picks for Every Budget",
    excerpt:
      "Compare affordable, mid-range, and premium USB-C hubs. Find the perfect hub for your devices with our detailed reviews and buying guide.",
    category: "Reviews",
    difficulty: "Beginner",
    tags: ["USB-C"],
    author: "AnadjyTech Editorial",
    publishedAt: "2025-09-09",
    readMins: 8,
    image: "/images/blog/usb-c-hubs-2025/thumb.jpg",
    alt: "Collection of the best USB-C hubs for 2025 including budget and premium options",
    published: true,
    featured: false,
    hidden: false,
  },
]

function BlogClientPageContent() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 9

  const filterOptions = {
    topics: [
      { name: "Guides", count: 4 },
      { name: "Reviews", count: 6 },
      { name: "How-tos", count: 1 },
    ],
    difficulties: [
      { name: "Beginner", count: 6 },
      { name: "Intermediate", count: 4 },
    ],
    tags: [
      { name: "USB-C", count: 5 },
      { name: "Smart Home", count: 4 },
      { name: "Audio", count: 3 },
    ],
  }

  // Filter posts based on URL parameters
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts.filter((post) => post.published && !post.hidden)

    const topics = searchParams.get("topic")?.split(",") || []
    const difficulties = searchParams.get("level")?.split(",") || []
    const tags = searchParams.get("tag")?.split(",") || []
    const search = searchParams.get("search")

    if (topics.length > 0) {
      filtered = filtered.filter((post) => topics.includes(post.category))
    }

    if (difficulties.length > 0) {
      filtered = filtered.filter((post) => difficulties.includes(post.difficulty))
    }

    if (tags.length > 0) {
      filtered = filtered.filter((post) => post.tags.some((tag) => tags.includes(tag)))
    }

    if (search) {
      const query = search.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.author.toLowerCase().includes(query),
      )
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.author.toLowerCase().includes(query),
      )
    }

    return filtered
  }, [searchParams, searchQuery])

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  const featuredPost = filteredPosts[0] || null
  const gridPosts = paginatedPosts.filter((post) => post.id !== featuredPost?.id)

  const isNewPost = (publishedAt: string) => {
    const publishDate = new Date(publishedAt)
    const fourteenDaysAgo = new Date()
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14)
    return publishDate > fourteenDaysAgo
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    document.getElementById("blog-grid")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen">
      {/* Blog Hero Section */}
      <section className="relative min-h-[440px] lg:min-h-[520px] py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/blog-hero-mobile.webp"
            alt="Tech gadgets and devices arranged on a modern desk"
            fill
            className="object-cover object-center lg:hidden"
            loading="lazy"
            aria-hidden="true"
            sizes="(max-width: 1024px) 100vw, 0vw"
          />
          <Image
            src="/blog-hero-tablet.webp"
            alt="Tech gadgets and devices arranged on a modern desk"
            fill
            className="object-cover object-center hidden lg:block xl:hidden"
            loading="lazy"
            aria-hidden="true"
            sizes="(min-width: 1024px) and (max-width: 1279px) 100vw, 0vw"
          />
          <Image
            src="/blog-hero-desktop.webp"
            alt="Tech gadgets and devices arranged on a modern desk"
            fill
            className="object-cover object-center hidden xl:block"
            priority
            aria-hidden="true"
            sizes="(min-width: 1280px) 100vw, 0vw"
          />
        </div>
        <div className="absolute inset-0 bg-blue-900/[0.35] lg:bg-blue-900/[0.39]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-12 lg:h-16 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Tech & Gadgets Insights</h1>
            <p className="text-xl sm:text-2xl text-blue-200 font-semibold mb-6">
              Reviews, guides & how-tos for smart tech decisions.
            </p>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
              Explore the latest trends, reviews, and tips to make your tech life smarter.
            </p>
          </div>
        </div>
      </section>

      {/* USP Strip */}
      <section className="bg-[#f7f9fc] py-4 sm:py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
              <Truck className="w-5 h-5 text-[#0A67FF] flex-shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium text-[#333]">Free Worldwide Shipping</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
              <RotateCcw className="w-5 h-5 text-[#0A67FF] flex-shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium text-[#333]">30-Day Free Returns</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
              <Shield className="w-5 h-5 text-[#0A67FF] flex-shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium text-[#333]">Secure Checkout</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
              <Star className="w-5 h-5 text-[#0A67FF] flex-shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium text-[#333]">Curated Tech Picks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content with Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <BlogFiltersSidebar
              topics={filterOptions.topics}
              difficulties={filterOptions.difficulties}
              tags={filterOptions.tags}
            />

            <div className="flex-1">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setCurrentPage(1)
                    }}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A67FF] focus:border-transparent outline-none"
                    aria-label="Search blog articles"
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-gray-600" aria-live="polite">
                    Showing {filteredPosts.length} of {blogPosts.length} posts
                  </p>
                </div>
              </div>

              {/* Blog Post Grid */}
              <div id="blog-grid">
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="text-gray-400 mb-4">
                      <Search className="w-16 h-16 mx-auto" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No posts found</h3>
                    <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
                  </div>
                ) : (
                  <>
                    {/* Featured Post */}
                    {featuredPost && (
                      <div className="mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">Featured Post</h2>
                        <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
                          <div className="md:flex">
                            <div className="md:w-1/2 relative h-64 md:h-80">
                              <Image
                                src={featuredPost.image || "/placeholder.svg"}
                                alt={featuredPost.alt || `Featured article: ${featuredPost.title}`}
                                fill
                                className="object-cover"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                              <div className="absolute top-4 left-4">
                                <span className="bg-[#0A67FF] text-white px-3 py-1 rounded-full text-xs font-semibold">
                                  {featuredPost.category}
                                </span>
                                {isNewPost(featuredPost.publishedAt) && (
                                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold ml-2">
                                    New
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                <User className="w-4 h-4" aria-hidden="true" />
                                <span>{featuredPost.author}</span>
                                <span aria-hidden="true">•</span>
                                <Calendar className="w-4 h-4" aria-hidden="true" />
                                <time dateTime={featuredPost.publishedAt}>
                                  {new Date(featuredPost.publishedAt).toLocaleDateString()}
                                </time>
                                <span aria-hidden="true">•</span>
                                <span>{featuredPost.readMins} min read</span>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-[#0A67FF] transition-colors">
                                <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                              </h3>
                              <p className="text-gray-600 mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                              <Button
                                className="bg-[#0A67FF] hover:bg-blue-700 text-white rounded-lg font-semibold w-fit focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                asChild
                              >
                                <Link href={`/blog/${featuredPost.slug}`}>Read More</Link>
                              </Button>
                            </div>
                          </div>
                        </article>
                      </div>
                    )}

                    {/* Latest Posts Grid */}
                    {gridPosts.length > 0 && (
                      <div className="mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">Latest Posts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                          {gridPosts.map((post) => (
                            <article
                              key={post.id}
                              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col focus-within:ring-2 focus-within:ring-[#0A67FF]"
                            >
                              <div className="relative aspect-video">
                                <Image
                                  src={post.image || "/placeholder.svg"}
                                  alt={post.alt || `Article: ${post.title}`}
                                  fill
                                  className="object-cover"
                                  loading="lazy"
                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute top-4 right-4 flex gap-2">
                                  <span className="bg-[#0A67FF] text-white px-2 py-1 rounded-full text-xs font-semibold">
                                    {post.category}
                                  </span>
                                  {isNewPost(post.publishedAt) && (
                                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                      New
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <User className="w-3 h-3" aria-hidden="true" />
                                    <span>{post.author}</span>
                                    <span aria-hidden="true">•</span>
                                    <Calendar className="w-3 h-3" aria-hidden="true" />
                                    <time dateTime={post.publishedAt}>
                                      {new Date(post.publishedAt).toLocaleDateString()}
                                    </time>
                                    <span aria-hidden="true">•</span>
                                    <span>{post.readMins} min read</span>
                                  </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 flex-shrink-0 hover:text-[#0A67FF] transition-colors">
                                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                                <Button
                                  className="bg-[#0A67FF] hover:bg-blue-700 text-white rounded-lg font-semibold w-full mt-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                  asChild
                                >
                                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                                </Button>
                              </div>
                            </article>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <nav className="flex justify-center items-center gap-2 mt-12" aria-label="Blog pagination">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                          className="flex items-center gap-1 border-[#0A67FF] text-[#0A67FF] hover:bg-[#0A67FF] hover:text-white rounded-lg bg-transparent disabled:opacity-50"
                          aria-label="Go to previous page"
                        >
                          <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                          Previous
                        </Button>
                        <div className="flex gap-1">
                          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            const page = i + 1
                            return (
                              <Button
                                key={page}
                                size="sm"
                                onClick={() => handlePageChange(page)}
                                className={
                                  currentPage === page
                                    ? "bg-[#0A67FF] text-white hover:bg-blue-700 rounded-lg"
                                    : "border-gray-300 hover:border-[#0A67FF] hover:text-[#0A67FF] rounded-lg bg-transparent text-gray-700"
                                }
                                variant={currentPage === page ? "default" : "outline"}
                                aria-label={`Go to page ${page}`}
                                aria-current={currentPage === page ? "page" : undefined}
                              >
                                {page}
                              </Button>
                            )
                          })}
                          {totalPages > 5 && (
                            <>
                              <span className="px-2 py-1 text-gray-500" aria-hidden="true">
                                ...
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handlePageChange(totalPages)}
                                className="border-gray-300 hover:border-[#0A67FF] hover:text-[#0A67FF] rounded-lg bg-transparent text-gray-700"
                                aria-label={`Go to page ${totalPages}`}
                              >
                                {totalPages}
                              </Button>
                            </>
                          )}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                          disabled={currentPage === totalPages}
                          className="flex items-center gap-1 border-[#0A67FF] text-[#0A67FF] hover:bg-[#0A67FF] hover:text-white rounded-lg bg-transparent disabled:opacity-50"
                          aria-label="Go to next page"
                        >
                          Next
                          <ChevronRight className="w-4 h-4" aria-hidden="true" />
                        </Button>
                      </nav>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function BlogClientPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogClientPageContent />
    </Suspense>
  )
}
