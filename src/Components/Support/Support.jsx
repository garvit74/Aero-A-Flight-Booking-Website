import React from 'react'
import image from '../../assets/window.jpg'


const Support = () => {
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
            <div className='singleInfo'>
              <span className='number colorOne'>01</span>
              <h4>Travel Requirements for Dubai</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey!</p>
            </div>
            <div className='singleInfo'>
              <span className='number colorTwo'>02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey!</p>
            </div>
            <div className='singleInfo'>
              <span className='number'>03</span>
              <h4>Multi risk Travel Insurance</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey!</p>
            </div>

          </div>

          <div className="imgDiv">
            <img src={image}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Support