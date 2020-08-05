import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Bounty from './components/Bounty'
import AddBountyForm from './components/AddBountyForm'

function App() {
  //const bountyStart = {}
  const [bounties, setBounties] = useState([])

function getBounties() {
  axios.get("/bounties")
  .then(res => setBounties(res.data))
  .catch(err => console.log(err.response.data.errMsg))
}
function addBounty(newBounty) {
  axios.post("/bounties", newBounty)
    .then(res => setBounties(prevBounties => [newBounty, ...prevBounties],
      console.log(newBounty._id)))
    .catch(err => console.log(err))
}
function deleteBounty(bountyId) {
  axios.delete(`/bounties/${bountyId}`)
  .then(res => {
    setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
  })
  .catch(err => console.log(err))
}
function editBounty(updatesBody, bountyId) {
  axios.put(`/bounties/${bountyId}`, updatesBody)
    .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId? bounty: updatesBody))
    })
    .catch(err => console.log(err))
}

useEffect(()=> {
  getBounties()
}, [])

  return (
    <div className="App">
      <h1>Bounty Hunter To Dos</h1>

      <AddBountyForm 
        submit={addBounty} btnText="Add Bounty"/>

      <main className="bountyHolder" >
        {bounties.map(bounty => 
        <Bounty 
        {...bounty} 
        key={bounty._id}
        deleteBounty={deleteBounty}
        editBounty={editBounty} />)}
      </main>

    </div>
  );
}

export default App;
