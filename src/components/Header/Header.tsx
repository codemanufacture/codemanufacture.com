import * as React from 'react'
import styled from 'styled-components'
import Logo from '../Logo/Logo'
import { graphql } from 'gatsby'
import { colors } from '../../theme'

interface HeaderProps {
  siteTitle: string
}

const StyledHeaderWrapper = styled.div`
  background: ${colors.background};
  width: 100%;
`

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <StyledHeaderWrapper>
    <Logo alt={siteTitle} />
  </StyledHeaderWrapper>
)

export default Header

export const siteMetadataFragment = graphql`
  fragment siteMetadata on Query {
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
