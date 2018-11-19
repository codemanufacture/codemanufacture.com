import validator from 'validator'

export const validateText = text =>
  text.length && validator.isLength(text, { min: 3 })

export const validateEmail = email => validator.isEmail(email)
