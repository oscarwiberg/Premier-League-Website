import React from 'react';
import './Home.css';
import LeagueTable from './LeagueTable';
import News from './News';

const Home = () => {
  return (
    <div>
      <div className="subHeadingContainer">
        <h1>Welcome to this site!</h1>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          sodales lectus at eros vehicula blandit. Quisque in fermentum lorem.
          Morbi et ipsum sed nulla auctor porta sit amet vel risus. Sed ac
          bibendum enim. In placerat elit at rutrum suscipit. Praesent diam
          nisl, luctus quis turpis pharetra, accumsan viverra arcu. Sed eu
          feugiat erat, a posuere mauris. Nullam dapibus facilisis erat, aliquet
          maximus mi finibus in. Quisque eleifend nibh cursus urna pellentesque,
          in congue ante semper.
        </h5>
      </div>
      <div className="homeContainer">
        <LeagueTable />
        <News />
      </div>
    </div>
  );
};

export default Home;
