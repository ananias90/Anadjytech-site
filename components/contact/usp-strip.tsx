import React from 'react'

const UspStrip = () => {
    return (
        <section className="bg-[#f7f9fc] py-6" data-reveal>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                    <div className="flex items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-[#0A67FF] flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M1 3h15v13H1z" />
                            <path d="M16 8h4l3 3v5h-7V8z" />
                            <circle cx="5.5" cy="18.5" r="2.5" />
                            <circle cx="18.5" cy="18.5" r="2.5" />
                        </svg>
                        <span className="text-sm font-medium text-[#333] whitespace-nowrap">Free Worldwide Shipping</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-[#0A67FF] flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M15 18H9" />
                            <path d="M19 18h2l-3.5-7L19 4" />
                            <path d="M5 18h2l-3.5-7L5 4" />
                            <path d="M9 18h6" />
                        </svg>
                        <span className="text-sm font-medium text-[#333] whitespace-nowrap">30-Day Free Returns</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-[#0A67FF] flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        </svg>
                        <span className="text-sm font-medium text-[#333] whitespace-nowrap">Secure Checkout</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-[#0A67FF] flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                        </svg>
                        <span className="text-sm font-medium text-[#333] whitespace-nowrap">Curated Tech Picks</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UspStrip
