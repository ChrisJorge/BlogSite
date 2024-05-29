import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
function Post({title, body, id,num, user, getInfo}) {
  const [visible, setVisible] = useState(false)
  const modifyVisible = () => {
    setVisible(!visible)
  }
  const change = (num) => {
    let postContainer = document.querySelectorAll('.postSecondaryContainer')[num];
    let postTitle = document.querySelectorAll('.postTitle')[num + 1]
    let postBody = document.querySelectorAll('.postBody')[num]
    let tinput = document.querySelectorAll('.titleInput')[num]
    let txtArea = document.querySelectorAll('#body')[num]
    let editContainer = document.querySelectorAll('.editPostContainer')[num];
    if(visible)
      {
        editContainer.setAttribute('style', 'display: block')
        tinput.value = postTitle.innerHTML;
        txtArea.value = postBody.innerHTML
        postContainer.setAttribute('style', 'display:none')
      }
      else{
        postContainer.setAttribute('style', 'display:block')
        editContainer.setAttribute('style', 'display: none')
      }
  }

  const editPost = async (event) => {
    event.preventDefault();
    event.stopPropagation()
    const data = {
     title: event.target[0].value,
     body: event.target[1].value
    }
    console.log(data)
    const response = await axios.put(`http://localhost:3000/profile/${user}/${id}/${num}`, data)
    console.log(response)
    if(response)
      {
        setVisible(!visible)
        getInfo()
      }
   }

   const deletePost = async(event) => {
    event.preventDefault();
    event.stopPropagation()
    const response = await axios.delete(`http://localhost:3000/profile/${user}/${id}/${num}`)
    console.log(response)
    if(response)
      {
        // setVisible(!visible)
        getInfo()
      }
   }


  useEffect(() => {
    change(num)
  },[visible])
  return (
    <>
    <div className="postContainer">
      <div className="postSecondaryContainer">
      <div className="postTitle">
            {title}
        </div>
        <div className="postBody">
            {body}
        </div>
      </div>
      <div className="btnContainer">
      <button onClick={modifyVisible} >Edit</button>
      <button onClick={deletePost}>Delete</button>
      </div>
     
    </div>
    <div className='editPostContainer'>
        <form className='temp' onSubmit={editPost} action= {`http://localhost:3000/profile/${user}/${id}`} >
            <div className="announcement">
              <p className='announcementTxt'></p>
            </div>
            <label className='createLabel'>Title</label>
            <input type='text' name='title' id='title' className='titleInput' placeholder='Enter Post Title'/>
            <label className='createLabel'>Body</label>
            <textarea id='body' name='body' placeholder='Enter post body'></textarea>
            <div className="btnContainer">
              <button type='reset'>Clear</button>
              <button type='submit'>Submit</button>
            </div>
            
          </form>
        </div>
    </>
  )
}

export default Post