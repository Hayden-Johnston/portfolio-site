// Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="button">
        <Link to="/">Home</Link>
        <Link to="../about">About</Link>
        <Link to="../portfolio">Portfolio</Link>
        <Link to="../contact">Contact</Link>
    </nav>
  );
}

export default Nav;
