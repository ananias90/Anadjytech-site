import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, ChevronRight } from "lucide-react"
import { Badge } from "../ui/badge";

import BlogProse, { KeyTakeaways, ProsSection, ConsSection } from "./BlogProse"
import type { BlogArticle } from "../../lib/blog-articles"

interface BlogArticleProps {
  post: BlogArticle
}

export default function BlogArticleComponent({ post }: BlogArticleProps) {
  // Parse content into sections
  const contentSections = post.content.split("\n\n")

  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 dark:bg-gray-800 py-4" aria-label="Breadcrumb">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                Home
              </Link>
            </li>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <li>
              <Link
                href="/blog"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Blog
              </Link>
            </li>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <li className="text-gray-900 dark:text-gray-100 font-medium truncate">{post.title}</li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <header className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Category Badge */}
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {post.category}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight text-balance">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-pretty max-w-3xl mx-auto">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readMins} min read</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      {post.image && (
        <div className="relative h-64 sm:h-80 lg:h-96 mb-12">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <BlogProse>
          {/* Main Content */}
          <div className="mb-12">
            {contentSections.map((section, index) => {
              // Skip empty sections
              if (!section.trim()) return null

              return (
                <div key={index} className="mb-6">
                  {section.split("\n").map((paragraph, pIndex) => {
                    if (!paragraph.trim()) return null

                    // Handle headings
                    if (paragraph.startsWith("## ")) {
                      return <h2 key={pIndex}>{paragraph.replace("## ", "")}</h2>
                    }
                    if (paragraph.startsWith("### ")) {
                      return <h3 key={pIndex}>{paragraph.replace("### ", "")}</h3>
                    }
                    if (paragraph.startsWith("#### ")) {
                      return <h4 key={pIndex}>{paragraph.replace("#### ", "")}</h4>
                    }

                    // Handle regular paragraphs
                    return <p key={pIndex}>{paragraph}</p>
                  })}
                </div>
              )
            })}
          </div>
        </BlogProse>

        {/* Key Takeaways */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <KeyTakeaways>
            <ul className="space-y-2">
              {post.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </KeyTakeaways>
        )}

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {post.pros && post.pros.length > 0 && (
            <ProsSection>
              <ul className="space-y-2">
                {post.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </ProsSection>
          )}

          {post.cons && post.cons.length > 0 && (
            <ConsSection>
              <ul className="space-y-2">
                {post.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </ConsSection>
          )}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
