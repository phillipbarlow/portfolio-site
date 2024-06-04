import { useState,useEffect } from 'react';
import desktopLogo from '../images/desktop-logo.png';
import mobilePhoneLogo from '../images/mobile-logo.png';
import Navigation from './Navigation';
import {Link} from "react-router-dom"
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
      <Link to='/'>
      <img src={imageSrc} alt="Home logo"/>
      </Link>
      <nav>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Navigation/>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu} dangerouslySetInnerHTML={{ __html: isOpen ?'&times;' :'&#9776;' }}>
    </button>
    </header>
    </>
  )
}
