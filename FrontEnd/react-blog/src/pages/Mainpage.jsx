import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import Feedpost from '../components/Feedpost';
import axios from 'axios';
function Mainpage({ user, getPosts, posts}) {
  const [visible, setVisible] = useState(false)
  let count = 0;

  const createPost = async(event) => {
    let msg = document.querySelector('.announcementTxt')
    let t = document.querySelector('#title')
    let b = document.querySelector('#body')
    event.preventDefault();
    const post = {title,body};
    const data = {
      userName: user,
      title: post.title.value,
      body: post.body.value,
      likes: 0
    };
  
    const response = await axios.post(`http://localhost:3000/homepage`, data);
    console.log(response);
    if(response.data === "OK")
      {
        msg.innerHTML = "Post Created!"
        msg.setAttribute('style', 'color:green');
        b.value = ''
        t.value = ''
      }
    else{
      msg.innerHTML = "Something Went Wrong!"
      msg.setAttribute('style', 'color:red');
    }
    setVisible(!visible)
    getPosts();
  };
  const modifyVisible = () => {
    setVisible(!visible)
  }

  const change = () => {
    let container = document.querySelector('.createPost')
    let msg = document.querySelector('.announcementTxt')
    msg.innerHTML = " "
    if(visible)
    {
     container.setAttribute('style', 'display:flex')
    }
    else{
      container.setAttribute('style', 'display:none')
    }

  }

  const genText = async () => {
    console.log(count)
    if(count % 2 === 0)
      {
        try
        {
          const response = await fetch(`https://api.api-ninjas.com/v1/loremipsum?paragraphs=1`,
          {
            method: "get",
            headers: {
              "Content-Type": 'application/json',
              'X-Api-Key': `${import.meta.env.VITE_APIKEY}`
              
            }
          })
          const data = await response.json()
          console.log(data)
          let body = document.querySelector('#body')
          body.value = ""
          body.value = data.text
          count ++
        }
        catch(error)
        {
          console.log(error)
        }
      }
      else{
        count ++
      }
  }
  useEffect(() => 
    {
      change()
    },[visible])

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
        <Navbar user = {user}/>
        <div className="posts">
          { posts ? <div>{posts.slice(0).reverse().map((post,i) => { return(<div className='MainPagePostContainer' key={i}> <Feedpost title = {post.title} body = {post.body} user = {post.userName}/></div>)})}</div> : 
            <p>Posts Loading</p>}
        
        </div>
        <div className="createPost">
          <form className='temp' onSubmit={createPost}>
            <div className="announcement">
              <p className='announcementTxt'></p>
            </div>
            <label className='createLabel mainPage'>Title</label>
            <input type='text' name='title' id='title' className='titleInput' placeholder='Enter Post Title'/>
            <label className='createLabel mainPage'>Body</label>
            <textarea id='body' name='body' placeholder='Enter post body'></textarea>
            <label>Auto Generate Post</label>
            <input type='checkbox' value={1} onClick={genText}></input>
            <div className="btnContainer">
              <button type='reset'>Clear</button>
              <button type='submit'>Submit</button>
            </div>
            
          </form>

        </div>
        <div className="createPostIcon">
          <footer>
            <button className='createPostbtn' onClick={modifyVisible}>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" className="EditBTNSVG" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
            </svg>
            </button>
          </footer>
        </div>
        
    </>
  )
}

export default Mainpage