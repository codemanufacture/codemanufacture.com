import * as React from 'react'
import styled from 'styled-components'
import { colors, typography } from '../../theme'
import classNames from 'classnames'

const StyledTextArea = styled.fieldset`
  border: none;

  textarea {
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
    textarea {
      color: ${colors.errorColor};
      border-bottom-color: ${colors.errorColor};
    }
  }

  label {
    display: none;
  }
`

interface TextAreaProps {
  hasErrors: boolean | undefined
  id: string | undefined
  label: string
  placeholder: string
  required: boolean
  value: string
  onChange(e: React.ChangeEvent<HTMLTextAreaElement>): void
}

const TextArea: React.SFC<TextAreaProps> = props => {
  const { hasErrors, id, label, onChange, placeholder, required, value } = props

  const wrapperClassName = classNames({
    withErrors: hasErrors,
  })

  return (
    <StyledTextArea className={wrapperClassName}>
      <textarea
        value={value}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        required={required}
      />
      <label htmlFor={id}>{label}</label>
    </StyledTextArea>
  )
}
export default TextArea
