import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from './components/home/Home';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  let menu;

  if (menuOpen) {
    menu = <Menu />;
  }

  return (
    <div className="App">
      <Header toggleMenuHandler={toggleMenuHandler} menuOpen={menuOpen} />
      {menu}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
