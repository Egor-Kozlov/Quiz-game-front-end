import LoginForm from '../LoginForm/LogiForm'
import RegisttarionForm from '../RegistrationForm/RegistrationForm'
import React, { useState } from 'react'
import './Form.scss'

const Form = () => {
  const [currentForm, setCurrentForm] = useState('login')
  const toggleForm = (formName:any) => {
    setCurrentForm(formName)
  }

  return (
    <div className='main'>
      {
        currentForm === 'login' ? <LoginForm onFormSwitch={toggleForm} /> : <RegisttarionForm onFormSwitch={toggleForm} />
      }
    </div>
  )

}

export default Form