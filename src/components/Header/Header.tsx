import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import * as logo from '../../images/logo.svg'

interface HeaderProps {
  siteTitle: string
}

const StyledHeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 1.45rem 1.0875rem;

  a {
    color: #000;
    text-decoration: none;
  }
`

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <div className="content">
    <StyledHeaderWrapper>
      <div>
        <Link to="/" title="Back to homepage">
          <img src={logo} alt={siteTitle} />
        </Link>
      </div>
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
