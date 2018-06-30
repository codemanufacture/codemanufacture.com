import * as React from 'react'
import Link from 'gatsby-link'
const logo = require('../../logo.svg')

interface HeaderProps {
  siteTitle: string
}

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <div className="content">
    <div
      style={{
        margin: '0 auto',
        maxWidth: 600,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#000',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt={siteTitle} />
        </Link>
      </h1>
    </div>
  </div>
)

export default Header

export const siteMetadataFragment = graphql`
  fragment siteMetadata on RootQueryType {
    site {
      siteMetadata {
        description
        keywords
        title
        siteUrl
      }
    }
  }
`
