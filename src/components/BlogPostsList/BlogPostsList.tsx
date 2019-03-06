import * as React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { colors } from '../../theme'
import { SitePageEdge, MarkdownRemarkEdge } from '../../graphql-types'
import BlogPostsListItem from '../BlogPostsListItem'

const StyledBlogPostsList = styled.ul`
  margin: 0 auto;

  a {
    color: ${colors.brand};
  }
`

interface BlogPostListProps {
  elements: MarkdownRemarkEdge[]
}


const BlogPostsList: React.FunctionComponent<BlogPostListProps> = ({ elements }) => {
  return (
    <Layout>
        {/* <BlogHero frontmatter={frontmatter} /> the hero will come here*/}
      <StyledBlogPostsList>
        {elements.map((element: SitePageEdge) => <BlogPostsListItem element={element} key={`post-list-item-${element.node.id}`} /> )}
      </StyledBlogPostsList>
    </Layout>
  )
}

export default BlogPostsList
