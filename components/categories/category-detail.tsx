"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Category } from "@/lib/api/categories";
import { Product } from "@/lib/api/products";
import Header from "@/app/(website)/categories/_components/header";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

interface CategoryDetailProps {
  category: Category;
  products: Product[];
}

export default function CategoryDetail({ category, products }: CategoryDetailProps) {
  // Generate comparison items from products
  const comparisonItems = products.map((product) => ({
    name: product.name,
    keyFeature: product.shortDescription || "High-quality product",
    buyLink: product.amazonUrl || product.amazonLink || "#",
  }));

  // Generate FAQs from category or products
  const faqs = [
    {
      question: `What are the best ${category.name} products?`,
      answer: `Our curated selection of ${category.name} includes top-rated products known for their quality, performance, and value. Each product is carefully selected to meet different needs and budgets.`,
    },
    {
      question: `How do I choose the right ${category.name} product?`,
      answer: `Consider your specific needs, budget, and the features that matter most to you. Our product descriptions and comparisons can help you make an informed decision.`,
    },
    {
      question: `Do you test these ${category.name} products?`,
      answer: `While we don't physically test every product, we extensively research user reviews, expert opinions, and product specifications to ensure we recommend only high-quality items.`,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header
        heading={category.name}
        subHeading={category.description || `Discover the best ${category.name} products`}
        subCategory={category.name}
      />

      {/* Category Header */}
      {category.image && (
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Product Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-gray-600">
                  Showing {products.length} {products.length === 1 ? 'product' : 'products'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div
                    key={product._id || product.id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col group"
                  >
                    {product.images && product.images.length > 0 && (
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={300}
                          height={169}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 line-clamp-2">
                        {product.name}
                      </h3>
                      {product.shortDescription && (
                        <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                          {product.shortDescription}
                        </p>
                      )}

                      {/* {product.rating && (
                        <div className="flex items-center mb-4">
                          <span className="text-yellow-400 text-sm">★</span>
                          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                        </div>
                      )} */}

                      <div className="flex gap-2 mt-auto">
                        {(product.amazonUrl || product.amazonLink) ? (
                          <Link
                            href={product.amazonUrl || product.amazonLink || "#"}
                            target="_blank"
                            rel="noopener noreferrer nofollow sponsored"
                            className="flex-1 bg-[#0066cc] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                          >
                            Buy on Amazon
                          </Link>
                        ) : null}
                        <Link
                          href={`/products/${product.slug}`}
                          className="flex-1 border border-[#0066cc] text-[#0066cc] px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center text-sm font-medium"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found in this category.</p>
              <Link href="/products" className="text-blue-900 hover:underline mt-4 inline-block">
                Browse all products
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      {products.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Product Comparison</h2>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left font-semibold">Product</th>
                    <th className="p-4 text-center font-semibold">Key Feature</th>
                    {/* <th className="p-4 text-center font-semibold">Price</th> */}
                    <th className="p-4 text-center font-semibold">Buy</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product._id || product.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 font-medium text-gray-900 max-w-[150px]">{product.name}</td>
                      <td className="p-4 text-center text-gray-700 max-w-[400px]">{product.shortDescription || "High-quality product"}</td>
                      {/* <td className="p-4 text-center font-bold text-blue-600">{item.price}</td> */}
                      <td className="p-4 text-center flex-nowrap">
                        <Link
                          href={product.amazonUrl || product.amazonLink || "#"}
                          target="_blank"
                          rel="noopener noreferrer nofollow sponsored"
                          className="px-4 py-2 flex-nowrap bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                          Buy on Amazon
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
              {products.map((product, index) => (
                <div key={product._id || product.id} className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.shortDescription || "High-quality product"}</p>
                  <div className="flex items-center justify-between">
                    {/* <span className="text-xl font-bold text-blue-600">{item.price}</span> */}
                    <Link
                      href={product.amazonUrl || product.amazonLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      Buy on Amazon
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amazon Affiliate Disclosure */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 text-center">
            <strong>Amazon Affiliate Disclosure:</strong> AnadjyTech is a participant in the Amazon Services LLC
            Associates Program, an affiliate advertising program designed to provide a means for sites to earn
            advertising fees by advertising and linking to Amazon.com. We may earn a commission from qualifying
            purchases made through our affiliate links.
          </p>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}