import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Clock, User, Calendar, Share2, Copy, ExternalLink, Tag, ChevronLeft } from "lucide-react"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  publishedAt: string
  readMins: number
  image: {
    mobile: string
    tablet: string
    desktop: string
    alt: string
    width: number
    height: number
  }
  tags: string[]
  keyTakeaways?: string[]
  specs?: Record<string, string>
  pros?: string[]
  cons?: string[]
  content?: string
  bestLinks?: Array<{ label: string; url: string; merchant: string; note: string }>
  relatedPosts?: Array<{ title: string; slug: string; image: string; excerpt: string }>
}

interface BlogArticleProps {
  post: BlogPost
}

export default function BlogArticle({ post }: BlogArticleProps) {
  return (
    <main className="bg-white">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-[#0A67FF] transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <li>
              <Link href="/blog" className="hover:text-[#0A67FF] transition-colors">
                Blog
              </Link>
            </li>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <li className="text-gray-900 font-medium truncate">{post.title}</li>
          </ol>
        </nav>
      </div>

      {/* Article Hero */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Affiliate Disclosure - Top */}
          <div className="mb-4">
            <p className="text-xs text-gray-600 italic">
              Some links may be affiliate. We only recommend gear we truly rate.
            </p>
          </div>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block bg-[#0A67FF] text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readMins} min read</span>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <picture>
              <source media="(max-width: 768px)" srcSet={post.image.mobile} />
              <source media="(max-width: 1024px)" srcSet={post.image.tablet} />
              <Image
                src={post.image.desktop || "/placeholder.svg"}
                alt={post.image.alt}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
              />
            </picture>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-3xl mx-auto">
          {/* Affiliate Disclosure */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg">
            <p className="text-sm text-yellow-800">
              <strong>Disclosure:</strong> Some links in this article may be affiliate links. We only recommend products
              we genuinely believe in.
            </p>
          </div>

          {/* Key Takeaways */}
          {post.keyTakeaways && (
            <div className="bg-blue-50 border-l-4 border-[#0A67FF] p-6 mb-8 rounded-r-lg">
              <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0A67FF] rounded-full"></span>
                Key Takeaways
              </h2>
              <ul className="space-y-2">
                {post.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#0A67FF] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Content */}
          {post.content && (
            <div className="prose prose-lg max-w-none mb-8">
              <div className="text-gray-700 leading-relaxed space-y-4">
                {post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                        {paragraph.slice(3)}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        {paragraph.slice(4)}
                      </h3>
                    )
                  }
                  return (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>
          )}

          {/* Sample Image with Caption */}
          <figure className="mb-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/tech-product-comparison.png"
                alt="Sample product comparison image"
                fill
                className="object-cover object-center"
                loading="lazy"
              />
            </div>
            <figcaption className="text-sm text-gray-600 mt-2 text-center italic">
              Sample image caption - replace with actual image and description
            </figcaption>
          </figure>

          {/* Specs Table */}
          {post.specs && (
            <div className="my-8 bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">What to Look For</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(post.specs).map(([feature, value], index) => (
                      <tr key={index}>
                        <td className="py-3 pr-4 font-medium text-gray-700">{feature}</td>
                        <td className="py-3 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Pros & Cons */}
          {(post.pros || post.cons) && (
            <div className="my-8 grid md:grid-cols-2 gap-6">
              {post.pros && (
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Pros</h3>
                  <ul className="space-y-2">
                    {post.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-green-800">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {post.cons && (
                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-4">Cons</h3>
                  <ul className="space-y-2">
                    {post.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-red-800">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Detailed Body Content Sections */}
          <div className="prose prose-lg max-w-none mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Quick Picks</h2>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Balanced:</strong> Great all-around ANC with solid battery life
              </li>
              <li>
                <strong>Calls:</strong> Superior mic quality with wind reduction
              </li>
              <li>
                <strong>Budget:</strong> Decent ANC under $100
              </li>
              <li>
                <strong>Workout:</strong> Secure fit with sweat resistance
              </li>
              <li>
                <strong>iOS/Android:</strong> Ecosystem-optimized features
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Test</h2>
            <p className="text-gray-700 mb-4">
              Our testing process includes seal and fit checks across different ear shapes, noise isolation tests in
              subway and office environments, call quality recordings in various conditions, and comprehensive battery
              drain analysis with ANC enabled.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Picks (2025)</h2>
            <div className="grid gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Best Overall</h3>
                <p className="text-gray-600 mb-2">For most people who want balanced ANC performance</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Excellent noise cancellation across frequencies</li>
                  <li>• 7-hour battery with 28-hour case</li>
                  <li>• Comfortable for extended wear</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Best for Calls</h3>
                <p className="text-gray-600 mb-2">Superior microphone quality and wind reduction</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Crystal clear voice pickup</li>
                  <li>• Advanced wind noise reduction</li>
                  <li>• Background noise suppression</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Best Budget</h3>
                <p className="text-gray-600 mb-2">Solid ANC performance under $100</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Decent noise cancellation for the price</li>
                  <li>• Good battery life</li>
                  <li>• Reliable connectivity</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Choosing Ear Tips</h2>
            <p className="text-gray-700 mb-4">
              The right ear tips are crucial for ANC performance. Foam tips provide better seal and isolation but may
              feel warmer during extended use. Silicone tips are more comfortable for long sessions but require proper
              sizing. Consider stability fins for workouts.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">App Features That Matter</h2>
            <p className="text-gray-700 mb-4">
              Look for apps that offer adjustable ANC levels, transparency mode controls, custom EQ settings, and
              find-my-earbuds functionality. The best apps also include fit tests to ensure optimal seal and
              performance.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">FAQs</h2>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How do I extend battery life?</h3>
                <p className="text-gray-700">
                  Turn off ANC when not needed, use lower volume levels, and store in the case when not in use.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What's the difference between codecs?</h3>
                <p className="text-gray-700">
                  AAC works well with most devices, while LDAC and LC3plus offer higher quality with compatible sources.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I use just one earbud?</h3>
                <p className="text-gray-700">
                  Most modern earbuds support single-bud use, though ANC performance may be reduced.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Is there audio delay with video?</h3>
                <p className="text-gray-700">
                  Modern earbuds have minimal latency, but check for low-latency codec support if you watch lots of
                  video.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Conclusion</h2>
            <p className="text-gray-700 mb-4">
              The best ANC earbuds for 2025 balance noise cancellation, comfort, and battery life. Focus on fit first,
              then consider your primary use case. Whether you prioritize call quality, workout durability, or all-day
              comfort, there's an option that fits your needs.
            </p>
            <p className="text-gray-700">
              Ready to upgrade your audio setup? Check out our{" "}
              <Link href="/categories" className="text-[#0A67FF] hover:underline">
                complete selection of audio gear
              </Link>{" "}
              for more great options.
            </p>
          </div>

          {/* Best Links */}
          {post.bestLinks && (
            <div className="my-8 bg-[#0A67FF] text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Our Top Picks & Current Deals</h3>
              <div className="grid gap-3 mb-4">
                {post.bestLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center justify-between bg-white text-[#0A67FF] p-4 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0A67FF]"
                  >
                    <div>
                      <div className="font-medium">{link.label}</div>
                      <div className="text-sm opacity-75">{link.note}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{link.merchant}</div>
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </div>
                  </a>
                ))}
              </div>
              <p className="text-xs opacity-75">Some links may be affiliate. We only recommend gear we truly rate.</p>
            </div>
          )}

          {/* Share & Tags */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            {/* Share */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium text-gray-900">Share:</span>
              <button className="flex items-center gap-2 text-gray-600 hover:text-[#0A67FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A67FF] focus:ring-offset-2 rounded">
                <Copy className="w-4 h-4" />
                Copy Link
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-[#0A67FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A67FF] focus:ring-offset-2 rounded">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="font-medium text-gray-900">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[#0A67FF] rounded-full flex items-center justify-center text-white font-semibold text-xl">
                {post.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{post.author}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tech enthusiast and reviewer with over 5 years of experience testing the latest gadgets. Passionate
                  about helping people make informed tech decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Previous/Next Navigation */}
          <div className="flex justify-between items-center mb-8 py-4 border-t border-b border-gray-200">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-gray-600 hover:text-[#0A67FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A67FF] focus:ring-offset-2 rounded"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm">Back to Blog</span>
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-2 text-gray-600 hover:text-[#0A67FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A67FF] focus:ring-offset-2 rounded"
            >
              <span className="text-sm">More Articles</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Related Posts */}
          {post.relatedPosts && (
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Related Posts</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {post.relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-[#0A67FF] focus:ring-offset-2"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={relatedPost.image || "/placeholder.svg?height=200&width=300&query=related tech article"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mt-1 group-hover:text-[#0A67FF] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export { BlogArticle }
