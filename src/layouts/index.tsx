import * as React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

interface WrapperProps {
  children: () => any
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Layout: React.SFC<WrapperProps> = ({ children, data }) => (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    }}
  >
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          content: 'Ecommerce, AWS Consultancy and tech blog',
          name: 'description',
        },
        {
          content: 'magento, node.js, aws, react, serverless',
          name: 'keywords',
        },
      ]}
      link={[
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        {
          href: 'https://fonts.googleapis.com/css?family=Montserrat',
          rel: 'stylesheet',
        },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: '600px',
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
