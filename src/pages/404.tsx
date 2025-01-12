import * as React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div tw="min-h-full bg-white py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div tw="mx-auto max-w-max">
        <main tw="sm:flex">
          <p tw="text-4xl font-bold tracking-tight text-sky-600 sm:text-5xl">
            404
          </p>
          <div tw="sm:ml-6">
            <div tw="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 tw="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Page not found
              </h1>
              <p tw="mt-1 text-base text-gray-500">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div tw="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link to="/">
                <span tw="inline-flex items-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                  Go back home
                </span>
              </Link>
              <Link to="/contact">
                <span tw="inline-flex items-center rounded-md border border-transparent bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                  Contact support
                </span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
