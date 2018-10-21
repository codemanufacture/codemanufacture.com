import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const StyledFooterWrapper = styled.div`
  background: ${colors.backgroundGray};
  padding: 35px 0;
`

interface FooterState {
  userEmail: string,
  userName: string,
}

class Footer extends React.PureComponent<{}, FooterState> {
  constructor (props: object) {
    super(props);

    this.state = {
      userEmail: ``,
      userName: ``,
    }
  }

  handleEmailInputChange = (e:React.SyntheticEvent) => {
    this.setState({ userEmail: e.target.value })
  }

  handleNameInputChange = (e:React.SyntheticEvent) => {
    this.setState({ userName: e.target.value })
  }

  handleSubmit = (e:React.SyntheticEvent) => {
    console.log(e);

    e.preventDefault();
    addToMailchimp(this.state.userEmail, { ['FNAME']: this.state.userName }) // listFields are optional if you are only capturing the email address.
    .then(data => {
      console.log(data)
    })
    .catch(() => {
    })
  }

  render() {
    return (
      <StyledFooterWrapper>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input onChange={e => this.handleNameInputChange(e)} type="text" value={this.state.userName} name="FNAME" className="required" id="mce-FNAME" />
          <input onChange={e => this.handleEmailInputChange(e)} type="email" value={this.state.userEmail} name="EMAIL" className="required email" id="mce-EMAIL" />
          <input type="submit" value="submit" />
        </form>
      </StyledFooterWrapper>
    )
  }
}

export default Footer
