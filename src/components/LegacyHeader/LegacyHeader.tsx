import * as React from 'react'
import styled from 'styled-components'
import Logo from '../Logo/Logo'
import { graphql } from 'gatsby'

interface LegacyHeaderProps {
  siteTitle: string
}

const StyledHeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 1.45rem 1.0875rem;
`

const LegacyHeader: React.SFC<LegacyHeaderProps> = ({ siteTitle }) => (
  <div className="content">
    <StyledHeaderWrapper>
      <Logo alt={siteTitle} />
    </StyledHeaderWrapper>
  </div>
)

export default LegacyHeader

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
