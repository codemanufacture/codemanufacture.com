import * as React from 'react'
import styled from 'styled-components'
import { FacebookIcon, GithubIcon, LinkedinIcon } from '../SocialIcon'

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
