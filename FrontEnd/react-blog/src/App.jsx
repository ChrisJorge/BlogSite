// Import CSS
import './App.css'
// Import Pages
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
// Import Libraries
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'


function App() {
  const [user, setUser] = useState([]);

  const createUser = async (event) => {
    event.preventDefault();
    const account = {userName,email,password}
    const data = {
        userName: account.userName.value,
        email: account.email.value,
        password: account.password.value

    }
    const response = await axios.post(`http://localhost:3000/signup`, data)
    console.log(response)
}

  return (
    <>
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SignUp func = {createUser}/>}/>
        <Route path='/login' element={<LogIn func = {createUser}/>} />
      </Routes>
    </div>
        
    </>
  )
}

export default App
