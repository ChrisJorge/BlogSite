import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import Post from '../components/Post'
function Profile({user, getInfo, userData, editBio }) {
  console.log(user)
  const [visible, setVisible] = useState(false)
 

  const modifyVisible = () => {
    setVisible(!visible)
  }

  const change = () => {
    if(userData)
      {
    let bio = document.querySelector('.bioTxt')
    let container = document.querySelector('.bioForm')
    let txtArea = document.querySelector('.bioTextArea');
     
      if(visible)
      {
      bio.setAttribute('style', 'display: none')
      container.setAttribute('style', 'display:block')
      if(bio.innerHTML === 'No bio found, please enter a bio!')
        {
        txtArea.placeholder = "Enter a bio!"
        }
        else{
          txtArea.value = bio.innerHTML
        }
      }
      else{
        bio.setAttribute('style', 'display: block')
        container.setAttribute('style', 'display:none')
      }
    }
  }

useEffect(() => {
  getInfo();
},[]);

useEffect(() => {
  change()
},[visible])

// const edit = () => {
//   let textval = document.querySelector('.bioTxt').innerHTML
//   let txt = document.querySelector('.bioTxt')
// }

const loaded = () => {
  return (
    <>
      <Navbar user = {user}/>
      <div className="profileContainer">
        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="currentColor" className="profileSVG" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>
        <p className='bioUser'>{user}</p>
      </div>
      <div className="bioContainer">
        <div className="bioTitle">
          <p className="bioTitleText">Bio</p>
          <button className='editBioBTN' onClick={modifyVisible}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"  className="EditBIOSVG" viewBox="0 0 19 19">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
            </svg>
          </button>
        </div>
          <div className="bioContent">
            {userData.bio !== "" ? <p className='bioTxt'>{userData.bio}</p> : <p className='bioTxt'>No bio found, please enter a bio!</p>}
            <div className="bioForm">
              <form onClick={editBio}>
                <textarea className='bioTextArea' id='bioBody' name='bioBody'></textarea>
                <div className="btnContainer">
                  <button type='reset' className='bioBTN'>Clear</button>
                  <button type='submit' className='bioBTN'>Submit</button>
                </div>
              </form>
            </div>
            <div className="postProfileContainer">
              <div className="postTitle">
                <p className="postTitleText">Posts</p>
              </div>
              <div className="postsContent">
                {userData.posts.length > 0 ? <div> {userData.posts.map((post, i) => { return(<div className = "bioPostContainer" key={i}><Post title = {post.title} body = {post.body}/></div>) })} </div> : <p>You dont have any posts, make one now!</p>}
              </div>
            </div>
            
          </div>
      </div>
    </>
  )
}

const loading = () => {
  return(
    <>
      <p>Loading</p>
    </>
  ) 
}
  return userData ? loaded() : loading();
}

export default Profile