import * as React from 'react'
import { Link } from 'gatsby'
import navigation from '../../helpers/navigation'

export default function Footer() {
  return (
    <footer tw="bg-neutral-900" aria-labelledby="footer-heading">
      <div tw="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        <nav
          tw="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.footer.map(item => (
            <div key={item.name} tw="pb-6">
              <Link
                to={item.path}
              >
                <span tw="text-sm leading-6 text-gray-600 hover:text-gray-200">
                {item.name}
                </span>
              </Link>
            </div>
          ))}
        </nav>
        <div tw="mt-10 flex justify-center space-x-10">
          {navigation.social.map(item => (
            <a
              key={item.name}
              href={item.href}
              tw="text-gray-400 hover:text-gray-500"
            >
              <span tw="sr-only">{item.name}</span>
              <div tw="h-6 w-6">
                <item.icon aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
        <p tw="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Codemanufacture SRLS. All rights
          reserved. Partita iva: 12607110967
        </p>
      </div>
    </footer>
  )
}
