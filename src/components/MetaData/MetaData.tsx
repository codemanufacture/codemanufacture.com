import * as React from 'react'
import Helmet from 'react-helmet'
import * as favicon from '../../images/favicon.ico'
import useSiteMetadata from '../../hooks/UseSiteMetadata'

const MetaData: React.FunctionComponent = () => {
  const {
    title = '',
    description = '',
    keywords = '',
    siteUrl,
  } = useSiteMetadata()

  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <link rel="icon" type="image/ico" href={favicon} />
      <html lang="en" />
    </Helmet>
  )
}

export default MetaData
