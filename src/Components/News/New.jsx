import React from 'react'
import './New.css';
import arrow from '../../images/arrow.png';

const New = () => {
  return (
    <div className="news-container ">
     <div className="news-content bg-[#075C9B] rounded-lg text-white text-center py-10 leading-8">
      <h4 className=' font-montserrat font-semibold text-3xl'> Stay updated on our evolution. </h4>
      <p className=' font-montserrat font-normal'>We are interested in keeping you updated on our activities <br />
      here through our monthly newsletter. </p>
      <div className="news-details flex items-center justify-center mt-5 bg-white w-96 mx-auto  py-1 rounded-lg">
        <div className="news-input"><input className='px-4' type="email" placeholder='Enter your email address' /></div>
        <div className="new-content flex items-center justify-center rounded-lg bg-[#15AAFF] px-4">
        <div className="news-subscribe px-2"><a href="#">Subscribe</a></div>
        <img width={'15px'}src={arrow} alt="arrow" />
        </div>

      </div>
     </div>
    </div>
  )
}

export default New