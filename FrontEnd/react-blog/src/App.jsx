import { useState } from 'react'
import Form from './components/Form'
import './App.css'

function App() {
  const [Createuser, setCreateUser] = useState({userName: "", email: "", password: " "});
  const [users, setUsers] = useState([]);

  return (
    <>
        <Form setCreateUser = {setCreateUser} setUsers = {setUsers}/>
    </>
  )
}

export default App
