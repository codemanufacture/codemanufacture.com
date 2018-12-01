import * as React from 'react'
import styled from 'styled-components'
import { transitions } from '../../theme'

export interface SocialIconProps {
  backgroundColor: string
  icon: string
  height: number
  name: string
  url: string
  width: number
}

interface StyledSocialIcon {
  backgroundColor: string
}

const StyledSocialIcon = styled('figure')<StyledSocialIcon>`
  border-radius: 2px;
  background: transparent;
  transition: background ${transitions.basicTransition};

  &:hover {
    background: ${props => props.backgroundColor};
  }

  a {
    display: block;
    width: 32px;
    height: 32px;
    position: relative;
    overflow: hidden;

    .icon-wrapper {
      display: block;
      width: 32px;
      height: 32px;
      margin: auto;
      padding: 0;
      position: absolute;
      transition: ${transitions.basicTransition};

      &:first-of-type {
        top: 0;
        opacity: 0.25;
      }
      &:last-of-type {
        top: 32px;
      }
    }

    &:hover {
      .icon-wrapper {
        &:first-of-type,
        &:last-of-type {
          transform: translate(0, -32px);
        }
      }
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

const SocialIcon: React.FunctionComponent<SocialIconProps> = ({
  backgroundColor,
  icon,
  name,
  url,
  width,
  height,
}) => (
  <li>
    <StyledSocialIcon backgroundColor={backgroundColor}>
      <a href={url} rel="noopener norefferer" target="_blank">
        <span className="icon-wrapper">
          <img src={icon} alt={`${name}`} width={width} height={height} />
        </span>
        <span className="icon-wrapper">
          <img src={icon} alt={`${name}`} width={width} height={height} />
        </span>
      </a>
    </StyledSocialIcon>
  </li>
)

export default SocialIcon
