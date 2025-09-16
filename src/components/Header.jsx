import { useState, useEffect } from "react";
import desktopLogo from "../images/desktop-logo.png";
import mobilePhoneLogo from "../images/mobile-logo.png";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const [imageSrc, setImageSrc] = useState("");
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
    <header className={isOpen ? "headerOpen" : "headerClose"}>
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

      <button className="hire-me">HIRE ME</button>
    </header>
  );
}
