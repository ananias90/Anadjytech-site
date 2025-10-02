import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"
import type { Metadata } from "next"
import Image from "next/image"


export const metadata: Metadata = {
  title: "Smart Home Essentials - AnadjyTech",
  description:
    "Make your home smarter with connected devices. Compare TP-Link smart plugs, Philips Hue bulbs, and Ring doorbells.",
  openGraph: {
    title: "Smart Home Essentials - AnadjyTech",
    description:
      "Make your home smarter with connected devices. Compare TP-Link smart plugs, Philips Hue bulbs, and Ring doorbells.",
    url: "https://www.anadjytech.com/categories/smart-home",
  },
  alternates: {
    canonical: "https://www.anadjytech.com/categories/smart-home",
  },
}

export default function SmartHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <a href="/" className="hover:text-blue-600 transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="/categories" className="hover:text-blue-600 transition-colors">
              Categories
            </a>
            <span>/</span>
            <span className="text-gray-900">Smart Home</span>
          </nav>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a2b6d] mb-4">Smart Home Essentials</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Make your home smarter with connected devices.</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TP-Link Smart Plug */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="aspect-square overflow-hidden">
                <Image  unoptimized width={300} height={300}
                  src="https://images.unsplash.com/photo-1510552776732-01acc9a4c8da"
                  alt="TP-Link Smart Plug"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">TP-Link Smart Plug</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Control any device remotely with voice commands and scheduling.
                </p>
                <ul className="text-sm text-gray-600 mb-4 space-y-1 flex-1">
                  <li>• WiFi enabled</li>
                  <li>• Voice control (Alexa, Google)</li>
                  <li>• Energy monitoring</li>
                  <li>• Timer & scheduling</li>
                </ul>
                <div className="text-2xl font-bold text-[#0066cc] mb-4">$12.99</div>
                <div className="flex gap-2 mt-auto">
                  <a
                    href="#"
                    className="flex-1 bg-[#0066cc] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                  >
                    Buy on Amazon
                  </a>
                  <a
                    href="#"
                    className="flex-1 border border-[#0066cc] text-[#0066cc] px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center text-sm font-medium"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Philips Hue Smart Bulb */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="aspect-square overflow-hidden">
                <Image  unoptimized width={300} height={300}
                  src="https://images.unsplash.com/photo-1584277260161-ec72a24c61b0"
                  alt="Philips Hue Smart Bulb"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Philips Hue Smart Bulb</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  16 million colors, dimming, and energy-efficient LED lighting.
                </p>
                <ul className="text-sm text-gray-600 mb-4 space-y-1 flex-1">
                  <li>• 16M colors + warm/cool white</li>
                  <li>• Dimmable (1-100%)</li>
                  <li>• Voice control compatible</li>
                  <li>• 25,000 hour lifespan</li>
                </ul>
                <div className="text-2xl font-bold text-[#0066cc] mb-4">$49.99</div>
                <div className="flex gap-2 mt-auto">
                  <a
                    href="#"
                    className="flex-1 bg-[#0066cc] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                  >
                    Buy on Amazon
                  </a>
                  <a
                    href="#"
                    className="flex-1 border border-[#0066cc] text-[#0066cc] px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center text-sm font-medium"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Ring Doorbell */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="aspect-square overflow-hidden">
                <Image  unoptimized width={300} height={300}
                  src="https://images.unsplash.com/photo-1588269845583-4f3b6b6c2f1b"
                  alt="Ring Doorbell"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ring Doorbell</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  HD video, two-way audio, and motion detection for your front door.
                </p>
                <ul className="text-sm text-gray-600 mb-4 space-y-1 flex-1">
                  <li>• 1080p HD video</li>
                  <li>• Two-way audio</li>
                  <li>• Motion detection alerts</li>
                  <li>• Night vision</li>
                </ul>
                <div className="text-2xl font-bold text-[#0066cc] mb-4">$99.99</div>
                <div className="flex gap-2 mt-auto">
                  <a
                    href="#"
                    className="flex-1 bg-[#0066cc] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                  >
                    Buy on Amazon
                  </a>
                  <a
                    href="#"
                    className="flex-1 border border-[#0066cc] text-[#0066cc] px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center text-sm font-medium"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Indoor Camera */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="aspect-square overflow-hidden">
                <Image  unoptimized width={300} height={300}
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620"
                  alt="Indoor Smart Camera"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Indoor Smart Camera</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Pan/tilt security camera with AI detection and cloud storage.
                </p>
                <ul className="text-sm text-gray-600 mb-4 space-y-1 flex-1">
                  <li>• 360° pan/tilt coverage</li>
                  <li>• AI person detection</li>
                  <li>• Cloud & local storage</li>
                  <li>• Two-way audio</li>
                </ul>
                <div className="text-2xl font-bold text-[#0066cc] mb-4">$49.99</div>
                <div className="flex gap-2 mt-auto">
                  <a
                    href="#"
                    className="flex-1 bg-[#0066cc] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                  >
                    Buy on Amazon
                  </a>
                  <a
                    href="#"
                    className="flex-1 border border-[#0066cc] text-[#0066cc] px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center text-sm font-medium"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Nest Thermostat */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="aspect-square overflow-hidden">
                <Image  unoptimized width={300} height={300}
                  src="https://images.unsplash.com/photo-1606813908780-f8a6f3df0f6c"
                  alt="Nest Thermostat"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nest Thermostat</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Learning thermostat that adapts to your schedule and saves energy.
                </p>
                <ul className="text-sm text-gray-600 mb-4 space-y-1 flex-1">
                  <li>• Auto-learning schedule</li>
                  <li>• Remote control via app</li>
                  <li>• Energy usage reports</li>
                  <li>• Voice control support</li>
                </ul>
                <div className="text-2xl font-bold text-[#0066cc] mb-4">$249.99</div>
                <div className="flex gap-2 mt-auto">
                  <a
                    href="#"
                    className="flex-1 bg-[#0066cc] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                  >
                    Buy on Amazon
                  </a>
                  <a
                    href="#"
                    className="flex-1 border border-[#0066cc] text-[#0066cc] px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center text-sm font-medium"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Smart Light Strip */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="aspect-square overflow-hidden">
                <Image  unoptimized width={300} height={300}
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
                  alt="Smart Light Strip"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Light Strip</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Flexible RGB LED strips for accent lighting and mood creation.
                </p>
                <ul className="text-sm text-gray-600 mb-4 space-y-1 flex-1">
                  <li>• 16M colors + effects</li>
                  <li>• Music sync capability</li>
                  <li>• Cuttable & extendable</li>
                  <li>• Easy adhesive mounting</li>
                </ul>
                <div className="text-2xl font-bold text-[#0066cc] mb-4">$24.99</div>
                <div className="flex gap-2 mt-auto">
                  <a
                    href="#"
                    className="flex-1 bg-[#0066cc] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                  >
                    Buy on Amazon
                  </a>
                  <a
                    href="#"
                    className="flex-1 border border-[#0066cc] text-[#0066cc] px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center text-sm font-medium"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2b6d] text-center mb-12">Smart Device Comparison</h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto rounded-2xl shadow-lg">
            <table className="w-full bg-white">
              <thead className="bg-[#0066cc] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Product</th>
                  <th className="px-6 py-4 text-left font-semibold">Voice Control</th>
                  <th className="px-6 py-4 text-left font-semibold">WiFi</th>
                  <th className="px-6 py-4 text-left font-semibold">App Control</th>
                  <th className="px-6 py-4 text-left font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Philips Hue Bulb</td>
                  <td className="px-6 py-4 text-green-600">✓ All assistants</td>
                  <td className="px-6 py-4 text-green-600">✓ 2.4/5GHz</td>
                  <td className="px-6 py-4 text-green-600">✓ Full control</td>
                  <td className="px-6 py-4 font-bold text-[#0066cc]">$49.99</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Ring Doorbell</td>
                  <td className="px-6 py-4 text-green-600">✓ Alexa, Google</td>
                  <td className="px-6 py-4 text-green-600">✓ 2.4GHz</td>
                  <td className="px-6 py-4 text-green-600">✓ iOS/Android</td>
                  <td className="px-6 py-4 font-bold text-[#0066cc]">$99.99</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Nest Thermostat</td>
                  <td className="px-6 py-4 text-green-600">✓ Voice commands</td>
                  <td className="px-6 py-4 text-green-600">✓ Stable connection</td>
                  <td className="px-6 py-4 text-green-600">✓ Smart scheduling</td>
                  <td className="px-6 py-4 font-bold text-[#0066cc]">$249.99</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Philips Hue Bulb</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Voice Control:</span>
                  <span className="text-green-600">✓ All assistants</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">WiFi:</span>
                  <span className="text-green-600">✓ 2.4/5GHz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">App Control:</span>
                  <span className="text-green-600">✓ Full control</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span className="text-gray-900">Price:</span>
                  <span className="text-[#0066cc]">$49.99</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Ring Doorbell</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Voice Control:</span>
                  <span className="text-green-600">✓ Alexa, Google</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">WiFi:</span>
                  <span className="text-green-600">✓ 2.4GHz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">App Control:</span>
                  <span className="text-green-600">✓ iOS/Android</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span className="text-gray-900">Price:</span>
                  <span className="text-[#0066cc]">$99.99</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Nest Thermostat</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Voice Control:</span>
                  <span className="text-green-600">✓ Voice commands</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">WiFi:</span>
                  <span className="text-green-600">✓ Stable connection</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">App Control:</span>
                  <span className="text-green-600">✓ Smart scheduling</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span className="text-gray-900">Price:</span>
                  <span className="text-[#0066cc]">$249.99</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              As an Amazon Associate, we may earn commissions from qualifying purchases.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2b6d] text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="bg-white rounded-2xl shadow-md overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center">
                <span className="font-semibold text-gray-900">Are smart home devices secure?</span>
                <span className="text-[#0066cc] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Yes, smart home devices are secure when purchased from reputable manufacturers and properly configured.
                They use encryption protocols like WPA3 and regular security updates. Always change default passwords
                and keep firmware updated for maximum security.
              </div>
            </details>

            <details className="bg-white rounded-2xl shadow-md overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center">
                <span className="font-semibold text-gray-900">Do they need WiFi?</span>
                <span className="text-[#0066cc] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Most smart home devices require WiFi for remote control and cloud features. However, some devices can
                work locally via Bluetooth or Zigbee hubs. A stable 2.4GHz WiFi connection is recommended for optimal
                performance and reliability.
              </div>
            </details>

            <details className="bg-white rounded-2xl shadow-md overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center">
                <span className="font-semibold text-gray-900">Can they work with Alexa/Google?</span>
                <span className="text-[#0066cc] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Yes, most modern smart home devices are compatible with Amazon Alexa, Google Assistant, and Apple
                HomeKit. Check the product specifications for "Works with Alexa" or "Hey Google" compatibility before
                purchasing to ensure seamless voice control integration.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  )
}
