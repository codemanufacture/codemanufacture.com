import type { GatsbyConfig } from 'gatsby'

const siteUrl = `https://codemanufacture.com`

const config: GatsbyConfig = {
  siteMetadata: {
    description: `Magento experts`,
    keywords: `magento, ecommerce development`,
    siteUrl,
    title: `Codemanufacture - Magento experts`,
  },
  mapping: {
    'MarkdownRemark.frontmatter.authors': 'AuthorJson',
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `content`,
        ignore: [
          `**/\.*`,
          `**/pages/**`,
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages/`,
        name: `pages`,
        ignore: [
          `**/blog/**`,
        ]
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            }
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        excludes: [
          `/homepage`,
          `/blog/sample-post*`,
          `/blog/`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-KP9TM7L`,
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }: {query: Queries.Query} ) =>
              allMarkdownRemark?.edges?.map(edge => {
                  return {
                      ...edge.node.frontmatter,
                      description: edge.node.excerpt,
                      date: edge.node.frontmatter.date,
                      url: `${site?.siteMetadata?.siteUrl}${edge?.node?.fields?.slug}`,
                      guid: `${site?.siteMetadata?.siteUrl}${edge?.node?.fields?.slug}`,
                      categories: edge.node.frontmatter.tags,
                      custom_elements: [{ 'content:encoded': edge.node.html }]
                  }
              }),
            query: `
            {
              allMarkdownRemark(
                limit: 1000
                sort: {frontmatter: {date: DESC}}
                filter: {fileAbsolutePath: {regex: "//blog//"}, frontmatter: {title: {ne: "Sample post"}}}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      tags
                    }
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: 'Codemanufacture RSS Feed',
          },
        ],
      },
    },
  ],
}

export default config
