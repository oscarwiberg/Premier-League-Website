import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = ({ toggleMenuHandler }) => {
  return (
    <div className="menu">
      <div className="closeBtn" onClick={toggleMenuHandler}>
        X
      </div>
      <img src="/utils/menuPL.png" alt="PLlogo"></img>
      <ul>
        <li>
          <Link to="/" onClick={toggleMenuHandler}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/teams" onClick={toggleMenuHandler}>
            Teams
          </Link>
        </li>
        <li>
          <Link to="/topscorers" onClick={toggleMenuHandler}>
            Top scorers
          </Link>
        </li>
        <li>
          <Link to="/games" onClick={toggleMenuHandler}>
            Games
          </Link>
        </li>
        <li>
          <Link to="/forum" onClick={toggleMenuHandler}>
            Forum
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
