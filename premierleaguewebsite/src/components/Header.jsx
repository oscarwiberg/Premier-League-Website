import React from 'react';
import './Header.css';
import ToggleBtn from './ToggleBtn';

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">Header component</h1>
      <ToggleBtn />
    </div>
  );
};

export default Header;
