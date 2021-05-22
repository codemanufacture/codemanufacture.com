import * as React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import LegacyLayout from '../components/LegacyLayout'
import { graphql } from 'gatsby'
import { colors } from '../theme'
import { Query } from '../graphql-types'

const StyledPageWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;

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
  h3,
  h4,
  h5,
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

interface PageTemplateProps {
  data: Query
}

const PageTemplate: React.FunctionComponent<PageTemplateProps> = ({ data }) => {
  const frontmatter =
    (data && data.markdownRemark && data.markdownRemark.frontmatter) || {}
  const html = (data && data.markdownRemark && data.markdownRemark.html) || ''
  return (
    <LegacyLayout>
      <StyledPageWrapper>
        <Helmet title={`${frontmatter.title}`} />
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </StyledPageWrapper>
    </LegacyLayout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
