import * as React from 'react'
import styled from 'styled-components'
import menuItems, { MenuItemElement } from '../../enums/menuItems'
import { colors, transitions } from '../../theme'

const StyledMainMenuWrapper = styled.menu`
  margin: auto 0 auto auto;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

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

    &:hover,
    &.active {
      color: ${colors.linkActive};
    }
  }
`

const MenuItem = (item: MenuItemElement) => (
  <li>
    <a href={`#${item.targetElement}`} title={`#${item.name}`}>
      {item.name}
    </a>
  </li>
)

const MainMenu = () => (
  <StyledMainMenuWrapper>
    <ul>{menuItems.map(item => MenuItem(item))}</ul>
  </StyledMainMenuWrapper>
)

export default MainMenu
