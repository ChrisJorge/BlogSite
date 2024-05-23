import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import Form from '../components/Form'
function Mainpage({func}) {
  const [visible, setVisible] = useState(false)
  const data = [{
    labeltype: 'text',
    name: 'title',
    labeltxt: 'title',
    placeholdertxt: 'Enter Post Title'
  },
  {
    labeltype: 'text',
    name: 'body',
    labeltxt: 'body',
    placeholdertxt: 'Enter Post Body'
  },
]

  const modifyVisible = () => {
    setVisible(!visible)
  }

  const change = () => {
    let container = document.querySelector('.createPost')
    if(visible)
    {
     container.setAttribute('style', 'display:block')
    }
    else{
      container.setAttribute('style', 'display:none')
    }

  }

  useEffect(() => 
    {
      change()
    },[visible])

  return (
    <>
        <Navbar />
        <div className="createPost">
          <Form data={data} func={func}/>
        </div>
        <div className="createPostIcon">
          <footer>
            <button className='createPostbtn' onClick={modifyVisible}>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
            </svg>
            </button>
          </footer>
        </div>
        
    </>
  )
}

export default Mainpage