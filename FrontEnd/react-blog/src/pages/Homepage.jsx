import React from 'react'
import { Link } from 'react-router-dom'
function Homepage() {
  return (
    <>
       <div className="homepageContainer">
        <h1>Welcome! Please log in or sign up.</h1>
            <div className="optionsContainer">
                <Link to={'/signup'} className='homepageOption'>
                <p className="homepageOptionText">Sign Up</p>
                </Link>
                <Link to={'/login'} className='homepageOption'>
                <p className="homepageOptionText">Log In</p>
                </Link>
            </div>
       </div>
    </>
  )
}

export default Homepage