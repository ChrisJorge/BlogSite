import React from 'react'

function Feedpost({title,body,user}) {
  return (
    <>
    <div className="postContainer">
      <div className="postTitle">
            <p>{title}</p>
        </div>
        <div className="postBody">
            {body}
        </div>
        <div className="postFooter">
            <p>By: {user}</p>
        </div>
      </div>
    </>
  )
}

export default Feedpost