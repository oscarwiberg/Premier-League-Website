import React from 'react';
import './Menu.css';

const Menu = (props) => {
  return (
    <div className="menu">
      <button className="closeBtn">X</button>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Teams</a>
        </li>
        <li>
          <a href="#">Top scorers</a>
        </li>
        <li>
          <a href="#">Games</a>
        </li>
        <li>
          <a href="#">Forum</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
