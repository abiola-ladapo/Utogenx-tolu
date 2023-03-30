import React from 'react'
import'./Services.css';
import pic1 from '../../images/Group (2).png';
import pic4 from '../../images/genomics.png';
import pic5 from '../../images/Group.svg';

const Services = () => {
  return (
    <div className="services-main px-10">
       <div className="services-container font-montserrat leading-10">
      {/* A section of services provided */}
      <div className="services-main md:flex items-center justify-between md:space-x-24 md:space-y-52">
      <div className="service1-content md:w-1/2">
     <div className="services-img">
      <img src={pic1} alt="" />
     </div>
     <div className="services-text">
      <h1 className='text-4xl mb-3 font-semibold text-[#15AAFF]'>Cancer Screening</h1>
      <p className='font-normal'>Utogenx will provide you with the right information,recommend the appropriate
       screening and testing that you need and connect you with local healthcare providers to make sure you get the care you need.</p>
     </div>
     </div>



     <div className="service1-content md:w-1/2">
     <div className="services-img">
      <img src={pic4} alt="" />
     </div>
     <div className="services-text">
      <h1 className='text-4xl mb-3 font-semibold text-[#15AAFF] '>Genetic Counselling and <br />
       DoctorConsultation</h1>
      <p className='font-normal'>Schedule counseling sessions with licensed
       practitioners via video, audio or text chat. Get the
        information you need and a local counselor,  if necessary.
      </p>
     </div>
     </div>
      </div>



      {/* Another section of services provided */}

      <div className="service-main md:flex items-center justify-between md:space-x-24 md:space-y-40">
    <div className="service1-content md:w-1/2">
     <div className="services-img ">
      <img src={pic5} alt="" />
     </div>
     <div className="services-text">
      <h1 className='text-4xl mb-3 font-semibold text-[#15AAFF]'>Personalized Health Testing</h1>
      <p className='font-normal '>We will help you access tests and scans from certified doctors and pharmacists
      </p>
     </div>
     </div>


     <div className="service1-content md:w-1/2">
     <div className="services-img">
      <img src={pic4} alt="" />
     </div>
     <div className="services-text">
      <h1 className='text-4xl mb-3 font-semibold text-[#15AAFF]'>Genomics Health Education</h1>
      <p className='font-normal '>Your entire gene makeup can be examined using genomic testing to determine your lifetime risk of developing cancer.
        Crazy, right? You get to learn more from our experts.
      </p>
     </div>
     </div>
    </div>
    </div>


    </div>


  )
}

export default Services