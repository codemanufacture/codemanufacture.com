import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'
import NewsletterForm from './NewsletterForm'
import SocialMediaLinks from '../SocialMediaLinks'

const StyledFooterWrapper = styled.div`
  display: flex;
  width: 100%;
  background: ${colors.backgroundGray};
  padding: 30px 0;
`

const Footer = () => (
  <StyledFooterWrapper>
    <NewsletterForm />
    <SocialMediaLinks />
  </StyledFooterWrapper>
)

export default Footer
