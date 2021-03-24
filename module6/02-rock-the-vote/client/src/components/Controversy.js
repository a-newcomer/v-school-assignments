import React from 'react'

function Controversy(props) {
  const {title, statement, imgUrl, _id} = props
  return (
    <div className="controversy" key={_id} >
      {imgUrl ? <img src={imgUrl} alt={statement} /> : null}
      <h3>{title}</h3>
      <p>{statement}</p>
    </div>
  )
}
export default Controversy