import React from 'react';
import friends from './friendsPets.js'
import Friend from './Friend'

function App() {
  const friendComponents = friends.map(friend => {
    return (
    <Friend key={friend.name + friends.indexOf(friend)} friends={friend} />)
  })
  return (
    <div className="App">
      <h1>Friends' Pets</h1>
      <div className="friendOuter">
        {friendComponents}
      </div>
    </div>
  );
}

export default App;
