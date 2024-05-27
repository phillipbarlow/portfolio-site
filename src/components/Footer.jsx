import mobileLogo from '../images/mobile-logo.png';
import {NavLink} from "react-router-dom"
export default function Footer() {
  return (
    <div>
      <footer>
        <img src={mobileLogo} alt="logo"/>
        <nav>
          <ul>
            <li><NavLink to="/about" className="footerLink">About</NavLink></li>
            <li><NavLink to="/contact" className="footerLink">Contact</NavLink></li>
            <li><NavLink to="/work" className="footerLink">Work</NavLink></li>
          </ul>
        </nav>
        <p className="footer-message">Thanks for scrolling!</p>
        <p className="trademark">2024&copy;Phillip Barlow, AlL rights reserved </p>
      </footer>
    </div>
  )
}
