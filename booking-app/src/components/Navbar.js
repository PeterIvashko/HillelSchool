import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Booking</div>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
