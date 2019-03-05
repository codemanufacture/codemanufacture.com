import * as React from 'react'
import BlogPost from '../components/BlogPost'
import { graphql } from 'gatsby'
import { Query } from '../graphql-types'

interface BlogTemplateProps {
  data: Query
}

const BlogTemplate: React.FunctionComponent<BlogTemplateProps> = ({ data }) => {
  const frontmatter =
    (data && data.markdownRemark && data.markdownRemark.frontmatter) || {}
  const title = frontmatter.title ? frontmatter.title : ''
  const html = (data && data.markdownRemark && data.markdownRemark.html) || ''
  const excerpt =
    (data && data.markdownRemark && data.markdownRemark.excerpt) || ''
  return (
    <BlogPost
      html={html}
      title={title}
      excerpt={excerpt}
      frontmatter={frontmatter}
    />
  )
}

export default BlogTemplate

export const postQuery = graphql`
  query($slug: String!) {
    {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "//blog//"}}, limit: 1000) {
    edges {
      node {
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

  }
`
