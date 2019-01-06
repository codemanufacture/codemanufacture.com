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

export default PostTemplate

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        backgroundColor
        backgroundImage {
          publicURL
        }
        title
        date(formatString: "MMMM DD, YYYY")
        authors {
          id
          name
          avatar {
            id
            publicURL
          }
          bio
          twitter
          github
        }
        tags
      }
    }
  }
`
