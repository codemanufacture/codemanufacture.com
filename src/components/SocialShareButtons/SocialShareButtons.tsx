import * as React from 'react'
import styled from 'styled-components'
import { transitions } from '../../theme'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

const StyledSocialShareButtons = styled.div`
  margin-bottom: 50px;
  padding-bottom: 20px;

  .icons-wrapper {
    display: flex;

    .react-share__ShareButton {
      cursor: pointer;
      transition: filter ${transitions.basicTransition};
      outline: none;
      margin-right: 5px;
      opacity: .9;

      &:hover {
        opacity: 1;
      }
    }
  }
`

const SocialShareButtons: React.FunctionComponent = () => {
  const currentUrl =
    typeof window !== 'undefined' && window.location.href
      ? window.location.href
      : ''

  return (
    <StyledSocialShareButtons>
      <h3>Enjoyed this content? Spread the word!</h3>
      <div className="icons-wrapper">
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton url={currentUrl}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
      </div>
    </StyledSocialShareButtons>
  )
}
export default SocialShareButtons
