import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

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
  <StyledPageWrapper>
    <Helmet title={data.page.frontmatter.title} />
    <h1>{data.page.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.page.html }} />
  </StyledPageWrapper>
)

export default PageTemplate

export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
