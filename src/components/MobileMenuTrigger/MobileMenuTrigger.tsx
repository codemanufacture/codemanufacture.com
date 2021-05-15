import * as React from 'react'
import styled from 'styled-components'
import { colors, displayDimensions } from '../../theme'

const StyledMobileMenuTrigger = styled.a`
  display: none;
  padding: 24px 22px;
  position: absolute;
  right: 0;
  color: ${colors.link};
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;

  @media (max-width: ${displayDimensions.tabletSize}) {
    display: block;
  }
`

interface MobileMenuTriggerProps {
  onClick: (e: React.MouseEvent) => void
}

const MobileMenuTrigger: React.FunctionComponent<MobileMenuTriggerProps> =
  props => (
    <StyledMobileMenuTrigger
      href="#trigger-mobile-menu"
      onClick={e => props.onClick(e)}
    >
      Menu
    </StyledMobileMenuTrigger>
  )

export default MobileMenuTrigger
