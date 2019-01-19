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
  .icons-wrapper {
    display: flex;

    .SocialMediaShareButton {
      cursor: pointer;
      transition: filter ${transitions.basicTransition};
      outline: none;

      + .SocialMediaShareButton {
        margin-left: 15px;
      }

      &:hover {
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.7));
      }
    }
  }
`

const SocialShareButtons: React.FunctionComponent = () => {
  const currentUrl = window.location.href

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
