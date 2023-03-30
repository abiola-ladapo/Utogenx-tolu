import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css';
import ellipse from '../../images/Ellipse 6.png';


const Home = () => {

  const[timer,setTimer] = useState();
  useEffect(()=>{
    setInterval(() => {
      const date = new Date()
      setTimer(date.toLocaleTimeString());
    }, 1000);
  })


  return (
    <div className=' home-container px-10 pb-14 '>
     <Navbar/>
     <div className="home-content md:flex items-center justify-between leading-10 ">
     <div className="home-left md:w-1/2">
     <h1 className='text-4xl mb-3 font-semibold font-montserrat text-[#15AAFF]'>{timer}</h1>
     <h1 className='text-4xl mb-3 font-semibold font-montserrat underline decoration-[#15AAFF]'>Round-the-clock mobile <br />Experience</h1>
     <p className='font-medium font-montserrat'>We're your go-to destination for top-notch medical care while <br /> helping you maintain routine health monitoring</p>
     <button class="rounded-lg font-montserrat home-btn px-8 mt-3 text-white">Sign up</button>

     </div>
     <div className="home-right items-center justify-center md:w-1/2">
     <img  src={ellipse} alt="ellipse" />

     </div>

     </div>



    </div>
  )
}

export default Home