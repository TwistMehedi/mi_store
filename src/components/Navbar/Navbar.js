import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <Link className="link" to="">
          Xiaomi Phones
        </Link>
        <Link className="link" to="">
          Redmi phones
        </Link>
        <Link className="link" to="">
          POCO
        </Link>
        <Link className="link" to="">
          Laptops
        </Link>
        <Link className="link" to="">
          Smart Devices
        </Link>
        <Link className="link" to="">
          Where to buy
        </Link>
        <Link className="link" to="">
          Service Centers
        </Link>
      </div>

      <div className="search">
        <input type="text" placeholder="search here" />
        <input className="button" type="submit" value="Submit" />
      </div>
    </div>
  );
};

export default Navbar;
