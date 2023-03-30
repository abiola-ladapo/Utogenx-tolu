import React from 'react'
import logo from '../../images/logo.png'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container flex items-center justify-between   py-8 font-montserrat">
     <div className="nav-logo">
      <img className='w-40' src={logo} alt="Utogenx Logo" />

     </div>
     <div className="nav-item items-center justify-between">
      <ul className='flex space-x-16 font-medium'>
       <li><a href="#">Home</a></li>
       <li><a href="#">About Us</a></li>
       <li><a href="#">Pricing</a></li>
       <li><a href="#">Contact Us</a></li>
       <li className='border-solid border-2 border-black rounded-md px-3 py-1'><a href="#">Login/Sign up</a></li>
      </ul>
     </div>
    </div>
  )
}

export default Navbar