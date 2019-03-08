import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BlogTemplate from '../templates/BlogTemplate'

const BlogPage = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => <BlogTemplate data={data} />}
  />
)

export default BlogPage
