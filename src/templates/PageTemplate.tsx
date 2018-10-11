import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { colors } from '../theme'

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
  data: {
    page: {
      html: string
      frontmatter: {
        title: string
      }
    }
  }
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <Layout>
    <StyledPageWrapper>
      <Helmet title={data.page.frontmatter.title} />
      <h1>{data.page.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.page.html }} />
    </StyledPageWrapper>
  </Layout>
)

export default PageTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
