import type { Metadata } from "next"
import React from 'react'
import { Suspense } from "react"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"
import SiteHeader from "@/components/site-header"
import MobileCTA from "@/components/MobileCTA";
import BlogClientPage from "../../../components/blog/BlogClientPage";
import { allPosts } from 'contentlayer/generated';


interface Pageprops {
  searchParams: {
    topic?: string;
    level?: string;
    tag?: string;
    search?: string;
  }
}


export const metadata: Metadata = {
  title: "Tech & Gadgets Blog | AnadjyTech — The smart way to tech",
  description: "Latest tech trends, reviews, and how-tos for smart decisions.",
  keywords:
    "tech blog, gadget reviews, smartphone buying guide, laptop reviews, wireless earbuds, smart home, how-to guides, tech deals, AnadjyTech",
  openGraph: {
    title: "Tech & Gadgets Blog | AnadjyTech",
    description: "Latest tech trends, reviews, and how-tos for smart decisions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech & Gadgets Blog | AnadjyTech",
    description: "Latest tech trends, reviews, and how-tos for smart decisions.",
  },
}

const Page = async ({ searchParams }: Pageprops) => {

  const { topic, level, tag, search } = await searchParams;

  const topics = topic ? topic.toString()?.split(",") || [] : [];
  const levels = level ? level.toString()?.split(",") || [] : [];
  const tags = tag ? tag.toString()?.split(",") || [] : [];
  const searchQuery = search ? search.toString() : "";


  // Filter posts based on URL parameters
  let filtered = allPosts.filter((post) => post.published && !post.hidden)


  if (topics.length > 0) {
    filtered = filtered.filter((post) => topics.includes(post.title.toLowerCase()) || topics.includes(post.category.toLowerCase()))
  }

  if (levels.length > 0) {
    filtered = filtered.filter((post) => levels.includes(post.difficulty))
  }

  if (tags.length > 0) {
    filtered = filtered.filter((post) => post.tags.some((tag) => tags.includes(tag)))
  }

  const query = searchQuery.trim().toLowerCase();
  if (query) {
    filtered = filtered.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query)
    );
  }

  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      <SiteHeader />
      <BlogClientPage filteredPosts={filtered} />
      <Newsletter />
      <Footer />
      <MobileCTA />
    </div>
  )
}

export default Page;