import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Products</h1>
          <p className="text-gray-600 text-lg">
            Discover our complete range of smart tech gadgets designed to enhance your daily life.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
