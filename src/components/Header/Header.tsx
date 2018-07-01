import * as React from 'react'
import styled from 'styled-components'
import Logo from '../Logo/Logo'

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
      <Logo alt={siteTitle}/>
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
