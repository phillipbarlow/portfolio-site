// src/Navigation.js
import React, { useState } from 'react';
import {NavLink,Link} from "react-router-dom";

const data = {
  projects: ['frontend-news-app','backend-news-app', 'portfolio']
};

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const [activeSubMenu, setActiveSubMenu] = useState('');
  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? '' : menu);
    setActiveSubMenu('');
  };
  const handleSubMenuClick = (submenu) => {
    setActiveSubMenu(submenu);
  };

  return (
    <>
        <li>
            <NavLink className='link' to={'/'}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink className='link' to={'/about'}>
                About
            </NavLink>
        </li>
        {Object.keys(data).map((menu) => (
            <li key={menu} onClick={() => handleMenuClick(menu)}>
            <NavLink to={window.innerWidth >= 600?`/${menu.toLowerCase()}`:'#'} className="link work-dropdown">
              {menu}
              </NavLink>
            {menu === activeMenu && data[menu].length > 0 && (
              // checks to see if the portfolio is link then use anchor tag instead
              <ul className="sub-menu-list">
                  {data[menu].map((submenu) => (
                      <li key={submenu} onClick={() => handleSubMenuClick(submenu)} >
                       { submenu === 'portfolio'?( 
                        <a className='link' href='https://github.com/phillipbarlow/portfolio-site' target='_blank' rel="noopener noreferrer">
                          {submenu}
                        </a>):(
                       <Link className='submenu-item link' to={ `/projects/${submenu}`}>
                        {submenu}
                        </Link>)}
                      </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
        <li>
            <NavLink className='link' to={'/contact'}>
                Contact
            </NavLink>
        </li>
  </>
  );
};

export default Navigation;

