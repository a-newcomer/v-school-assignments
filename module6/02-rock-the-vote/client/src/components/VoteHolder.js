import React, { useState, useContext} from 'react'

import { ControversyContext, } from '../context/ControversyProvider.js'

import upheart from '../assets/heart-icon.svg'
import downheart from '../assets/heart-icon-upsidedown.svg'

function VoteHolder(props) {

  

  let initVotes = {
    likes : props.likes || [],
    dislikes: props.dislikes || []
  }

  var [ voteState, setVoteState ] = useState(initVotes)

  const { userAxios, usePathname } = useContext(ControversyContext)

  const thisPage = usePathname()
  
  function found() {
    if(voteState.likes.find(userID => userID === props.userID) === undefined && voteState.dislikes.find(userID => userID === props.userID) === undefined) {
      return false
    }
    else {
      return true
    }
  }

  function addUpVote(userID, postID) {
    !found() ?
    userAxios.put(`/api/controversies/likes/${postID}`)
    .then(res => {
      setVoteState(prevVotes => ({
        likes: [...prevVotes.likes, userID],
        dislikes: prevVotes.dislikes
         })
         
    )})
    .catch(err => console.log(err))
    :
    console.log("You've already voted")
  }

  function addDownVote(userID, postID) {
    !found() ?
    userAxios.put(`/api/controversies/dislikes/${postID}`)
    .then(res => {
      setVoteState(prevVotes => ({
        likes: prevVotes.likes,
        dislikes: [...prevVotes.dislikes, userID]
         })
         
    )})
    .catch(err => console.log(err))
    :
    console.log("You've already voted")
  }
  
  return  (
      <div className="vote-holder">
{       thisPage === "/public" ?
        <>
          <div className="vote-inner upvotes"
            onClick={
              ()=> addUpVote(props.userID, props.postID)
              }
            >
            <p className="vote-count">{voteState.likes.length}</p>
          <img className="upheart" src={upheart} alt="upheart" />
            <p>upvotes</p>
          </div>
          <div className="vote-inner downvotes"
            onClick={
              ()=> addDownVote(props.userID, props.postID)
            }>
            <p className="vote-count">{voteState.dislikes.length}</p>
            <img className="downheart" src={downheart} alt="downheart" />
            <p>downvotes</p>
          </div>
        </>
        :
        <>
        <div className="vote-inner upvotes" >
            <p className="vote-count">{voteState.likes.length}</p>
          <img className="upheart" src={upheart} alt="upheart" />
            <p>upvotes</p>
          </div>
          <div className="vote-inner downvotes" >
            <p className="vote-count">{voteState.dislikes.length}</p>
            <img className="downheart" src={downheart} alt="downheart" />
            <p>downvotes</p>
          </div>
        </>
        }
      </div>
  )
      
}
export default VoteHolder