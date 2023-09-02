import React from 'react'
import '../App.css';
import Logo from '../Components/images/logo.png';
import { Icon } from '@iconify/react';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-md ">
    <img src={Logo} alt="logo symbol" />
    <div className=" navbar-collapse">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link" to="/" style={{color:"rgb(75, 40, 110)"}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" color='rgb(127, 127, 127)'>Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"rgb(127, 127, 127)"}}>About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"rgb(127, 127, 127)"}}>Blogs</a>
        </li>
      </ul>
    </div>
    <div style={{ margin: "50px" }}>
      <button className='log-btn'> Login </button>
      <Icon icon="bi:dot" color="#5350b7" width="50" height="50" />
      <button className='sign-btn' style={{marginLeft:"2px"}}> Sign up  </button>
    </div>
  </nav>

    </>
  )
}

export default Navbar
