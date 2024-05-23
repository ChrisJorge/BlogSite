import React from 'react'
import { Link } from 'react-router-dom'
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
            <div className="placeholder">
            
            
            </div>
            <div className="navBarProfileContainer">
            
            </div>
        
    </div>
    
    </>
  )
}

export default Navbar