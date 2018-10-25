import * as React from 'react'
import styled from 'styled-components'
import { colors, typography, transitions, displayDimensions } from '../../theme'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Input from '../Input'

interface StyledProps {
  isMailchimpMessageVisible: boolean
}

const StyledFormWrapper = styled<StyledProps, 'div'>('div')`
  min-height: 40px;
  width: 50%;
  margin-left: auto;
  margin-right: 0;
  position: relative;

  @media (max-width: ${displayDimensions.tabletSize}) {
    width: 100%;
  }

  .message-wrapper {
    opacity: ${props => (props.isMailchimpMessageVisible ? 1 : 0)};
    width: calc(100% - 20px);
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    transition: opacity ${transitions.basicTransition};
    font-size: ${typography.paragraphSize};
    pointer-events: none;
  }

  form {
    opacity: ${props => (props.isMailchimpMessageVisible ? 0 : 1)};
    display: flex;
    padding: 0 15px;
    align-items: flex-start;
    pointer-events: ${props =>
      props.isMailchimpMessageVisible ? 'none' : 'initial'};

    input {
      + input {
        margin-left: 15px;
      }
    }

    @media (max-width: ${displayDimensions.tabletSize}) {
      flex-direction: column;
      align-items: initial;

      input {
        + input {
          margin-left: initial;
          margin-top: 10px;
        }
      }
    }
  }

  .btn-submit {
    margin-right: 0;
    padding: 0.375rem 0.75rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background: ${colors.backgroundSuccess};
    color: ${colors.buttonTextColor};
    font-size: ${typography.ctaSize};
    line-height: 1.5;
    transition: background-color ${transitions.basicTransition};
    cursor: pointer;
    outline: none;

    &:hover {
      background: ${colors.backgroundSuccessHover};
    }
  }
`

interface NewsletterFormState {
  isMailchimpMessageVisible: boolean
  mailchimpMessage: string
  userEmail: string
  userName: string
}

interface MailchimpCallData {
  msg: string
  result: string
}

class NewsletterForm extends React.PureComponent<{}, NewsletterFormState> {
  constructor(props: object) {
    super(props)

    this.state = {
      isMailchimpMessageVisible: false,
      mailchimpMessage: ``,
      userEmail: ``,
      userName: ``,
    }
  }

  handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userEmail: e.target.value })
  }

  handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userName: e.target.value })
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    addToMailchimp(this.state.userEmail, { ['FNAME']: this.state.userName })
      .then((data: MailchimpCallData) => {
        console.log(data)
        this.setState({
          isMailchimpMessageVisible: true,
          mailchimpMessage: data.msg,
        })
      })
      .catch((error: object) => {
        console.log(error)
      })
  }

  render() {
    const {
      isMailchimpMessageVisible,
      mailchimpMessage,
      userEmail,
      userName,
    } = this.state

    return (
      <StyledFormWrapper isMailchimpMessageVisible={isMailchimpMessageVisible}>
        <form onSubmit={e => this.handleSubmit(e)}>
          <Input
            onChange={(e: React.SyntheticEvent) =>
              this.handleNameInputChange(e)
            }
            type="text"
            value={userName}
            name="FNAME"
            className="required"
            id="mce-FNAME"
            placeholder="Enter your name"
          />
          <Input
            onChange={(e: React.SyntheticEvent) =>
              this.handleEmailInputChange(e)
            }
            type="email"
            value={userEmail}
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            placeholder="Enter your email"
          />
          <input type="submit" value="Subscribe" className="btn-submit" />
        </form>
        <p className="message-wrapper">{mailchimpMessage}</p>
      </StyledFormWrapper>
    )
  }
}

export default NewsletterForm
