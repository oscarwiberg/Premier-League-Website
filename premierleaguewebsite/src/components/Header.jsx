import React from 'react';
import './Header.css';
import ToggleBtn from './ToggleBtn';

const Header = ({ toggleMenuHandler, menuOpen }) => {
  return (
    <div className="header">
      <h1 className="title">Header component</h1>
      <ToggleBtn click={toggleMenuHandler} menuOpen={menuOpen} />
    </div>
  );
};

export default Header;
