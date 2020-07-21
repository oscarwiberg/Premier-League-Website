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
      <img className="headerLogo" src="/utils/headerPL.png" alt="HeaderLogo" />
      {menu}
    </div>
  );
};

export default Header;
