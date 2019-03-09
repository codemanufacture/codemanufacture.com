import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BlogTemplate from '../templates/BlogTemplate'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//blog//" } }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              tags
              backgroundImage {
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  return <BlogTemplate data={data} />
}

export default BlogPage
