import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
const logo = require('../../logo.svg')

interface HeaderProps {
  siteTitle: string
}

const StyledHeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 1.45rem 1.0875rem;
`

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <div className="content">
    <StyledHeaderWrapper>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#000',
            textDecoration: 'none',
          }}
          title="Back to homepage"
        >
          <img src={logo} alt={siteTitle} />
        </Link>
      </h1>
    </StyledHeaderWrapper>
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
