import React from 'react'
import './Blog.css';
import blog1 from '../../images/Rectangle 73.png'
import blog2 from '../../images/Rectangle 74.png'
import blog3 from '../../images/Rectangle 75.png'

const Blog = () => {
  return (
   <div className="blog-main pb-10 font-montserrat leading-10 ">
    <h1 className='text-3xl text-center font-semibold text-[#15AAFF]'>Our Blog</h1>
    <div className="blog-detail ">
    <div className="blog-container py-14 px-10  grid md:grid-cols-3 md:space-x-4 ">

      {/* Section 1 blog content */}

     <div className="blog-content">
     <div className="blog-card">
     <img src={blog1} alt="blog pic" />
    </div>
    <div className="blog-text ">
     <h1 className='text-3xl mb-3 font-semibold text-[#15AAFF] '>New genes <br /> alert</h1>
     <p className=' font-normal'>Your entire gene makeup can be examined using genomic testing
     to determine your lifetime risk of... <a className='font-medium' href="#">Read more</a></p>
    </div>
     </div>

       {/* Section 2 blog content */}

     <div className="blog-content">
     <div className="blog-card">
     <img src={blog2} alt="blog pic" />
    </div>
    <div className="blog-text ">
     <h1 className='text-3xl mb-3 font-semibold text-[#15AAFF]  '>Introducing Utogenx first medical lab!t</h1>
     <p className='font-normal '>We are more than excited to bring to you the announcement of our
       first ever physical medical labora... <a className='font-medium' href="#">Read more</a></p>
    </div>
     </div>

       {/* Section 3 blog content */}

     <div className="blog-content">
     <div className="blog-card">
     <img src={blog3} alt="blog pic" />
    </div>
    <div className="blog-text">
     <h1 className='text-3xl mb-3 font-semibold text-[#15AAFF]'>Upgraded security walls</h1>
     <p className='font-normal'>Our developers have been actively working together to ensure that our user’s
       personal details are pro... <a  className='font-medium' href="#">Read more</a></p>
    </div>
     </div>
    </div>
    </div>

    {/* See More button */}

    <div className="blog-btn text-center">
    <button className='rounded-md drop-shadow-lg text-[#15AAFF] bg-white px-3 py-1'>See More</button>
    </div>
   </div>

  )
}

export default Blog