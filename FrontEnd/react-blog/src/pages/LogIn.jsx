import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
function LogIn({func}) {
    const data = [{
        labeltype: 'text',
        name: 'userName',
        labeltxt: 'User Name',
        placeholdertxt: 'Enter User Name'
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
    <div className="loginContainer">
      <div className="loginBtnContainer">
        <Link to={'/signup'}>
          <button className='loginBtn txt'>Dont Have an account? Click Here to log in</button>
        </Link>
      </div>
        <Form func = {func} data={data}/>
    </div>
   </>
  )
}

export default LogIn