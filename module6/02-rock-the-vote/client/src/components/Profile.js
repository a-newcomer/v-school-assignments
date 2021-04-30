import React, { useContext, useEffect} from 'react'
import { UserContext } from '../context/UserProvider.js'
import { ControversyContext } from '../context/ControversyProvider.js'
import ControversyForm from './ControversyForm.js'
import ControversyList from './ControversyList.js'

function Profile(){
  //const thisUser = useContext(UserContext)
  //I could do the above, or I could destructure an inner object
  const {
    user: {username}
  } = useContext(UserContext)
  const {getUserReviews} = useContext(ControversyContext)


  //* Moved useEffect from ControversyProvider to remove login bug - now must import getUserReviews from there
useEffect(()=>{
  getUserReviews()
}, [])

  const {
    controversiesByCurrentUser, 
    addReview
  } = useContext(ControversyContext)

  //console.log("controversiesByCurrentUser: ",controversiesByCurrentUser, typeof controversiesByCurrentUser)
  return (
    <div className="container profile">
      <h1>Welcome @<span className="controversy-author">{username}</span>!</h1>
      {controversiesByCurrentUser != 0 && <h4>Your Review Requests:</h4>}
      <ControversyList controversies={controversiesByCurrentUser} />
      <h4>Add A Review Request:</h4>
      <ControversyForm addReview={addReview} />
    </div>
  )
}
export default Profile