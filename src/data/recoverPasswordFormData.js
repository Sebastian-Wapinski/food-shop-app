import isEmail from 'validator/lib/isEmail'

export const recoverPasswordFormData = [
  {
    label: 'E-mail:',
    id: 'recoverEmail',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required'
      },
      validate: (email) => isEmail(email) || 'Wrong format try abc@abc.com'
    },
    isRequired: true,
    placeholder: 'abc@abc.com'
  }
]
