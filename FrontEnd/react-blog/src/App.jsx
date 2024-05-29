// Import CSS
import './App.css'
// Import Pages
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
// Import Libraries
import axios, { AxiosError } from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Mainpage from './pages/Mainpage';



function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null)
  const [posts, setPosts] = useState(null)
  const navigate = useNavigate()

  const createUser = async (event) => {
    event.preventDefault();
    let msg = document.querySelector('.announcementTxt')
    const account = {userName,email,password}
    const data = {
        userName: account.userName.value,
        email: account.email.value,
        password: account.password.value

    }
    try{
      const response = await axios.post(`http://localhost:3000/signup`, data)
      console.log(response)
      if(response.data === "OK")
        {
          msg.innerHTML = "Account Created! Please Login"
          msg.setAttribute('style', 'color:green');
      }
    }
    catch(error)
    {
      msg.innerHTML = "Account already exists with that username or email"
      msg.setAttribute('style', 'color:red');
    }
    
}

const login = async(event) => {
  let msg = document.querySelector('.announcementTxt')
  event.preventDefault();
  const account = {userName,password}
  const data = {
    userName: account.userName.value,
    password: account.password.value
  }
try{
  const response = await axios.post(`http://localhost:3000/login`, data)
  console.log(response)
  if(response.data === 'OK')
    {
      setUser(data.userName)
      console.log('user set')
      navigate("/homepage")
    }
}
catch(error)
{
  msg.innerHTML = "Username or password is incorrect!"
  msg.setAttribute('style', 'color:red');
}
 
}

const getPosts = async(event) => {
  const response = await axios.get('http://localhost:3000/homepage')
  console.log(response.data.posts)
  setPosts(response.data.posts)
}

// const createPost = async(event) => {
//   let msg = document.querySelector('.announcementTxt')
//   let t = document.querySelector('#title')
//   let b = document.querySelector('#body')
//   event.preventDefault();
//   const post = {title,body};
//   const data = {
//     userName: user,
//     title: post.title.value,
//     body: post.body.value,
//     likes: 0
//   };

//   const response = await axios.post(`http://localhost:3000/homepage`, data);
//   console.log(response);
//   if(response.data === "OK")
//     {
//       msg.innerHTML = "Post Created!"
//       msg.setAttribute('style', 'color:green');
//       b.value = ''
//       t.value = ''
//     }
//   else{
//     msg.innerHTML = "Something Went Wrong!"
//     msg.setAttribute('style', 'color:red');
//   }

//   getPosts();
// };

const editBio = async(event) => {
  event.preventDefault()
  const bio = document.querySelector('.bioTextArea').value
  console.log(bio)
  const data = {
    userName: user,
    email: userData.email,
    password: userData.password,
    posts: userData.posts,
    bio: bio
  }
  const response = await axios.put(`http://localhost:3000/profile/${user}`, data)
  getInfo()
}


const getInfo = async() => {
  try{
    const response = await axios.get(`http://localhost:3000/profile/${user}`);
    console.log(response.data)
    setUserData(response.data.user)
  } catch(error)
  {
    console.log(error)
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
          <Route path='/homepage' element={<Mainpage user = {user} getPosts={getPosts} posts = {posts}/>}/>
          <Route path='/profile/:user' element={<Profile user = {user} getInfo = {getInfo} userData = {userData} editBio = {editBio}/>}/>
        </Routes>
      </div>
    </>
  )
}
 
  return user ? signedIn(): notSignedIn()

}

export default App