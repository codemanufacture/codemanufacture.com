import * as React from 'react'
import BlogPost from '../../components/BlogPost'
import { graphql, PageProps } from 'gatsby'

const PostTemplate: React.FunctionComponent<
  PageProps<Queries.PostTemplateQuery>
> = ({ data }) => {
  const frontmatter = data.markdownRemark?.frontmatter
  const title = data.markdownRemark?.frontmatter?.title ?? ''
  const html = data.markdownRemark?.html ?? ''
  const excerpt = data.markdownRemark?.excerpt ?? ''
  return (
    <BlogPost
      html={html}
      title={title}
      excerpt={excerpt}
      // @ts-ignore
      frontmatter={frontmatter}
    />
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        backgroundImage {
          publicURL
        }
        backgroundColor
        comingSoon
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
