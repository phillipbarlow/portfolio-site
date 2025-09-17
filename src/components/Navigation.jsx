import React, { useState } from 'react';
import {NavLink,Link} from "react-router-dom";


const Navigation = ({setIsOpen}) => {

  return (
    <>
        <li>
            <NavLink to={'/'} onClick={()=>setIsOpen(false)}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to={'/about'}>
                About
            </NavLink>
        </li>
        <li>
          <NavLink to={'/projects'}>
            Projects
          </NavLink>
        </li>
  </>
  );
};

export default Navigation;

