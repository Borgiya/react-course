import React from 'react'
import {Link} from 'react-router-dom'



const Header = () => {
  return (
    <header className='header'>
        <section>
           <div className='banner'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes serwed with a modern twist.</p>
           <Link to="/Booking"><button aria-label='onClick'>Reservation Table</button></Link>
           </div>

           <div className='banner-img'>
            <img src= "/assets/Images\banner.jpg" alt='Restuarant Food'/>
           </div>

        </section>
    </header>
  )
}

export default Header;