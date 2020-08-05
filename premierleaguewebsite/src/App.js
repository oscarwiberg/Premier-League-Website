import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from './components/home/Home';
import Teams from './components/teams/Teams';
import TopScorers from './components/topScorers/TopScorers';
import Games from './components/games/Games';
import Forum from './components/forum/Forum';
import store from './store';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  let menu;

  if (menuOpen) {
    menu = <Menu toggleMenuHandler={toggleMenuHandler} />;
  }

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header toggleMenuHandler={toggleMenuHandler} menuOpen={menuOpen} />
          {menu}
          <div className="Container">
            <Route path="/" exact component={Home} />
            <Route path="/teams" component={Teams} />
            <Route path="/topscorers" component={TopScorers} />
            <Route path="/games" component={Games} />
            <Route path="/forum" component={Forum} />
          </div>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
