import React from 'react'
import ellipse1 from '../../images/Ellipse 5.png';
import ellipse2 from '../../images/Ellipse 7.png';
const Service1 = () => {
  return (
   <div className="service1-container px-10 pb-14 font-montserrat">
       <div className="home-content md:flex items-center justify-between leading-10 my-5 ">
     <div className="home-left md:w-1/2">
     <h1 className='text-4xl mb-3 font-semibold text-[#15AAFF]'>Health services madepocket-minded.</h1>
     <p className='font-normal'>With affordable plans, you can get access to quality healthcare services via our company,
      and easily renew them, or upgrade your plan.</p>
     <button class="rounded-lg ... home-btn px-8 mt-3 text-white">Sign in to subscribe</button>

     </div>
     <div className="home-right md:shrink-0 mt-5 md:w-1/2">
     <img src={ellipse1} alt="ellipse" />

     </div>

     </div>


     <div className="home-content md:flex items-center justify-between leading-10 my-5">
     <div className="home-right md:shrink-0 mb-5 md:w-1/2">
     <img src={ellipse2} alt="ellipse" />
     </div>

     <div className="home-left md:w-1/2">
     <h1 className='text-4xl mb-3 font-semibold text-[#15AAFF]'>We prioritize your comfort and data security</h1>
     <p className='font-normal'>We've designed our website to be user-friendly and easy to use, and your trust is important to us. We strive to be transparent in our data collection and use practices, and we welcome any questions you may have
      about your privacy and security while using our website.</p>
     {/* <button class="rounded-lg ... home-btn px-8 mt-3 text-white">Sign up</button> */}

     </div>


     </div>
   </div>
  )
}

export default Service1