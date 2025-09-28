import { useState, useEffect } from "react";
import mobilePhoneLogo from "../images/mobile-logo.png";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
export default function Header({bg}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <header className={isOpen ? "headerOpen" : "headerClose"} style={{backgroundColor:bg}}>
      <Link to="/">
        <img src={mobilePhoneLogo} alt="Home logo" />
      </Link>

      <nav>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <Navigation setIsOpen={setIsOpen}/>
        </ul>
      </nav>

      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? "CLOSE" : "MENU"}
      </button>

      <button
  className="hire-me"
  onClick={() => {
    const subject = encodeURIComponent("Hi Phil");
    const body = encodeURIComponent("Hi Phil");
    window.location.href = `mailto:phillipbarlow10@gmail.com?subject=${subject}&body=${body}`;
  }}
  aria-label="Email Phil"
>
  HIRE ME
</button>
    </header>
  );
}
Header.propTypes={bg:propTypes.string}