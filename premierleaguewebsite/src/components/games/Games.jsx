import React, { useEffect, useState } from 'react';
import './Games.css';

const Games = () => {
  const [rounds, setRounds] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/en.1.json'
    )
      .then((response) => response.json())
      .then((data) => setRounds(data));
  }, []);

  const matchDayArr = rounds.rounds;

  // const populateMatchDay = matchDayArr.map((matchDay) => (
  //   <div className="matchDay">
  //     <h3>{matchDay.name}</h3>
  //   </div>
  // ));

  console.log(matchDayArr);

  return (
    <div className="container">
      <h1>{rounds.name}</h1>
    </div>
  );
};

export default Games;
