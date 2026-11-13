'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
  const pathname = usePathname()

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/product' },
    { name: 'Like', href: '/like' },
    { name: 'CountDown', href: '/countdown' },
  ]

  return (
    <div className="flex items-center gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors px-3 py-1.5 rounded-lg ${
              isActive
                ? 'bg-blue-600 text-white font-semibold'
                : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}