import * as React from 'react'
import styled from 'styled-components'
import { colors, displayDimensions } from '../../theme'
import InputWrapper from './InputWrapper'
import Button from '../Button'
import SectionContentContainer from '../SectionContentContainer'

const StyledContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 10px;

  @media (max-width: ${displayDimensions.tabletSize}) {
    display: flex;
    flex-direction: column;
  }

  button {
    margin-top: 40px;
    grid-column-start: 3;
    grid-column-end: 5;
  }

  fieldset {
    &:first-of-type {
      grid-column-start: 1;
      grid-column-end: 4;
    }

    &:nth-of-type(2) {
      grid-column-start: 4;
      grid-column-end: 7;
    }

    &:nth-of-type(3) {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    &:nth-of-type(4) {
      grid-column-start: 3;
      grid-column-end: 7;
    }

    &:last-of-type {
      grid-column-start: 1;
      grid-column-end: 7;
    }
  }
`

const formFields = {
  email: {
    id: 'email',
    label: 'Email Address',
    placeholder: 'Email Address',
    type: 'email',
  },
  message: {
    id: 'message',
    label: 'Your Message',
    placeholder: 'Your Message',
    type: 'textarea',
  },
  name: {
    id: 'name',
    label: 'Name',
    placeholder: 'Name',
    type: 'text',
  },
  phone: {
    id: 'phone',
    label: 'Phone',
    placeholder: 'Phone',
    type: 'phone',
  },
  subject: {
    id: 'subject',
    label: 'Subject',
    placeholder: 'Subject',
    type: 'text',
  },
}

interface ContactFormState {
  errors: object
  values: object
}

interface ContactFormProps {
  props: object
}

class ContactForm extends React.PureComponent<
  ContactFormProps,
  ContactFormState
> {
  constructor(props: object) {
    super(props)

    this.state = {
      errors: {},
      values: {},
    }
  }

  handleInputChange = (field: string, e: React.SyntheticEvent) => {
    const values = this.state.values
    values[field] = e.target.value
    this.setState({ values })
  }

  handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log('submit')
  }

  renderFormFields = (fields: object) => {
    const fieldNames = Object.keys(fields)

    return fieldNames.map(field => {
      const fieldId = fields[field].id

      return (
        <InputWrapper
          value={this.state.values[fieldId]}
          onChange={e => this.handleInputChange(fieldId, e)}
          placeholder={fields[field].placeholder}
          type={fields[field].type}
          id={fields[field].id}
          label={fields[field].label}
        />
      )
    })
  }

  render() {
    return (
      <SectionContentContainer>
        <h2>Contact Us</h2>
        <StyledContactForm>
          {this.renderFormFields(formFields)}
          <Button
            type="submit"
            label="Send message"
            onClick={e => this.handleFormSubmit(e)}
          />
        </StyledContactForm>
      </SectionContentContainer>
    )
  }
}

export default ContactForm
