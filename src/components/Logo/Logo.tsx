import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import * as logo from './images/logo.svg'

interface LogoProps {
  alt?: string
  src?: string
  width?: number
  height?: number
}

const StyledLogoWrapper = styled(Link)`
  margin: auto auto auto 0;
`

const Logo: React.SFC<LogoProps> = ({ alt, width, height }) => (
  <StyledLogoWrapper to="/" title="Back to homepage">
    <img src={logo} alt={alt} width={width} height={height} />
  </StyledLogoWrapper>
)

export default Logo
