import React from 'react';
import './Header.css';
import ToggleBtn from './ToggleBtn';

const Header = ({ toggleMenuHandler }) => {
  return (
    <div className="header">
      <h1 className="title">Header component</h1>
      <ToggleBtn click={toggleMenuHandler} />
    </div>
  );
};

export default Header;
