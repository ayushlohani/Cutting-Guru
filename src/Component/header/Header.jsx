import React from "react";
import "./style.scss";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu, GiBoomerangCross } from "react-icons/gi";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const [Show, setShow] = useState(false);
  const handleShow = (e) => {
    setShow(!Show);
  };
  const bgcolor = useRef();
  useEffect(() => {
    const e1 = bgcolor.current;
    gsap.fromTo(
      e1,
      { backgroundColor: "transparent" }, // Enclose the percentage value in quotes
      {
        backgroundColor: "#523d2b", // Enclose the percentage value in quotes
        duration: 1000,
        scrollTrigger: {
          trigger: e1,
          start: "top", // Adjust this as needed
          end: "700px", // Adjust this as needed
          scrub: true,
        },
      }
    );
  }, []);
  const handleSetActive = (to) => {};
  return (
    <header className="header" ref={bgcolor}>
      <div className="logo">
        <img src="logo.png" alt="Beardy" className="logo" />
      </div>
      <div className="ham" onClick={handleShow}>
        {!Show && <GiHamburgerMenu size={35} className="ham-burger" />}
        {Show && <RxCross2 size={35} className="Cross" />}
      </div>
      <nav className="nav-pc">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onSetActive={handleSetActive}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              onSetActive={handleSetActive}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              offset={60}
              duration={500}
              onSetActive={handleSetActive}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="services" // Change this to "services" for the Service section
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              onSetActive={handleSetActive}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="prices"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              onSetActive={handleSetActive}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={handleSetActive}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      {Show && (
        <nav className="nav-mob">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                onSetActive={handleSetActive}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                onSetActive={handleSetActive}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                onSetActive={handleSetActive}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="services" // Change this to "services" for the Service section
                spy={true}
                smooth={true}
                offset={150}
                duration={500}
                onSetActive={handleSetActive}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="prices"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                onSetActive={handleSetActive}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={handleSetActive}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
