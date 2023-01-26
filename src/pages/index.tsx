import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import {
  CodeBracketIcon,
  ShoppingCartIcon,
  WrenchScrewdriverIcon,
  // tslint:disable-next-line:no-submodule-imports
} from '@heroicons/react/24/outline'
import BlogPostList from '../components/BlogPostsList'
import Contact from '../components/Contact'

const features = [
  {
    name: 'Magento Development',
    description:
      'We build stores from scratch, create bespoke features and integrations with 3rd parties.',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Magento Support',
    description:
      'We provide a day-to-day support, software updates, implementation of new features.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Code audit',
    description:
      'Our code audit finds bottlenecks, bad practices causing performance and maintainability issues.',
    icon: CodeBracketIcon,
  },
]

const IndexPage = ({ data }: { data: Queries.HomepageQueryQuery }) => {
  const people = data.allAuthorJson?.edges || []
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node)

  return (
    <Layout>
      <div tw="relative bg-white py-14 sm:py-20 lg:py-10" id="services">
        <div tw="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <h2 tw="text-lg font-semibold text-sky-600">Services</h2>
          <p tw="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Manufacturing your success
          </p>
          <div tw="mt-20">
            <div tw="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(feature => (
                <div key={feature.name} tw="pt-6">
                  <div tw="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div tw="-mt-6">
                      <div>
                        <span tw="inline-flex items-center justify-center rounded-xl bg-sky-500 p-3 shadow-lg">
                          <div tw="h-8 w-8 text-white">
                            <feature.icon aria-hidden="true" />
                          </div>
                        </span>
                      </div>
                      <h3 tw="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p tw="mt-5 text-base leading-7 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BlogPostList posts={posts} />
      <div tw="bg-gray-50">
        <div tw="mx-auto max-w-7xl pt-10 pb-20 px-6 lg:px-8 lg:pt-12 lg:pb-24">
          <div tw="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div tw="space-y-5 sm:space-y-4">
              <h2 tw="text-3xl font-bold tracking-tight sm:text-4xl">
                Meet our team
              </h2>
              <p tw="text-xl text-gray-500">
                A small team of seasoned Magento developers with over a decade
                of experience.
              </p>
            </div>
            <div tw="lg:col-span-2 md:mt-12">
              <ul
                role="list"
                tw="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
              >
                {people.map(({ node: person }) => (
                  <li key={person.name}>
                    <div tw="flex items-center space-x-4 lg:space-x-6">
                      {person.showAvatar && person?.avatar?.publicURL && (
                        <img
                          tw="h-16 w-16 rounded-full lg:h-20 lg:w-20"
                          src={person.avatar.publicURL}
                          alt={person.name}
                        />
                      )}
                      <div tw="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p tw="text-sky-600">{person.role}</p>
                        <ul role="list" tw="flex space-x-5">
                          {person?.twitter && (
                            <li>
                              <a
                                href={person.twitter}
                                tw="text-gray-400 hover:text-gray-500"
                              >
                                <span tw="sr-only">Twitter</span>
                                <svg
                                  tw="h-5 w-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                              </a>
                            </li>
                          )}
                          {person?.linkedin && (
                            <li>
                              <a
                                href={person.linkedin}
                                tw="text-gray-400 hover:text-gray-500"
                              >
                                <span tw="sr-only">LinkedIn</span>
                                <svg
                                  tw="h-5 w-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  fragment SiteMetadata on Site {
    siteMetadata {
      title
      description
      keywords
      siteUrl
    }
  }

  query HomepageQuery {
    allAuthorJson {
      edges {
        node {
          name
          role
          twitter
          linkedin
          showAvatar
          avatar {
            publicURL
          }
        }
      }
    }

    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//blog//" } }
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          ...BlogPostListItem
        }
      }
    }
  }
`
