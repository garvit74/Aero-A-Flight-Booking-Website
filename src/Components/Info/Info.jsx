import React from 'react'
import { BsBookmarkCheck, BsShieldCheck, BsCalendar3 } from 'react-icons/bs'

const Info = () => {
  return (
    <div className='info section'>
      <div className="infoContainer container">
        <div className="titlediv flex">
          <h2>Travel to make memories all around the world</h2>
          <button className='btn'>
            View All
          </button>
        </div>
          <div className="cardsDiv grid">
            <div className="singleCard grid">
              <div className="iconDiv flex">
                <BsCalendar3 style={{fill:"white"}} className='icon'/>
              </div>
              <span className="cardTitle">
                Book & Relax
              </span>
              <p>You can also call airlines from your phone and book a flight ticket. You can also call airlines from your phone and book a flight ticket. You can also call airlines from your phone and book a flight ticket</p>
            </div>
            <div className="singleCard grid">
              <div className="iconDiv flex">
                <BsShieldCheck className='icon'/>
              </div>
              <span className="cardTitle">
                Smart Checklist
              </span>
              <p>You can also call airlines from your phone and book a flight ticket</p>
            </div>
            <div className="singleCard grid">
              <div className="iconDiv flex">
                <BsBookmarkCheck className='icon'/>
              </div>
              <span className="cardTitle">
                Save More
              </span>
              <p>You can also call airlines from your phone and book a flight ticket</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Info