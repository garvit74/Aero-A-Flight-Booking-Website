import React from 'react'
import video from '../../assets/video.mp4';
import plane from '../../assets/Ving.png';



const Home = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1>Create Ever-lasting memories with us</h1>
      </div>
      <div className="flex homeImages">
        <div className='videoDiv'>
          <video src={video} autoPlay muted loop className="video"></video>
        </div>
        <img src={plane} className="plane"/>
      </div>
    </div>
  )
}

export default Home