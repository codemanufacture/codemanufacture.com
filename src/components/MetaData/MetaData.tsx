import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Query } from '../../graphql-types'
import * as favicon from '../../images/favicon.ico'

const siteMetadataQuery = graphql`
  query {
    ...siteMetadata
  }
`

const MetaData: React.FunctionComponent = () => (
  <StaticQuery
    query={siteMetadataQuery}
    render={data => MetaDataStructure(data)}
  />
)

const MetaDataStructure = (data: Query) => {
  const metadata = (data && data.site && data.site.siteMetadata) || {}

  return (
    <Helmet>
      <title>{`${metadata.title}`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={`${metadata.description}`} />
      <meta name="keywords" content={`${metadata.keywords}`} />
      <meta name="description" content={`${metadata.description}`} />
      <meta property="og:title" content={`${metadata.title}`} />
      <meta property="og:url" content={`${metadata.siteUrl}`} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={`${metadata.title}`} />
      <link rel="icon" type="image/ico" href={favicon} />
      <html lang="en" />
    </Helmet>
  )
}

export default MetaData
