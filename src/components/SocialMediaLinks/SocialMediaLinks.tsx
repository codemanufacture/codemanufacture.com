import * as React from 'react'
import styled from 'styled-components'
import { GithubIcon, LinkedinIcon } from '../SocialIcon'
import { displayDimensions } from '../../theme'

const StyledSocialMediaLinks = styled.ul`
  display: flex;
  margin: auto 0 auto auto;
  padding: initial;
  list-style: none;

  li {
    + li {
      margin-left: 15px;
      position: relative;
      display: block;
    }
  }

  @media (max-width: ${displayDimensions.tabletSize}) {
    margin: 30px auto auto;
  }
`

const SocialMediaLinks = () => {
  return (
    <StyledSocialMediaLinks>
      <GithubIcon />
      <LinkedinIcon />
    </StyledSocialMediaLinks>
  )
}

export default SocialMediaLinks
