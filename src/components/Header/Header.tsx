import * as React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import MainMenu from '../MainMenu'

interface HeaderProps {
  siteTitle: string
}

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin: 0 auto;
  padding: 0 30px;
`

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <StyledHeaderWrapper>
    <Logo alt={siteTitle} width={260} height={40} />
    <MainMenu />
  </StyledHeaderWrapper>
)

export default Header
