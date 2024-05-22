import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
function LogIn({func}) {
  return (
   <>
    <div className="loginContainer">
      <div className="loginBtnContainer">
        <Link to={'/signup'}>
          <button className='loginBtn txt'>Dont Have an account? Click Here to log in</button>
        </Link>
      </div>
        <Form func = {func}/>
    </div>
   </>
  )
}

export default LogIn