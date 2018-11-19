import * as React from 'react'
import { colors, transitions, typography } from '../../theme'
import styled from 'styled-components'

const StyledNewsletterInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px 12px;
  background: ${colors.background};
  background-clip: padding-box;
  border: 1px solid ${colors.borderColor};
  border-radius: 0.25rem;
  transition: border-color ${transitions.basicTransition},
    box-shadow ${transitions.basicTransition};
  outline: none;
  color: ${colors.textColor};
  font-family: 'Montserrat', sans-serif;
  font-size: ${typography.ctaSize};
  line-height: 1.5;

  &:focus {
    border-color: ${colors.brand};
  }
`

interface NewsletterInputProps {
  type: string
  value: string
  name: string
  id: string
  className: string
  placeholder: string
  required: boolean
  onChange(e: React.SyntheticEvent): void
}

const NewsletterInput = (props: NewsletterInputProps) => {
  const {
    onChange,
    type,
    value,
    name,
    id,
    className,
    placeholder,
    required,
  } = props

  return (
    <StyledNewsletterInput
      onChange={e => onChange(e)}
      type={type}
      value={value}
      name={name}
      className={className}
      id={id}
      placeholder={placeholder}
      required={required}
    />
  )
}

export default NewsletterInput
