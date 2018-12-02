import * as React from 'react'
import styled from 'styled-components'
import { displayDimensions } from '../../theme'
import Input from '../Input'
import Button from '../Button'
import TextArea from '../TextArea'
import SectionContentContainer from '../SectionContentContainer'
import { validateText, validateEmail } from '../../helpers/validationHelper'

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
    id: 'name',
    label: 'Name',
    placeholder: 'Name',
    required: true,
    type: 'text',
    value: '',
  },
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
  {
    hasErrors: false,
    id: 'message',
    label: 'Your Message',
    placeholder: 'Your Message',
    required: true,
    type: 'textarea',
    value: '',
  },
]

interface FormField {
  hasErrors: boolean | undefined
  id: string
  label: string
  placeholder: string
  required: boolean
  type: string
  value: string
}

interface ContactFormState {
  fields: FormField[]
}

class ContactForm extends React.Component<{}, ContactFormState> {
  constructor(props: object) {
    super(props)

    this.state = {
      fields: formFields,
    }
  }

  validateField = (field: FormField) => {
    switch (field.type) {
      case 'text':
      case 'textarea':
        return (field.hasErrors = validateText(field.value) ? false : true)
      case 'email':
        return (field.hasErrors = validateEmail(field.value) ? false : true)
      default:
        break
    }
  }

  handleInputChange = (
    fieldId: string,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { fields } = this.state
    const indexOfFieldToUpdate: number = fields.findIndex(
      field => field.id === fieldId
    )

    if (fields[indexOfFieldToUpdate].hasErrors) {
      fields[indexOfFieldToUpdate].hasErrors = this.validateField(
        fields[indexOfFieldToUpdate]
      )
    }

    fields[indexOfFieldToUpdate].value = e.target.value
    this.setState({ fields })
  }

  handleFormSubmit = (
    e: React.SyntheticEvent,
    fieldsToValidate: FormField[]
  ) => {
    e.preventDefault()
    const { fields } = this.state
    const requiredFields = fieldsToValidate.filter(
      (field: FormField) => field.required
    )
    requiredFields.map((requiredField: FormField) => {
      const indexOfFieldToUpdate = fields.findIndex(
        field => field.id === requiredField.id
      )

      fields[indexOfFieldToUpdate].hasErrors = this.validateField(
        fields[indexOfFieldToUpdate]
      )
    })

    this.setState({ fields })
  }

  renderFormFields = (fields: FormField[]) => {
    fields = fields.filter((field: FormField) => field.type !== 'textarea')
    return fields.map((field: FormField) => {
      const fieldId = field.id

      return (
        <Input
          key={`contact-form-input-${field.id}`}
          value={field.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            this.handleInputChange(fieldId, e)
          }
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
    const textAreaProps: FormField | undefined = this.state.fields.find(
      (field: FormField) => field.type === 'textarea'
    )

    return (
      <SectionContentContainer>
        <h2>Contact Us</h2>
        <StyledContactForm>
          {this.renderFormFields(this.state.fields)}
          {textAreaProps && (
            <TextArea
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                this.handleInputChange(textAreaProps.id, e)
              }
              {...textAreaProps}
            />
          )}
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
