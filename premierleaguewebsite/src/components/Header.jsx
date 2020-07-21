import React from 'react';
import './Header.css';
import ToggleBtn from './ToggleBtn';

const Header = ({ toggleMenuHandler, menuOpen }) => {
  let menu;

  if (!menuOpen) {
    menu = <ToggleBtn click={toggleMenuHandler} menuOpen={menuOpen} />;
  }
  return (
    <div className="header">
      <h1 className="title">Header component</h1>
      {menu}
    </div>
  );
};

export default Header;
