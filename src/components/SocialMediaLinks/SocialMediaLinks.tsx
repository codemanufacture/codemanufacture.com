import * as React from 'react'
import styled from 'styled-components'
// import { colors } from '../../theme'
import { FacebookIcon, GithubIcon, LinkedinIcon } from '../SocialIcon'

const StyledSocialMediaLinks = styled.ul`
    list-style: none;
`

const SocialMediaLinks = () => {
  return (
    <StyledSocialMediaLinks>
      <FacebookIcon />
      <GithubIcon />
      <LinkedinIcon />
    </StyledSocialMediaLinks>
  )
}

export default SocialMediaLinks
