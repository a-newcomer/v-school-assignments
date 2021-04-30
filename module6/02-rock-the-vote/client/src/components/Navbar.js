import React from 'react'
import logo from '../assets/heart-icon.svg'
import { Link } from 'react-router-dom'

function Navbar(props){
  return (
    <div className="navbar">
       <Link to="/">
         <div className="title-holder">
           <img className="logo" src={logo} alt="Ann's Kitty-love logo" />
          <h1>Rate the Review</h1>
        </div>
      </Link>
      <div className="nav-links">
        {props.token && <Link to="/profile">Profile</Link>}
        {props.token && <Link to="/public">All Reviews</Link>}
      </div>
      <button onClick={props.logout}>Logout</button>
    </div>
  )
}
export default Navbar