import React from 'react'

const Subscribers = () => {
  return (
    <div className='subscriber section'>
      <div className="sectionContainer container">
        <h2>Subscribe to our Newsletter to get Latest News</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder='Enter your E-mail' />
          <button className='btn'>Subscibe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribers