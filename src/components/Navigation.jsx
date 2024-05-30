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
            <NavLink to={window.innerWidth >= 600?`/${menu.toLowerCase()}`:'#'} className="link work-dropdown"
            >
              {menu}
            {menu === activeMenu && data[menu].length > 0 && (
              <ul className="sub-menu-list">
                  {data[menu].map((submenu) => (
                    <Link key={submenu} className='link' onClick={() => handleSubMenuClick(submenu)}>
                        <Link className='submenu-item link' to={`/projects/${submenu}`}>
                        {submenu}
                        </Link>
                    </Link>
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
  </>
  );
};

export default Navigation;


// import React, { useState, useEffect } from 'react';
// import { NavLink } from "react-router-dom";

// const data = {
//   projects: ['frontend-news-app', 'backend-news-app', 'portfolio']
// };

// const Navigation = () => {
//   const [activeMenu, setActiveMenu] = useState('');
//   const [activeSubMenu, setActiveSubMenu] = useState('');
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth < 600);

//   const handleMenuClick = (menu) => {
//     if (!isMobileView) {
//       setActiveMenu(menu === activeMenu ? '' : menu);
//       setActiveSubMenu('');
//     }
//   };

//   const handleSubMenuClick = (submenu) => {
//     setActiveSubMenu(submenu);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth < 600);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink className='link' to='/'>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink className='link' to='/about'>
//             About
//           </NavLink>
//         </li>
//         {Object.keys(data).map((menu) => (
//           <li key={menu} onClick={() => handleMenuClick(menu)}>
//             <NavLink
//               to={isMobileView ? '#' : `/${menu.toLowerCase()}`}
//               className={`link work-dropdown ${isMobileView ? 'disabled-link' : ''}`}
//             >
//               {menu}
//             </NavLink>
//             {menu === activeMenu && data[menu].length > 0 && (
//               <ul className="sub-menu-list">
//                 {data[menu].map((submenu) => (
//                   <li key={submenu} className='link' onClick={() => handleSubMenuClick(submenu)}>
//                     <NavLink className='submenu-item link' to={`/projects/${submenu}`}>
//                       {submenu}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//         <li>
//           <NavLink className='link' to='/contact'>
//             Contact
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;
