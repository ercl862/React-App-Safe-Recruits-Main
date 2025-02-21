import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Router,NavLink} from "react-router-dom";
import { HidingHeader } from "hiding-header-react";
import { useContext } from "react";
import { MobileNavContext } from "../../../Context/MobileNavContext/MobileNavContext";

import "./header.css";

const Header = () => {
  const { setShowMoblieNav } = useContext(MobileNavContext);

  let activeLink={background:'#D7F7FC',color:'black'} 

  const handlePageNavigate=()=>{
    setShowMoblieNav(true)
  }


  return (
    <HidingHeader>
      <div className="header-top">
      <div className="mobile-nav-buttons-wraper" onClick={handlePageNavigate}>
          <div className="mobile-nav-button"></div>
          <div className="mobile-nav-button"></div>
          <div className="mobile-nav-button"></div>
        </div>
      </div>
    
      <div className="nav-background">
      <div className="nav-white">
      <Nav className="nav-bar">
        <NavLink className="link-wrap-div" to="/"  style={({ isActive }) =>
              isActive ? activeLink: null
            }>
          Home 
        </NavLink>
        <NavLink className="link-wrap-div" to="/about"  style={({ isActive }) =>
              isActive ? activeLink: null
            }>
          About
        </NavLink>
        <NavLink className="link-wrap-div" to="/employers"  style={({ isActive }) =>
              isActive ? activeLink: null
            }>
          Employers
        </NavLink>
        <NavLink className="link-wrap-div" to="/job-seekers"  style={({ isActive }) =>
              isActive ? activeLink: null
            }>
          Job Seekers
        </NavLink>
        <NavLink className="link-wrap-div" to="/test"  style={({ isActive }) =>
              isActive ? activeLink: null
            }>
          Book a Test
        </NavLink>
        <NavLink className="link-wrap-div" to="/plans-pricing"  style={({ isActive }) =>
              isActive ? activeLink: null
            }>
          Plans & Pricing
        </NavLink>
      </Nav>
      </div>
      </div>
    </HidingHeader>
  );
};

export default Header;
