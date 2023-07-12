import { useState } from "react";


const RegistrationForm = (props: any) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(email + password);
  }
  return (
    <div className="form-conteiner">
      <form className='register-form' onSubmit={handleSubmit}>
        <label>Full name</label>
        <input value={name} name='name' id="name" placeholder="Full name"></input>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="youremail@gamil.com" id="email" name="email" />
        <label htmlFor="password">password </label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder="********" id="password" name="password" />
        <button type='submit'>Log In</button>
      </form>
      <button onClick={() => props.onFormSwitch('login')}>Register</button>
    </div>
  )
}

export default RegistrationForm