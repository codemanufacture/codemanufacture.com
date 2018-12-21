import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../Layout'
import { colors } from '../../theme'

const StyledPageWrapper = styled.div`
  margin: 0 auto;

  a {
    color: ${colors.brand};
  }

  h1 {
    font-size: 2rem;
    text-rendering: optimizeLegibility;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 1.45rem;
  }

  p {
    padding: 0;
  }

  h1,
  h2,
  img,
  p {
    margin: 0 0 1.45rem;
  }

  ul {
    list-style-type: disc;
  }

  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
`

interface BlogPostProps {
  title: string
  html: string
}

const BlogPost: React.FunctionComponent<BlogPostProps> = ({ title, html }) => {
  return (
    <Layout>
      <StyledPageWrapper>
        <Helmet title={title} />
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </StyledPageWrapper>
    </Layout>
  )
}

export default BlogPost
