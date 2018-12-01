import validator from 'validator'

export const validateText = (text: string) =>
  text.length && validator.isLength(text, { min: 3 })

export const validateEmail = (email: string) => validator.isEmail(email)
