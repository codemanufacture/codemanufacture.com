import * as React from 'react'
import styled from 'styled-components'
import { colors, transitions, typography } from '../../theme'

interface ButtonProps {
  className?: string
  label: string
  type: 'button' | 'reset' | 'submit' | undefined
  onClick(e: React.SyntheticEvent): void
}

const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 30px;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  background: ${colors.brand};
  color: ${colors.buttonTextColor};
  font-size: ${typography.ctaSize};
  line-height: 1.5;
  transition: background-color ${transitions.basicTransition},
    color ${transitions.basicTransition};
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${colors.brandDarkGreen};
    color: ${colors.white};
  }
`

const ButtonWrapper: React.FunctionComponent<ButtonProps> = ({
  className,
  onClick,
  label,
  type,
}) => {
  return (
    <StyledButton type={type} onClick={e => onClick(e)} className={className}>
      {label}
    </StyledButton>
  )
}
export default ButtonWrapper
