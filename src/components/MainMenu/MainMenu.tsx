import * as React from 'react'
import styled from 'styled-components'
import homepageSections, {
  HomepageSectionElement,
} from '../../enums/homepageSections'
import { colors, transitions, dimensions } from '../../theme'
import uniqid from 'uniqid'

const StyledMainMenuWrapper = styled.menu`
  margin: auto 0 auto auto;
  padding: 0;

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

  @media (max-width: ${dimensions.tabletSize}) {
    margin: auto;

    ul {
      flex-direction: column;

      li {
        text-align: center;
      }
    }
  }
`

const MenuItem = (item: HomepageSectionElement) => (
  <li key={uniqid()}>
    <a href={`#${item.sectionId}`} title={`#${item.name}`}>
      {item.name}
    </a>
  </li>
)

const MobileMenuTrigger = () => <a href="#trigger-mobile-menu">Menu</a>

class MainMenu extends React.PureComponent {
  constructor(props: object) {
    super(props)
    this.state = {
      isMobileMenuActive: false,
    }
  }

  render() {
    return (
      <StyledMainMenuWrapper>
        <ul>
          {homepageSections.map((item: HomepageSectionElement) =>
            MenuItem(item)
          )}
        </ul>
        <MobileMenuTrigger />
      </StyledMainMenuWrapper>
    )
  }
}

export default MainMenu
