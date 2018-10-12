import * as React from 'react'
import Helmet from 'react-helmet'
import LegacyHeader from '../LegacyHeader'
import * as favicon from '../../images/favicon.ico'
import { StaticQuery, graphql } from 'gatsby'

const LegacyLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery1 {
        ...siteMetadata
      }
    `}
    render={data => (
      <>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta name="keywords" content={data.site.siteMetadata.keywords} />
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content={data.site.siteMetadata.title}
          />
          <link rel="icon" type="image/ico" href={favicon} />
        </Helmet>
        <LegacyHeader siteTitle={data.site.siteMetadata.title} />
        {children}
      </>
    )}
  />
)

export default LegacyLayout
