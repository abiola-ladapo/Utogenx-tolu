import React from 'react'
import logo from '../../images/logo.png';
import twitter from '../../images/twitter.png';
import linkedin from '../../images/linkedin.png';
import insta from '../../images/insta.png';
import facebook from '../../images/facebook.png';

const Footer = () => {
  return (
    <div className="footer-container px-10 pb-10 ">
     <div className="footer-content flex items-center justify-between">
      <div className="footer-logo">
       <img src={logo} alt="utogenx logo" />
      </div>
      <div className="links-socials flex items-center justify-center space-x-20">

      <div className="footer-links pt-6">
      <h2 className='font-montserrat font-semibold text-xl mb-5'>Quick links </h2>
        <ul>
          <li className='mb-5'><a href="#">Home</a></li>
          <li className='mb-5'><a href="#">About Us</a></li>
          <li className='mb-5'><a href="#">Pricing</a></li>
          <li className='mb-5'><a href="#">Blog</a></li>
          <li className='mb-5'><a href="#">Terms & condition</a></li>
        </ul>
      </div>
      <div className="footer-socials">
        <h2 className='font-montserrat font-semibold text-xl mb-5'>Connect</h2>
        <ul>
          <li><a className='flex mb-5' href="#"><img src={twitter} alt="twitter" />Twitter</a></li>
          <li><a className='flex mb-5' href="#"><img src={linkedin} alt="twitter" />LinkedIn</a></li>
          <li><a className='flex mb-5' href="#"><img src={insta} alt="twitter" />Instagram</a></li>
          <li><a className='flex mb-5' href="#"><img src={facebook} alt="twitter" />Facebook</a></li>

        </ul>
      </div>

      </div>

     </div>
     <p className=' font-normal text-sm'> &copy;Utogenx 2023</p>

    </div>
  )
}

export default Footer