import React from 'react';
import './Home.css';
import LeagueTable from './LeagueTable';
import News from './News';

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <div className="homeContainer">
        <LeagueTable />
        <News />
      </div>
    </div>
  );
};

export default Home;
