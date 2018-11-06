import * as React from 'react'
import styled from 'styled-components'
import { colors, displayDimensions } from '../../theme'

interface DarkerFooterProps {
  children: object
}

const StyledDarkerFooter = styled.div`
  display: flex;
  width: 100%;
  background: ${colors.backgroundDarkerGray};
  margin-top: 30px;
  padding: 30px 0;

  .container {
    display: flex;
    width: 66%;
    margin: auto;

    @media (max-width: ${displayDimensions.tabletSize}) {
      width: 100%;
      flex-direction: column;
      padding: 0 30px;
    }
  }
`

const DarkerFooter: React.SFC<DarkerFooterProps> = ({ children }) => (
  <StyledDarkerFooter>
    <div className="container">{children}</div>
  </StyledDarkerFooter>
)

export default DarkerFooter
