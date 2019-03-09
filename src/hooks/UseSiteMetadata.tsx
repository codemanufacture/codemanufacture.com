import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      ...siteMetadata
    }
  `)

  return site.siteMetadata
}

export default useSiteMetadata
