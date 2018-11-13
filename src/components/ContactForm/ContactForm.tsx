import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'
import InputWrapper from './InputWrapper'

const StyledContactForm = styled.div`
`

const formFields = {
    name: {
        label: 'Name',
        id: 'name',
        placeholder: 'Name',
        type: 'text',
    },
    email: {
        label: 'Email Address',
        id: 'email',
        placeholder: 'Email Address',
        type: 'email'
    },
    phone: {
        label: 'Phone',
        id: 'phone',
        placeholder: 'Phone',
        type: 'phone'
    },
    subject: {
        label: 'Subject',
        id: 'subject',
        placeholder: 'Subject',
        type: 'text',
    },
    message: {
        label: 'Your Message',
        id: 'message',
        placeholder: 'Your Message',
        type: 'textarea'
    },
}

interface ContactFormState {
    values: object
    errors: object
}

interface ContactFormProps {
    props: object
}

class ContactForm extends React.PureComponent<ContactFormProps, ContactFormState> {
    constructor(props: object) {
        super(props)

        this.state = {
            values: {},
            errors: {},
        }
    }

    handleInputChange = (field: string, e: React.SyntheticEvent) => {
        let values = this.state.values;
        values[field] = e.target.value;
        this.setState({ values });
    }

    renderFormFields = (formFields: object) => {
        const fieldNames = Object.keys(formFields);

        return fieldNames.map((field) => {
            const fieldId = formFields[field].id

            return (
                <InputWrapper
                    value={this.state.values[fieldId]}
                    onChange={(e) => this.handleInputChange(fieldId, e)}
                    placeholder={formFields[field].placeholder}
                    type={formFields[field].type}
                    id={formFields[field].id}
                    label={formFields[field].label}
                />
            )
        })
    }


    render() {
        return (
            <StyledContactForm>
                {this.renderFormFields(formFields)}
            </StyledContactForm>
        )
    }
}

export default ContactForm
