import * as React from 'react'

const Spinner = () => (
  <svg
    xmlns={'http://www.w3.org/2000/svg'}
    width={250}
    height={250}
    viewBox={'0 0 24 24'}
  >
    <path
      fill={'#fff'}
      d={'M22 12a11.2 11.2 0 0 1-11 10.95c.33.05.66.05 1 .05a11 11 0 0 0 0-22c-.34 0-.67 0-1 .05C18 1 22 6.26 22 12Z'}
    >
      <animateTransform
        attributeName={'transform'}
        dur={'0.6s'}
        repeatCount={'indefinite'}
        type={'rotate'}
        values={'0 12 12;360 12 12'}
      />
    </path>
  </svg>
)

export default Spinner
