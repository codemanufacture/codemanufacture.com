import * as React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import MainMenu from '../MainMenu'
import { displayDimensions, sizes } from '../../theme'

interface HeaderProps {
  siteTitle: string
}

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${sizes.headerHeight};
  margin: 0 auto;
  padding: 0 30px;

  @media (max-width: ${displayDimensions.tabletSize}) {
    flex-direction: column;
    padding: 0;
  }
`

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <StyledHeaderWrapper>
    <Logo alt={siteTitle} width={260} height={40} />
    <MainMenu />
  </StyledHeaderWrapper>
)

export default Header
