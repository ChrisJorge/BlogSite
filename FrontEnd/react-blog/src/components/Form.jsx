import React from 'react';
function Form({setCreateUser, setUsers, createUser}) {

   
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