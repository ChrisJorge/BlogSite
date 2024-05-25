import React from 'react'

function Post({title, body}) {
  return (
    <>
    <div className="postContainer">
        <div className="postTitle">
            {title}
        </div>
        <div className="postBody">
            {body}
        </div>
    </div>
    </>
  )
}

export default Post