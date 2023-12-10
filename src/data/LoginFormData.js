import isEmail from 'validator/lib/isEmail'

export const loginFormData = [
  {
    label: 'E-mail:',
    id: 'logInEmail',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required'
      },
      validate: (email) => isEmail(email) || 'Wrong format try abc@abc.com'
    },
    isRequired: true,
    placeholder: 'abc@abc.com'
  },
  {
    label: 'Password:',
    id: 'password',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required'
      },
      minLength: {
        value: 6,
        message: 'Minimum length is 6'
      }
    },
    isRequired: true,
    type: 'password'
  }
]
