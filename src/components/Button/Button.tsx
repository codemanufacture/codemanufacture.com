import * as React from 'react'
import styled from 'styled-components'
import { colors, transitions, typography } from '../../theme'

interface ButtonProps {
  label: string
  type: string
  onClick(e: React.SyntheticEvent): void
}

const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 0 22px;
  border: 2px solid ${colors.backgroundGray};
  border-radius: 20px;
  font-size: ${typography.paragraphSize};
  font-family: ${typography.basicFontFamily};
  cursor: pointer;
  line-height: 36px;
  text-transform: uppercase;
  color: ${colors.backgroundGray};
  white-space: nowrap;
  transition: border ${transitions.basicTransition},
    color ${transitions.basicTransition},
    background ${transitions.basicTransition};
  outline: none;

  &:hover {
    background-color: ${colors.backgroundGray};
    color: ${colors.white};
    border-color: transparent !important;
  }
`

const ButtonWrapper: React.FunctionComponent<ButtonProps> = ({
  onClick,
  label,
  type,
}) => {
  return (
    <StyledButton type={type} onClick={e => onClick(e)}>
      {label}
    </StyledButton>
  )
}
export default ButtonWrapper
