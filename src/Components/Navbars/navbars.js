import React, { useEffect, useState } from "react";
import { AiFillHome, AiFillInfoCircle, AiOutlineMessage, AiOutlineSearch, AiOutlineUser , AiOutlineCustomerService } from "react-icons/ai";
import anime from 'animejs/lib/anime.es.js';
import { Link , useLocation} from "react-router-dom";
import PropTypes from 'prop-types';

const Navbar = (props) => {
  
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 750);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      anime({
        targets: ".Navbar",
        bottom: ["-100px", "2vh"],
        opacity: [0, 1],
        duration: 2000,
        loop: false
      });
    } else {
      anime({
        targets: ".Navbar",
        right: ["-100px", "2vh"],
        opacity: [0, 1],
        duration: 2000,
        loop: false
      });
    }

  }, [isMobile]);

  const navLinks = [
    { path: "/", icon: <AiFillHome className="icon"/>, label: "Home" },
    { path: "/info", icon: <AiFillInfoCircle className="icon"/>, label: "Info" },
    { path: "/service", icon: <AiOutlineCustomerService className="icon"/>, label: "Service" },
    { path: "/search", icon: <AiOutlineSearch className="icon"/>, label: "Search" },
    { path: "/messages", icon: <AiOutlineMessage className="icon"/>, label: "Messages" },
  ];

  return (
    <div className={`Navbar ${isMobile ? 'row' : 'col'}`}>

       {navLinks.map((item, index) => (
        <div className={`navicon ${location.pathname === item.path ? "active" : ""}`}>
        <Link to={item.path} key={index} >
          <div className="text-light pb-2">{item.icon}</div>
          <span className="label">{item.label}</span>
        </Link>
        </div>
      ))}

  </div>
  );
}

Navbar.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default Navbar;
