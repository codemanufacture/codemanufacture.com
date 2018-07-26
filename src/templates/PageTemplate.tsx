import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const StyledPageWrapper = styled.div`
  ul {
    list-style-type: disc;
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
