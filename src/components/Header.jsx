import { useState,useEffect } from 'react';
import desktopLogo from '../images/desktop-logo.png';
import mobilePhoneLogo from '../images/mobile-logo.png';
import {NavLink} from "react-router-dom"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const updateImageSrc = () => {
    if (window.innerWidth <= 600) {
      setImageSrc(mobilePhoneLogo);
    } else {
      setImageSrc(desktopLogo);
    }
  };
  useEffect(() => {
    updateImageSrc();
    window.addEventListener('resize', updateImageSrc);
    return () => {
      window.removeEventListener('resize', updateImageSrc);
    };
  }, []);
  return (
    <>
    <header>
      <NavLink to='/'>
      <img src={imageSrc} alt="Home logo"/>
      </NavLink>
      <nav>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><NavLink to="/" className="link">Home</NavLink></li>
          <li><NavLink to="/about" className="link">About</NavLink></li>
          <li><NavLink to="/work" className="link">Work</NavLink></li>
          <li><NavLink to="/Contact" className="link">Contact</NavLink></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
    </header>
    </>
  )
}
