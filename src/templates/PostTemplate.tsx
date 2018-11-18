import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { colors } from '../theme'
import { Query } from '../graphql-types'

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

interface PostTemplateProps {
  data: Query
}

const PostTemplate: React.FunctionComponent<PostTemplateProps> = ({ data }) => {
  const frontmatter =
    (data && data.markdownRemark && data.markdownRemark.frontmatter) || {}
  const html = (data && data.markdownRemark && data.markdownRemark.html) || ''
  return (
    <Layout>
      <StyledPageWrapper>
        <Helmet title={`${frontmatter.title}`} />
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </StyledPageWrapper>
    </Layout>
  )
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
