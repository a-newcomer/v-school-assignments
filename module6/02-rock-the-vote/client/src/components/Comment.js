
import React, { useContext }from 'react'

function Comment(props) {
  const { comment } = props
  return (
    <div className="comment" >
      <p>{comment}</p>
    </div>
  )
}
export default Comment