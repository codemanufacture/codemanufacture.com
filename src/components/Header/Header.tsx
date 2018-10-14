import * as React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import MainMenu from '../MainMenu'
import { dimensions } from '../../theme'

interface HeaderProps {
  siteTitle: string
}

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin: 0 auto;
  padding: 0 30px;

  @media (max-width: ${dimensions.tabletSize}) {
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
