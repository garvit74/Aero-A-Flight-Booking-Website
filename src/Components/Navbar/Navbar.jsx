import React,{useState} from 'react';
import {SiConsul} from 'react-icons/si';
import {CgMenuGridO} from 'react-icons/cg';
import {AiOutlineGlobal} from 'react-icons/ai';
import {BsPhoneVibrate} from 'react-icons/bs';
import logo from '../../assets/aeroplane.png';

const Navbar = () => {
  
  const [active, setActive] = useState('navBarMenu')
  const showNavBar = () =>{
    setActive('navBarMenu showNavBar')
  }
  const removeNavbar = () =>{
    setActive('navBarMenu')
  }

  const [nbg, setbg] = useState('navBarMenu')
  const addbg = () =>{
    if(window.scrollY >= 10){
      setbg('navBarTwo navbarbg')
    }else{
      addbg('navBarTwo')
    }
  }
  window.addEventListener('scroll', addbg)



  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div>
          <SiConsul className='icon'/> 
        </div>
        <div className="none flex">
          <li className='flex'><BsPhoneVibrate className='icon'/>Support</li>
          <li className='flex'><AiOutlineGlobal className='icon'/>Languages</li>
        </div>

        <div className='atb flex'>
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>

      </div>
      <div className={nbg}>
        <div className="logoDiv">
          <img src={logo} className='Logo'/>
        </div>
        <div className={active}>
          <ul className='menu flex'>
            <li onClick={removeNavbar} className='listItem'>Home</li>
            <li onClick={removeNavbar} className='listItem'>About</li>
            <li onClick={removeNavbar} className='listItem'>Offers</li>
            <li onClick={removeNavbar} className='listItem'>Seats</li>
            <li onClick={removeNavbar} className='listItem'>Destinations</li>
          </ul>
          <button className='btn flex btnOne'>
            Contact
          </button>
        </div>
        <button className='btn flex btnTwo'>
            Contact
          </button>
        <div onClick={showNavBar} className='toggleIcon'>
          <CgMenuGridO className='icon'/>
        </div>
      </div>

    </div>
  )
}

export default Navbar