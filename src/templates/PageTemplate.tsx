import * as React from 'react'
import Helmet from 'react-helmet'

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
  <div className="page-content">
    <Helmet title={data.page.frontmatter.title} />
    <h1>{data.page.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.page.html }} />
  </div>
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
