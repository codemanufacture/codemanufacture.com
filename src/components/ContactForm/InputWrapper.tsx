import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'
import classNames from 'classnames'

const StyledInputWrapper = styled.fieldset`
  &.withErrors {
    input {
      border-bottom-color: #e42c3e;
    }
  }

  input {
    width: 100%;
    height: 48px;
    border: none;
    border-bottom: 1px solid ${colors.borderColor};
    outline: none;
  }
`

interface InputWrapperProps {
  id: string
  isInvalid: boolean
  label: string
  onChange(): void
  placeholder: string
  type: string
  value: string
}

const InputWrapper: React.SFC<InputWrapperProps> = ({
  onChange,
  value,
  placeholder,
  isInvalid,
  label,
  type,
  id,
}) => {
  const wrapperClassName = classNames({
    withErrors: isInvalid,
  })

  return (
    <StyledInputWrapper className={wrapperClassName}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </StyledInputWrapper>
  )
}
export default InputWrapper
