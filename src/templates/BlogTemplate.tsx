import * as React from 'react'
import { Query } from '../graphql-types'
import styled from 'styled-components'
import { sizes } from '../theme'
import BlogPostList from '../components/BlogPostsList'

interface BlogTemplateProps {
  data: Query
}

const StyledBlogTemplate = styled.div`
  margin-top: ${sizes.headerHeight};
  overflow: hidden;
`

const BlogTemplate: React.FunctionComponent<BlogTemplateProps> = ({ data }) => {
  const elements =
    (data && data.allMarkdownRemark && data.allMarkdownRemark.edges) || []
  return (
    <StyledBlogTemplate>
      <BlogPostList elements={elements} />
    </StyledBlogTemplate>
  )
}

export default BlogTemplate
