import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { allPosts } from 'contentlayer/generated'
import BlogArticle from "../../../components/blog/blog-article"

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Article Not Found | AnadjyTech",
      description: "The requested article could not be found.",
    }
  }

  return {
    title: `${post.title} | AnadjyTech — The smart way to tech`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post || !post.published || post.hidden) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "AnadjyTech",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogArticle post={{ ...post, content: post.body.code }} />
    </>
  )
}