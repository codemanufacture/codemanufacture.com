import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'
import NewsletterForm from './NewsletterForm'

const StyledFooterWrapper = styled.div`
  display: flex;
  width: 100%;
  background: ${colors.backgroundGray};
  padding: 35px 0;
`

const Footer = () => (
  <StyledFooterWrapper>
    <NewsletterForm />
  </StyledFooterWrapper>
)

export default Footer
