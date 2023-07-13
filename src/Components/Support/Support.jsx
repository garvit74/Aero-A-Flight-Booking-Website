import React,{useEffect} from 'react'


import image from '../../assets/window.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Support = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])  
  
  return (
    <div className='support container section'>
      <div className='sectioncontainer'>
        <div className="titlesDiv">
          <small>Travel Support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans, see what to expect along the journey!</p>
        </div>
        <div className="infoDiv grid">

          <div className="textDiv grid">
            <div data-aos='fade-down' data-aos-duration='2500' className='singleInfo'>
              <span className='number colorOne'>01</span>
              <h4>Travel Requirements for Dubai</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey!</p>
            </div>
            <div data-aos='fade-down' data-aos-duration='3500' className='singleInfo'>
              <span className='number colorTwo'>02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey!</p>
            </div>
            <div data-aos='fade-down' data-aos-duration='4500' className='singleInfo'>
              <span className='number'>03</span>
              <h4>Multi risk Travel Insurance</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey!</p>
            </div>

          </div>

          <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
            <img src={image}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Support