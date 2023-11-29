import isEmail from 'validator/lib/isEmail'

export const formCreationData = [
  {
    label: 'First Name:',
    id: 'firstName',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required'
      },
      minLength: {
        value: 2,
        message: 'Minimum length is 2'
      }
    },
    isRequired: true,
    placeholder: 'Jan'
  },
  {
    label: 'Last Name:',
    id: 'lastName',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required'
      },
      minLength: {
        value: 2,
        message: 'Minimum length is 2'
      }
    },
    isRequired: true,
    placeholder: 'Kowalski'
  },
  {
    label: 'Street Name:',
    id: 'streetName',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required'
      },
      minLength: {
        value: 2,
        message: 'Minimum length is 2'
      }
    },
    isRequired: true,
    placeholder: 'Main Street'
  },
  {
    label: 'Street Number:',
    id: 'streetNumber',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required'
      },
      pattern: {
        value: /^[1-9][0-9]*[a-zA-Z]*(\/[1-9][0-9]*)?$/,
        message: 'Wrong format try 10a/10'
      }
    },
    isRequired: true,
    placeholder: '10a/10'
  },
  {
    label: 'Zip Code:',
    id: 'zipCode',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required'
      },
      pattern: {
        value: /^\d{2}-\d{3}$/g,
        message: 'Wrong format try 12-123'
      }
    },
    isRequired: true,
    placeholder: '12-123'
  },
  {
    label: 'City:',
    id: 'city',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required'
      },
      minLength: {
        value: 2,
        message: 'Minimum length is 2'
      }
    },
    isRequired: true,
    placeholder: 'Warsaw'
  },
  {
    label: 'E-mail:',
    id: 'eMail',
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
    label: 'Phone:',
    id: 'phone',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required'
      },
      pattern: {
        value: /^\d{3}-\d{3}-\d{3}$/g,
        message: 'Wrong format try 123-456-789'
      }
    },
    isRequired: true,
    placeholder: '123-456-789'
  }
]
