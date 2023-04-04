import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='p-4 pb-4 bg-dark d-flex justify-content-around footer'>
      <div className="d-flex flex-column p-3">
        <Link to="#" style={{textDecoration:"none",color:"grey"}}>About us</Link>
        <Link to="#" style={{textDecoration:"none",color:"grey"}}>Careers</Link>
        <Link to="#" style={{textDecoration:"none",color:"grey"}}>Feedback</Link>
        <Link to="#" style={{textDecoration:"none",color:"grey"}}>Contact Us</Link>
      </div>
      <div className="d-flex flex-column p-3">
        <Link to="/login" style={{textDecoration:"none",color:"grey"}}>Privacy Policy</Link>
        <Link to="#" style={{textDecoration:"none",color:"grey"}}>Terms and Conditions</Link>
        <Link to="#" style={{textDecoration:"none",color:"grey"}}>Copyright Policy</Link>
       
      </div>
    </div>
  )
}

export default Footer