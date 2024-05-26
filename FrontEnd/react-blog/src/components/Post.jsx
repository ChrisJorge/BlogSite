import React from 'react'
import { useEffect, useState } from 'react';
function Post({title, body, id, editPost,num}) {
  let count = 0
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
    console.log(visible)
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
      <button onClick={modifyVisible} >Edit</button>
    </div>
    <div className='editPostContainer'>
        <form className='temp' >
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