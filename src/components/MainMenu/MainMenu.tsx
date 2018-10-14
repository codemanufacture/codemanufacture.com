import * as React from 'react'
import styled from 'styled-components'
import homepageSections, {
  HomepageSectionElement,
} from '../../enums/homepageSections'
import { colors, transitions, displayDimensions, sizes } from '../../theme'
import uniqid from 'uniqid'
import classNames from 'classnames'

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
    position: fixed;
    width: 100%;
    margin: auto;
    top: 0;
    right: 0;
    left: 0;
    will-change: transform;
    z-index: 1;

    ul {
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
`

const StyledMobileMenuTrigger = styled.a`
  display: none;
  padding: 24px 22px;
  position: absolute;
  right: 0;
  color: ${colors.link};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;

  @media (max-width: ${displayDimensions.tabletSize}) {
    display: block;
  }
`

const MenuItem = (item: HomepageSectionElement) => (
  <li key={uniqid()}>
    <a href={`#${item.sectionId}`} title={`#${item.name}`}>
      {item.name}
    </a>
  </li>
)

interface MobileMenuTriggerProps {
  onClick: (e: React.MouseEvent) => void
}

const MobileMenuTrigger: React.SFC<MobileMenuTriggerProps> = (props) => (
  <StyledMobileMenuTrigger href="#trigger-mobile-menu" onClick={(e) => props.onClick(e)}>
    Menu
  </StyledMobileMenuTrigger>
)

interface MainMenuState {
  isMobileMenuActive: boolean
}

class MainMenu extends React.PureComponent<{}, MainMenuState> {
  constructor(props: object) {
    super(props)
    this.state = {
      isMobileMenuActive: false,
    }
  }

  handleTriggerClick = (e: React.MouseEvent) => {
    e.preventDefault()
    this.setState({isMobileMenuActive: !this.state.isMobileMenuActive})
    console.log(this.state)
  }

  render() {
    const pagesListClassnames = classNames({
      active: this.state.isMobileMenuActive,
    })

    return (
      <StyledMainMenuWrapper>
        <ul className={pagesListClassnames}>
          {homepageSections.map((item: HomepageSectionElement) =>
            MenuItem(item)
          )}
        </ul>
        <MobileMenuTrigger onClick={(e: React.MouseEvent) => this.handleTriggerClick(e)}/>
      </StyledMainMenuWrapper>
    )
  }
}

export default MainMenu
