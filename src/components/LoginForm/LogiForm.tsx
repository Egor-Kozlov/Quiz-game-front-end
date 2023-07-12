import './LoginForm.scss';
import React, { useState } from 'react';


const LoginForm = (props: any) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(email + password);
  }
  return (
    <div className='form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="youremail@gamil.com" id="email" name="email" />
        <label htmlFor="password">password </label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder="********" id="password" name="password" />
        <button type='submit'>Log In</button>
      </form>
      <button onClick={() => props.onFormSwitch('register')}>Register</button>
    </div>


  )
}

export default LoginForm