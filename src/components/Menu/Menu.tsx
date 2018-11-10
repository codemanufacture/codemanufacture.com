import * as React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import {
  colors,
  transitions,
  displayDimensions,
  sizes,
  typography,
} from '../../theme'
import MenuItem from './MenuItem'
import MenuItemInterface from '../Menu/MenuItemInterface'

const StyledMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }

  &:not(.compact-version) {
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
  }

  @media (max-width: ${displayDimensions.tabletSize}) {
    &:not(.compact-version) {
      width: 100%;
      top: ${sizes.headerHeight};
      position: absolute;
      transform: translateX(100%);
      flex-direction: column;
      background: ${colors.background};
      transition: transform ${transitions.basicTransition};

      &.active {
        right: 0;
        transform: translateX(0);
      }

      li {
        text-align: center;
      }
    }
  }

  &.compact-version {
    li {
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
  }
`

interface MenuProps {
  isCompactVersion?: boolean
  isMobileMenuActive?: boolean
  menuItems: MenuItemInterface[]
  onMenuClick?(): void
}

const Menu: React.SFC<MenuProps> = ({
  isMobileMenuActive,
  onMenuClick,
  isCompactVersion,
  menuItems,
}) => {
  const pagesListClassnames = classNames({
    active: isMobileMenuActive,
    'compact-version': isCompactVersion,
  })

  return (
    <StyledMenu
      className={pagesListClassnames}
      onClick={() => (onMenuClick ? onMenuClick() : null)}
    >
      {menuItems.map((item: MenuItemInterface, index: number) => (
        <MenuItem key={`menu-item-${index}`} item={item} />
      ))}
    </StyledMenu>
  )
}

export default Menu
