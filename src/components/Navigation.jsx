// src/Navigation.js
import React, { useState } from 'react';
import {NavLink} from "react-router-dom"
const data = {
  Work: ['frontend-news-app','backend-news-app', 'portfolio']
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
    <div>
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
            <NavLink className='link' 
            to={`${ menu === 'Work'? '' : menu }`}
            >{menu}
            {menu === activeMenu && data[menu].length > 0 && (
                <ul className="sub-menu-list">
                    {data[menu].map((submenu) => (
                        <li key={submenu} className='link' onClick={() => handleSubMenuClick(submenu)}>
                            <NavLink className='submenu-item link' to={`/${submenu}`}>
                            {submenu}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
            </NavLink>
          </li>
        ))}
        <li>
            <NavLink className='link' to={'/contact'}>
                Contact
            </NavLink>
        </li>
    </div>
  );
};

export default Navigation;
