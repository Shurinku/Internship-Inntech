import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="navbar row">
      <h3>LOGO</h3>
      <GiHamburgerMenu className="hamburger" />
    </div>
  );
}
