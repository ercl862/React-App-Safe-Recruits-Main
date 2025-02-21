import { useContext } from "react";
import { MobileNavContext } from "../../Context/MobileNavContext/MobileNavContext";
import { NavLink } from "react-router-dom";
import "./mobilenav.css";

const MobileNav = () => {
  const { setShowMoblieNav } = useContext(MobileNavContext);

  const handleCloseMobileNav=()=>{
    setShowMoblieNav(false)
  }
  return (
    <div className="mobile-nav-menu">
      <div className="cross-icon-container">
        <div className="cross-icon" onClick={handleCloseMobileNav}>&#10799;</div>
      </div>
      <div>
        <NavLink
          className="link-wrap-div"
          to="/"
          onClick={handleCloseMobileNav}
          
        >
          Home
        </NavLink>
        <NavLink
          className="link-wrap-div"
          to="/about"
          onClick={handleCloseMobileNav}
        >
          About
        </NavLink>
        <NavLink
          className="link-wrap-div"
          to="/employers"
          onClick={handleCloseMobileNav}
        >
          Employers
        </NavLink>
        <NavLink
          className="link-wrap-div"
          to="/job-seekers"
          onClick={handleCloseMobileNav}
        >
          Job Seekers
        </NavLink>
        <NavLink
          className="link-wrap-div"
          to="/test"
          onClick={handleCloseMobileNav}
        >
          Book a Test
        </NavLink>
        <NavLink
          className="link-wrap-div"
          to="/plans-pricing"
          onClick={handleCloseMobileNav}
        >
          Plans & Pricing
        </NavLink>
      </div>
    </div>
  );
};
export default MobileNav;
