import React from 'react'
import Form from '../components/Form'
import { Link } from 'react-router-dom'
function SignUp({func}) {
  return (
    <>
    <div className="signUpContainer">
      <div className="signUpBtnContainer">
        <Link to={'/login'}>
          <button className='signUpBtn'>Already have an account? Click Here to log in</button>
        </Link>
      </div>
        <Form func = {func}/>
    </div>
        
    </>
    
  )
}

export default SignUp