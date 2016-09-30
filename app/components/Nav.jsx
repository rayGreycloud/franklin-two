import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = () => {

  return (
    <div className="navbar">
      <div className="nav__top-bar" id="responsive-menu">
        <div className="top-bar-left">
          <ul className="nav__menu">
            <li className="nav__menu-text">
              <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>rayGREYCLOUD</IndexLink>
            </li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <ul className="nav__menu">
            <li className="nav__menu-text">
              <Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>ABOUT</Link>
            </li>
            <li className="nav__menu-text">
              <Link to='/projects' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>PROJECTS</Link>
            </li>
            <li className="nav__menu-text">
              <Link to='/contact' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
