import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/Header'
import '../theme/globalStyle'

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 0 1.0875rem 1.45rem;
`

interface WrapperProps {
  location: any
  children: () => any
  data: {
    site: {
      siteMetadata: {
        description: string
        keywords: string
        siteUrl: string
        title: string
      }
    }
  }
}

const Layout: React.SFC<WrapperProps> = ({ children, data, location }) => (
  <div className={location.pathname === '/' ? 'coming-soon' : ''}>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <link rel="icon" type="image/png" href="/favicon.ico" />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <Container>{children()}</Container>
  </div>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    ...siteMetadata
  }
`
