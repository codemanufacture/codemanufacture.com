import * as React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { colors, transitions, displayDimensions, sizes } from '../../theme'
import homepageSections, {
  HomepageSectionElement,
} from '../../enums/homepageSections'
import MenuItem from './MenuItem'

const StyledMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  li {
    list-style: none;

    a {
      display: block;
      padding: 24px 22px;
      font-size: 12px;
      color: ${colors.link};
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 3px;
      transition: color ${transitions.basicTransition};

      &:hover,
      &.active {
        color: ${colors.linkActive};
      }
    }
  }

  @media (max-width: ${displayDimensions.tabletSize}) {
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
`

interface MenuProps {
  isMobileMenuActive: boolean
  onMenuItemClick(): void
}

const Menu: React.SFC<MenuProps> = ({
  isMobileMenuActive,
  onMenuItemClick,
}) => {
  const pagesListClassnames = classNames({
    active: isMobileMenuActive,
  })

  return (
    <StyledMenu className={pagesListClassnames}>
      {homepageSections.map((item: HomepageSectionElement, index: number) => (
        <MenuItem
          key={`menu-item-${index}`}
          item={item}
          onClick={() => onMenuItemClick()}
        />
      ))}
    </StyledMenu>
  )
}

export default Menu
