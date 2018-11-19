import * as React from 'react'
import styled from 'styled-components'
import { colors, typography } from '../../theme'
import classNames from 'classnames'

interface InputProps {
  id: string
  isInvalid: boolean
  label: string
  placeholder: string
  type: string
  value: string
  onChange(): void
}

const StyledInput = styled.fieldset`
  border: none;

  input {
    width: 100%;
    height: 48px;
    padding: 8px 4px;
    border: none;
    border-bottom: 1px solid ${colors.borderColor};
    outline: none;
    font-family: ${typography.basicFontFamily};
    font-size: ${typography.paragraphSize};
    color: ${colors.textColor};

    ::-webkit-input-placeholder {
      font-family: ${typography.basicFontFamily};
    }
    ::-moz-placeholder {
      font-family: ${typography.basicFontFamily};
    }
    :-ms-input-placeholder {
      font-family: ${typography.basicFontFamily};
    }
  }

  &.withErrors {
    input {
      color: ${colors.errorColor};
      border-bottom-color: ${colors.errorColor};
    }
  }

  label {
    display: none;
  }
`

const Input: React.SFC<InputProps> = ({
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
    <StyledInput className={wrapperClassName}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </StyledInput>
  )
}
export default Input
