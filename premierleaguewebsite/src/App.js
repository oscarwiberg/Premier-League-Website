import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

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
      <Header toggleMenuHandler={toggleMenuHandler} />
      {menu}
      <div style={{ height: '200px' }}>Hello</div>
      <Footer />
    </div>
  );
}

export default App;
