import React from 'react';
import DarkMode from '../DarkMode/DarkMode';
import fire from '../../assets/fire.png';
import star from '../../assets/glowing-star.png';
import party from '../../assets/party-face.png';
import './navBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <h1>MovieManiac</h1>

      <div className='navbar_links'>
        <DarkMode />
        <NavLink to='/'>
          Popular <img src={fire} alt='fire emoji' className='navbar_emoji' />
        </NavLink>
        <NavLink to='/top-rated'>
          Top Rated <img src={star} alt='star emoji' className='navbar_emoji' />
        </NavLink>
        <NavLink to='/upcoming'>
          Upcoming
          <img src={party} alt='party emoji' className='navbar_emoji' />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
