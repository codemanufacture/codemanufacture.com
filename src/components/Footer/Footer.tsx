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

interface FooterState {
  userEmail: string
  userName: string
}

class Footer extends React.PureComponent<{}, FooterState> {
  constructor(props: object) {
    super(props)

    this.state = {
      userEmail: ``,
      userName: ``,
    }
  }

  render() {
    return (
      <StyledFooterWrapper>
        <NewsletterForm />
      </StyledFooterWrapper>
    )
  }
}

export default Footer
