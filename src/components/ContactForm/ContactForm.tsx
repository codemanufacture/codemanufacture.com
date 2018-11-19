import * as React from 'react'
import styled from 'styled-components'
import { displayDimensions } from '../../theme'
import Input from '../Input'
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

const formFields = [
  {
    hasErrors: false,
    id: 'email',
    label: 'Email Address',
    placeholder: 'Email Address',
    required: true,
    type: 'email',
    value: '',
  },
  {
    hasErrors: false,
    id: 'message',
    label: 'Your Message',
    placeholder: 'Your Message',
    required: true,
    type: 'textarea',
    value: '',
  },
  {
    hasErrors: false,
    id: 'name',
    label: 'Name',
    placeholder: 'Name',
    required: true,
    type: 'text',
    value: '',
  },
  {
    hasErrors: false,
    id: 'phone',
    label: 'Phone',
    placeholder: 'Phone',
    required: false,
    type: 'phone',
    value: '',
  },
  {
    hasErrors: false,
    id: 'subject',
    label: 'Subject',
    placeholder: 'Subject',
    required: true,
    type: 'text',
    value: '',
  },
]

interface FormField {
  hasErrors: boolean
  id: string
  label: string
  placeholder: string
  required: boolean
  type: string
  value: string
}

interface ContactFormState {
  fields: FormField
}

interface ContactFormProps {
  props: object
}

class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
  constructor(props: object) {
    super(props)

    this.state = {
      fields: formFields,
    }
  }

  handleInputChange = (fieldId: string, e: React.SyntheticEvent) => {
    const { fields } = this.state
    const indexOfFieldToUpdate = fields.findIndex(field => field.id === fieldId)

    fields[indexOfFieldToUpdate].value = e.target.value
    this.setState({ fields })
  }

  handleFormSubmit = (e: React.SyntheticEvent, fieldsToValidate: array) => {
    e.preventDefault()
    const { fields } = this.state
    const requiredFields = fieldsToValidate.filter(
      (field: object) => field.required
    )
    requiredFields.map((requiredField, index) => {
      const indexOfFieldToUpdate = fields.findIndex(
        field => field.id === requiredField.id
      )
      if (!requiredField.value) {
        fields[indexOfFieldToUpdate].hasErrors = true
      }
    })

    this.setState({ fields })

    console.log(this.state)
  }

  renderFormFields = (fields: array) => {
    return fields.map(field => {
      const fieldId = field.id

      console.log(field.hasErrors)

      return (
        <Input
          value={field.value}
          onChange={e => this.handleInputChange(fieldId, e)}
          placeholder={field.placeholder}
          type={field.type}
          id={field.id}
          label={field.label}
          required={field.required}
          hasErrors={field.hasErrors}
        />
      )
    })
  }

  render() {
    console.log('rendering')
    return (
      <SectionContentContainer>
        <h2>Contact Us</h2>
        <StyledContactForm>
          {this.renderFormFields(this.state.fields)}
          <Button
            type="submit"
            label="Send message"
            onClick={e => this.handleFormSubmit(e, formFields)}
          />
        </StyledContactForm>
      </SectionContentContainer>
    )
  }
}

export default ContactForm
