import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
function Navbar() {
  
  return (
    <>
    <div className="navBarContainer">
            <div className="navBarOptionContainer">
                <Link to={'/homepage'} className='navBarOption'>
                    <p className="navBarText">Feed</p>
                </Link>
            </div>
            <div className="navBarOptionContainer">
                <Link to={'/profile'} className='navBarOption'>
                    <p className="navBarText">Profile</p>
                </Link>
            </div>
            <div className="createPostContainer">
             
            
            </div>
            <div className="navBarProfileContainer">
            
            </div>
        
    </div>
    <div className="mainFeed">

    </div>
    </>
  )
}

export default Navbar