import * as React from 'react'
import styled from 'styled-components'
import { colors, typography, transitions, displayDimensions } from '../../theme'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import NewsletterInput from '../NewsletterInput'

interface StyledProps {
  isMailchimpMessageVisible: boolean
}

const StyledFormWrapper = styled<StyledProps, 'div'>('div')`
  min-height: 40px;
  width: 66%;
  margin: auto;
  position: relative;

  @media (max-width: ${displayDimensions.tabletSize}) {
    width: 100%;
  }

  .message-wrapper {
    opacity: ${props => (props.isMailchimpMessageVisible ? 1 : 0)};
    width: calc(100% - 60px);
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: ${colors.white};
    transition: opacity ${transitions.basicTransition};
    font-size: ${typography.paragraphSize};
    pointer-events: none;
  }

  .form-wrapper {
    opacity: ${props => (props.isMailchimpMessageVisible ? 0 : 1)};
    pointer-events: ${props =>
      props.isMailchimpMessageVisible ? 'none' : 'initial'};
    transition: opacity ${transitions.basicTransition};

    h3 {
      color: #ddd;
      font-size: ${typography.subtitleSize};
      font-weight: 500;
      margin: 0 0 15px 0;
      text-transform: uppercase;
    }

    .disclaimer {
      color: #ccc;
      font-size: ${typography.paragraphSize};
    }

    @media (max-width: ${displayDimensions.tabletSize}) {
      padding: 0 30px;
    }
  }

  form {
    display: flex;
    align-items: flex-start;

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
          margin-top: 15px;
        }
      }
    }
  }

  .btn-submit {
    margin-right: 0;
    padding: 10px 30px;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background: ${colors.brand};
    color: ${colors.buttonTextColor};
    font-size: ${typography.ctaSize};
    line-height: 1.5;
    transition: background-color ${transitions.basicTransition},
      color ${transitions.basicTransition};
    cursor: pointer;
    outline: none;

    &:hover {
      background: ${colors.brandDarkGreen};
      color: ${colors.white};
    }
  }
`

interface NewsletterState {
  isMailchimpMessageVisible: boolean
  mailchimpMessage: string
  userEmail: string
  userName: string
}

interface MailchimpCallData {
  msg: string
  result: string
}

class Newsletter extends React.PureComponent<{}, NewsletterState> {
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

  resetFormStates = () => {
    window.setTimeout(() => {
      this.setState({
        isMailchimpMessageVisible: false,
      })
    }, 2500)
  }

  handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userName: e.target.value })
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    addToMailchimp(this.state.userEmail, { ['FNAME']: this.state.userName })
      .then((data: MailchimpCallData) => {
        console.log(data)
        this.setState(
          {
            isMailchimpMessageVisible: true,
            mailchimpMessage: data.msg,
          },
          () => this.resetFormStates()
        )
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
        <div className="form-wrapper">
          <h3>Subscribe to Our Newsletter</h3>
          <form onSubmit={e => this.handleSubmit(e)}>
            <NewsletterInput
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.handleNameInputChange(e)
              }
              type="text"
              value={userName}
              name="FNAME"
              className="required"
              id="mce-FNAME"
              placeholder="Enter your name"
              required
            />
            <NewsletterInput
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.handleEmailInputChange(e)
              }
              type="email"
              value={userEmail}
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              placeholder="Enter your email"
              required
            />
            <input type="submit" value="Subscribe" className="btn-submit" />
          </form>
          <p className="disclaimer">
            Get Important Offers and Deals directly to your Email Inbox.
            <em>We never send spam!</em>
          </p>
        </div>
        <p className="message-wrapper">{mailchimpMessage}</p>
      </StyledFormWrapper>
    )
  }
}

export default Newsletter
