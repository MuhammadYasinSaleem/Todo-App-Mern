import React, { useState } from "react";
import logo from "../assets/gtodo-todo-list-icon.png";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setshow] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="todo" style={{ height: "100px" }} />
      </div>
      <div className={show ? "showmenu" : "navlinks"}>
        <Link to="herosection" className="link" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="About Us" className="link" smooth={true} duration={500}>
          About Us
        </Link>
        <Link to="Task-Manager" className="link" smooth={true} duration={500}>
          Task Manager
        </Link>
      </div>
      <div className="Menu">
        <GiHamburgerMenu
          className="hamburger"
          onClick={() => setshow(!show)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
