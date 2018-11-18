import * as React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { colors, transitions, displayDimensions, sizes } from '../../theme'
import MenuItem from '../MenuItem'

const StyledMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  will-change: auto;

  li {
    list-style: none;
  }

  a {
    display: block;
    padding: 24px 22px;
    font-size: 12px;
    color: ${colors.link};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: color ${transitions.basicTransition};
  }

  &:hover,
  &.active {
    color: ${colors.linkActive};
  }

  @media (max-width: ${displayDimensions.tabletSize}) {
    width: 100%;
    top: ${sizes.headerHeight};
    position: absolute;
    transform: translateX(100%);
    flex-direction: column;
    background: ${colors.background};
    transition: transform ${transitions.basicTransition};
    border-bottom: 1px solid ${colors.borderColor};

    &.active {
      right: 0;
      transform: translateX(0);
    }

    li {
      text-align: center;
    }
  }
`

interface MainMenuProps {
  isMobileMenuActive: boolean
  onMenuClick(): void
}

const MainMenu: React.FunctionComponent<MainMenuProps> = ({
  isMobileMenuActive,
  onMenuClick,
}) => {
  const menuClassName = classNames({
    active: isMobileMenuActive,
  })

  return (
    <StyledMenu onClick={onMenuClick} className={menuClassName}>
      <MenuItem pagePath="/homepage#home" name="Home" />
      <MenuItem pagePath="/homepage#services" name="Services" />
    </StyledMenu>
  )
}

export default MainMenu
