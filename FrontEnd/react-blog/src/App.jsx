import { useState } from 'react'
import Form from './components/Form'
import axios from 'axios';
import './App.css'


function App() {
  const [Createuser, setCreateUser] = useState({userName: "", email: "", password: " "});
  const [users, setUsers] = useState([]);

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
        <Form setCreateUser = {setCreateUser} setUsers = {setUsers} createUser = {createUser}/>
    </>
  )
}

export default App
