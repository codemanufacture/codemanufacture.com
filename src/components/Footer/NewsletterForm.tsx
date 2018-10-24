import * as React from 'react'
import styled from 'styled-components'
import { colors, typography, transitions, displayDimensions } from '../../theme'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Input from '../Input'

const StyledFormWrapper = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: 0;

  @media (max-width: ${displayDimensions.tabletSize}) {
    width: 100%;
  }

  form {
    display: flex;
    padding: 30px;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: ${displayDimensions.tabletSize}) {
      align-items: initial;
    }

    input {
      + input {
        margin-top: 15px;
      }
    }
  }

  .btn-submit {
    margin-right: 0;
    margin-left: 0;
    background: ${colors.backgroundSuccess};
    color: ${colors.buttonTextColor};
    font-size: ${typography.ctaSize};
    line-height: 1.5;
    border-radius: 0.25rem;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    transition: background-color ${transitions.basicTransition},
      border-color ${transitions.basicTransition};
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: #218838;
      border-color: #1e7e34;
    }
  }
`

interface NewsletterFormState {
  userEmail: string
  userName: string
}

class NewsletterForm extends React.PureComponent<{}, NewsletterFormState> {
  constructor(props: object) {
    super(props)

    this.state = {
      userEmail: ``,
      userName: ``,
    }
  }

  handleEmailInputChange = (e: React.SyntheticEvent) => {
    this.setState({ userEmail: e.target.value })
  }

  handleNameInputChange = (e: React.SyntheticEvent) => {
    this.setState({ userName: e.target.value })
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    console.log(e)

    e.preventDefault()
    addToMailchimp(this.state.userEmail, { ['FNAME']: this.state.userName }) // listFields are optional if you are only capturing the email address.
      .then(data => {
        console.log(data)
      })
      .catch((error: object) => {
        console.log(error)
      })
  }

  render() {
    return (
      <StyledFormWrapper>
        <form onSubmit={e => this.handleSubmit(e)}>
          <Input
            onChange={e => this.handleNameInputChange(e)}
            type="text"
            value={this.state.userName}
            name="FNAME"
            className="required"
            id="mce-FNAME"
            placeholder="Enter your name"
          />
          <Input
            onChange={e => this.handleEmailInputChange(e)}
            type="email"
            value={this.state.userEmail}
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            placeholder="Enter your email"
          />
          <input type="submit" value="Subscribe" className="btn-submit" />
        </form>
      </StyledFormWrapper>
    )
  }
}

export default NewsletterForm
