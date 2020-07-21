import React from 'react';
import './ToggleBtn.css';

const ToggleBtn = ({ click }) => {
  // return menuOpen ? <div className="bar1"></div> <div className="toggleBtn" onClick={click}>
  //   <div className="bar2"></div>
  //   <div className="bar3"></div>
  // </div> :
  return (
    <div className="toggleBtn" onClick={click}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default ToggleBtn;
