import React from 'react';
import axios from "axios";
function Form({setCreateUser, setUsers}) {

    const createUser = async (event) => {
        event.preventDefault();
        const account = {userName,email,password}
        const data = {
            userName: account.userName.value,
            email: account.email.value,
            password: account.password.value

        }
        console.log(account.userName.value)
        const response = await axios.post(`http://localhost:3000/signup`, data)
        console.log(response)
    }
  return (
    <>
        <div className="masterContainer">
            <div className='formContainer'>
                <form  onSubmit={createUser}>
                <div className='formEntry'>
                    <div className="labelContainer">
                        <label htmlFor="userName">Name</label>
                    </div>
                    <input type='text' name='userName' id='userName' placeholder='Enter User Name'/>
                </div>
                <div className='formEntry'>
                    <div className="labelContainer">
                        <label htmlFor="email">Email</label>
                    </div>
                    <input type='text' name='email' id='email' placeholder='Enter Email'/>
                </div>
                <div className='formEntry'>
                    <div className="labelContainer">
                        <label htmlFor="password">Password</label>
                    </div>
                    <input type='password' name='password' id='password' placeholder='Enter Password'/>
                </div>
                <div className="buttonContainer">
                    <button type='reset'>Clear</button>
                    <button type='submit'>Submit</button>
                </div>
                </form>

            </div>
        </div>
        
    </>
  )
}

export default Form