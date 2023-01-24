import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        ...SiteMetadata
      }
    }
  `)

  return site.siteMetadata
}

export default useSiteMetadata
