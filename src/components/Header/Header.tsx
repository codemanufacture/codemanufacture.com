import * as React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import MainMenuWrapper from '../MainMenuWrapper'
import { colors, displayDimensions, sizes } from '../../theme'

interface HeaderProps {
  siteTitle: string
}

const StyledHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${sizes.headerHeight};
  margin: 0 auto;
  padding: 0 30px;
  border-bottom: 1px solid ${colors.borderColor};
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
  background: ${colors.background};

  @media (max-width: ${displayDimensions.tabletSize}) {
    flex-direction: column;
    padding: 0;
  }
`

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <StyledHeaderWrapper>
    <Logo alt={siteTitle} width={260} height={40} />
    <MainMenuWrapper />
  </StyledHeaderWrapper>
)

export default Header
