# @Tim-jn/react-modal

Responsive modal dialog component for React.

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install @tim-jn/react-modal
    $ yarn add @tim-jn/react-modal

  - Use `<Modal>` tag inside your React app.

## Exemple

  - [Live demo](https://wealthhealth.netlify.app/)

```jsx

import { Modal } from '@tim-jn/react-modal/dist'
import React from 'react'

export default function Form() {
  window.React = React

  const [isValid, setIsValid] = useState(false)
  
  const handleModalResponse = () => {
    setIsValid(false)
  }

  const handleAddFormSubmit = (e) => {
    e.preventDefault()
    setIsValid(true)
  }

  return (
    <section className="formContent">
      <h2 className="formTitle">Create Employee</h2>
      <form className="form" onSubmit={handleAddFormSubmit}>
        (...)
      </form>
      {isValid ? <Modal text="Employee Created !" handleResponse={handleModalResponse} /> : ''}
    </section>
  )
}

```