import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {

  return (
    <header className="site-header">
      <div className="wrapper">

        <div className="site-header__brand">
          <div className="primary-nav">
            <ul>
              <li>
                <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>rayGREYCLOUD</IndexLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-header__menu-icon">
          <div className="site-header__menu-icon__middle"></div>
        </div>

        <div className="site-header__menu-content">
          <nav className="primary-nav primary-nav--pull-right">
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
          </nav>
        </div>
        
      </div>
    </header>
  );
}

export default Header;
