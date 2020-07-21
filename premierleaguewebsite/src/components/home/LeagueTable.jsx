import React from 'react';
import './LeagueTable.css';

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => response.json())
  .then((json) => console.log(json));

const LeagueTable = () => {
  return (
    <div className="leagueTable">
      <img className="table" src="/utils/tablesmall.png" alt="Table" />
    </div>
  );
};

export default LeagueTable;
