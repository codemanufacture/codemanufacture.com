import * as React from 'react'
import BlogPost from '../components/BlogPost'
import { graphql } from 'gatsby'
import { Query } from '../graphql-types'
import BlogPostList from '../components/BlogPostsList'

interface BlogTemplateProps {
  data: Query
}

// TODO - create a BlogPostList component which will get the data from the query
// TODO - create a BlogPostListItem compoentn that displays the image, link etc.
// TODO - create a HeroImage component that will be displayed


const BlogTemplate: React.FunctionComponent<BlogTemplateProps> = ({ data }) => {
  const elements = (data && data.allMarkdownRemark && data.allMarkdownRemark.edges) || []
  return (
    <BlogPostList
      elements={elements}
    />
  )
}

export default BlogTemplate

