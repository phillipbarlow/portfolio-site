import mobileLogo from '../images/mobile-logo.png';
import {Link} from "react-router-dom"
export default function Footer({bg}) {
  return (
    <div>
      <footer style={{backgroundColor:bg}}>
        <Link to='/'>
        <img className="footerImg" src={mobileLogo} alt="logo"/>
        </Link>
        <p className="footer-message">Thanks for scrolling!</p>
        <p className="trademark">2024 &copy;Phillip Barlow, All rights reserved </p>
      </footer>
    </div>
  )
}
