import React from 'react'
import Form from '../components/Form'
import { Link } from 'react-router-dom'
function SignUp({func}) {
  const data = [{
    labeltype: 'text',
    name: 'userName',
    labeltxt: 'User Name',
    placeholdertxt: 'Enter User Name'
  },
  {
    labeltype: 'text',
    name: 'email',
    labeltxt: 'Email',
    placeholdertxt: 'Enter Email'
  },
  {
    labeltype: 'password',
    name: 'password',
    labeltxt: 'Password',
    placeholdertxt: 'Enter password'
  },
]

  return (
    <>
    <div className="signUpContainer">
      <div className="signUpBtnContainer">
        <Link to={'/login'}>
          <button className='signUpBtn'>Already have an account? Click Here to log in</button>
        </Link>
      </div>
        <Form func = {func} data = {data}/>
    </div>
        
    </>
    
  )
}

export default SignUp