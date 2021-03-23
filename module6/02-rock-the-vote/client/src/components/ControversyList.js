import React from 'react'
import Controversy from './Controversy.js'

function ControversyList(props){
  return (
    <div className="controversy-list">
      { props.controversies.map(review => <Controversy {...review} key={review._id} /> ) }
    </div>
  )
}
export default ControversyList