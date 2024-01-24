import React, { useState } from 'react'

const Nav = () => {
    const[menuOpen,setMenuOpen]=useState(false);
    const toggleMenu=()=>{
        setMenuOpen(!menuOpen);
    }
  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href='/'  className='logo'>
            <img src="/assets/Images\logo.jpg" alt='logo'/>
        </a>

        <div className='menu-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>

        <ul className={`nav-links ${menuOpen ? "visible" :""}`}>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>About</a>
            </li>
            <li>
                <a href='/'>Services</a>
            </li>
            <li>
                <a href='/'>Reservation</a>
            </li>
            <li>
                <a href='/'>Order online</a>
            </li>
            <li>
                <a href='/'>Login</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav