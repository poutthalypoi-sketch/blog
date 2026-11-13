import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Welcome to <span className="text-blue-600 dark:text-blue-400">My Website</span>
        </h1>
        
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-8 leading-relaxed">
          welcome to My Website! This is a simple Next.js application with a clean and modern design. Explore the blog and learn more about me.
      </p>
        {/* ປຸ່ມກົດໄປໜ້າຕ່າງໆ (CTA) */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href="/like" 
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-xl shadow-md hover:opacity-90 transition-opacity"
          >
            Like Button
          </Link>
          
          <Link 
            href="/countdown" 
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            Countdown
          </Link>
        </div>
    </div>
  )
}