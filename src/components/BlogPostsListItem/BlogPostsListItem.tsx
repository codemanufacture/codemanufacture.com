import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'
import { SitePageEdge } from '../../graphql-types'

const StyledBlogPost = styled.li`
    padding: 0;
`

interface BlogPostProps {
  element: SitePageEdge
}


const BlogPost: React.FunctionComponent<BlogPostProps> = ({element}) => {
  return (
      <StyledBlogPost>
        Test
      </StyledBlogPost>
  )
}

export default BlogPost
