import React from 'react';
import logo from './assets/logo.png'
import DataFetching from './components/DataFetching'

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Ann's Kitty-love logo" />
    <h1>Ann's React App</h1>
    <DataFetching />
    </div>
  );
}

export default App;
