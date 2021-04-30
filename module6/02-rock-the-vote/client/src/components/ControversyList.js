import React from 'react'
import Controversy from './Controversy.js'
//pull in users and use that list to compare user ids and grab name

function ControversyList(props){

  return (
    <div className="controversy-list">
      { props.controversies.upVotes !== undefined ? 
      props.controversies.sort((a,b)=> {return b.upVotes.length - a.upVotes.length }).map(review => <Controversy {...review} key={review._id} /> )
      : 
      props.controversies.map(review => <Controversy {...review} key={review._id} />) }
    </div>
  )
}
export default ControversyList