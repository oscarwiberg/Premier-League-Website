import React from 'react';
import './ToggleBtn.css';
import MenuIcon from '../utils/menuicon.png';

const ToggleBtn = () => {
  return (
    <div className="toggleBtn">
      <img className="menuIcon" src={MenuIcon} alt="Meny"></img>
    </div>
  );
};

export default ToggleBtn;
