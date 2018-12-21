import * as React from 'react'
import BlogPost from '../components/BlogPost'
import { graphql } from 'gatsby'
import { Query } from '../graphql-types'

interface PostTemplateProps {
  data: Query
}

const PostTemplate: React.FunctionComponent<PostTemplateProps> = ({ data }) => {
  const frontmatter =
    (data && data.markdownRemark && data.markdownRemark.frontmatter) || {}
  const title = frontmatter.title || ''
  const html = (data && data.markdownRemark && data.markdownRemark.html) || ''
  return <BlogPost html={html} title={title} />
}

export default PostTemplate

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
