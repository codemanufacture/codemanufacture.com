import * as React from 'react'
import styled from 'styled-components'
import { colors, transitions, displayDimensions, typography } from '../../theme'
import MenuItem from '../MenuItem'

const StyledMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  li {
    list-style: none;

    margin: auto;
    font-size: ${typography.paragraphSize};
    color: ${colors.fadedGrayText};

    + li {
      margin-left: 10px;

      &:before {
        content: '/';
        margin-right: 10px;
      }
    }

    a {
      color: inherit;
      font-size: inherit;
      text-decoration: none;
      transition: color ${transitions.basicTransition};

      &:hover {
        color: ${colors.white};
      }
    }

    @media (max-width: ${displayDimensions.smallPhoneSize}) {
      font-size: 0.7rem;
    }
  }

  @media (max-width: ${displayDimensions.tabletSize}) {
    justify-content: center;

    li {
      margin: initial;
    }
  }
`

const FooterMenu = () => {
  return (
    <StyledMenu>
      <MenuItem pagePath="/homepage#home" name="Home" />
      <MenuItem pagePath="/homepage#services" name="Services" />
      <MenuItem pagePath="/privacy-policy" name="Privacy Policy" />
    </StyledMenu>
  )
}

export default FooterMenu
