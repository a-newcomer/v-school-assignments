import React from 'react';
//import logo from './logo.svg';
//import vacSpots from './vacSpotsArr';
import vacationSpots from './vacSpotsArr';
import Spot from "./Spot"

function App() {
  let spotComponents = vacationSpots.map(spot => {
    return (<Spot key={spot.place + vacationSpots.indexOf(spot)} vacationInfo={spot} />)
  })
  return (
    <div className="outer">
      <h1>Suggested Vacation Spots</h1>
      <main className="App">
        {spotComponents}
      </main>
    </div>
  );
}

export default App;
