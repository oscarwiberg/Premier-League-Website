import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <div style={{ height: '200px' }}>Hello</div>
      <Footer />
    </div>
  );
}

export default App;
