import * as React from 'react'
import styled from 'styled-components'
import { displayDimensions } from '../../theme'
import MobileMenuTrigger from './components/MobileMenuTrigger'
import MainMenu from '../MainMenu'

const StyledMainMenuWrapper = styled.menu`
  margin: auto 0 auto auto;
  padding: 0;

  @media (max-width: ${displayDimensions.tabletSize}) {
    position: fixed;
    width: 100%;
    margin: auto;
    top: 0;
    right: 0;
    left: 0;
    will-change: transform;
    z-index: 1;
  }
`

interface MainMenuWrapperState {
  isMobileMenuActive: boolean
}

class MainMenuWrapper extends React.PureComponent<{}, MainMenuWrapperState> {
  constructor(props: object) {
    super(props)
    this.state = {
      isMobileMenuActive: false,
    }
  }

  handleTriggerClick = (e: React.MouseEvent) => {
    e.preventDefault()
    this.setState({ isMobileMenuActive: !this.state.isMobileMenuActive })
  }

  handleMenuClick = () => {
    if (this.state.isMobileMenuActive) {
      this.setState({ isMobileMenuActive: false })
    }
  }

  render() {
    return (
      <StyledMainMenuWrapper>
        <MainMenu
          onMenuClick={this.handleMenuClick}
          isMobileMenuActive={this.state.isMobileMenuActive}
        />
        <MobileMenuTrigger
          onClick={(e: React.MouseEvent) => this.handleTriggerClick(e)}
        />
      </StyledMainMenuWrapper>
    )
  }
}

export default MainMenuWrapper
