// Import CSS
import './App.css'
// Import Pages
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Homepage from './pages/Homepage';
// Import Libraries
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Mainpage from './pages/Mainpage';



function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

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

const login = async(event) => {
  event.preventDefault();
  const account = {userName,password}
  const data = {
    userName: account.userName.value,
    password: account.password.value
  }

  const response = await axios.post(`http://localhost:3000/login`, data)
    console.log(response)
    if(response.data === 'OK')
      {
        setUser(data.userName)
        console.log('user set')
        navigate("/homepage")
      }
}

const notSignedIn = () => {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path='/signup' element={<SignUp func = {createUser}/>}/>
        <Route path='/login' element={<LogIn func = {login}/>} />
      </Routes>
    </div>
        
    </>
  )
}

const signedIn = () => {
  return(
    <>
      <div className="app">
        <Routes>
          <Route path='/homepage' element={<Mainpage />}/>
        </Routes>
      </div>
    </>
  )
}
 
  return user ? signedIn(): notSignedIn()

}

export default App
