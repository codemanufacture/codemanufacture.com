import * as React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { colors, sizes } from '../../theme'
import { SitePageEdge, MarkdownRemarkEdge } from '../../graphql-types'
import BlogPostsListItem from '../BlogPostsListItem'

const StyledBlogPostsList = styled.ul`
max-width: 100%;
width: 66%;
    display: grid;
  margin: ${sizes.defaultSpacing * 2}px auto;
  padding: 0;
  list-style: none;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  
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
