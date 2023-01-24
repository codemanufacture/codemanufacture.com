import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import BlogPostList from '../components/BlogPostsList'

const BlogPage = ({ data }: PageProps<Queries.BlogPostListQuery>) => {
  const posts = data.allMarkdownRemark.edges.map(e => e.node)
  return (
    <Layout>
      <BlogPostList posts={posts} />
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  fragment BlogPostListItem on MarkdownRemark {
    id
    fields {
      slug
    }
    timeToRead
    excerpt
    frontmatter {
      comingSoon
      summary
      authors {
        name
        jsonId
        avatar {
          publicURL
        }
      }
      title
      date(formatString: "MMMM DD, YYYY")
      tags
      backgroundImage {
        publicURL
      }
    }
  }

  query BlogPostList {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//blog//" } }
      sort: { frontmatter: { date: DESC } }
      limit: 9
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
