import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav className="navbar">
      <a href="/Users/Public">Welcome</a>
    </nav>
  );
}

export default Navbar;
