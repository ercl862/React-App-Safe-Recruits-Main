import React from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <div className="wraper">
        <NavLink className="cross-button" to="/">
          &#10005;
        </NavLink>

        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Password" type="password" />
        <div className="btn-sbmt">Sign up</div>
      </div>
    </div>
  );
};

export default Signup;
