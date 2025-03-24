import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/colored_logo.svg";
import Theme from "./Theme"; // Importing Theme.js

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header ">
      <div className="logo">
        <h1 className="logo-name">
          <img src={logo} alt="Logo" />Sans 
          <span>Chef</span>
        </h1>  
      </div>
      
      <div className="nav-items">
        <ul >
          <li> <Link to="/">Home</Link> </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="grocery">Grocery</Link></li>
          <li><Link to="/cart">🛒Cart</Link></li>

          <button
            className="login-btn"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>

          {/* Theme Switcher */}
          <Theme />
        </ul>
      </div>
    </div>
  );
};

export default Header;
