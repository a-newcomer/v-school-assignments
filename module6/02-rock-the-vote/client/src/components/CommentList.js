import React, {useContext, useEffect}  from 'react'
import { ControversyContext } from '../context/ControversyProvider'
import Comment from './Comment.js'

function CommentList(props){
  const {reviewID} = props
  let {getAllComments, comments, usePathname} = useContext(ControversyContext)

useEffect((_id)=>{
  getAllComments(reviewID)
}, [])

//console.log(comments)
const thisPage = usePathname()

  return (
    <div className="comment-list">

      {
        comments && (thisPage === '/profile') ?

         <h5>Comments: </h5>
        :
        <h5>Your thoughts? </h5>    
      }
      
      {/* {console.log("review id: ", reviewID,"comments: ", comments)} */}
      { comments && comments.filter(comment => comment.controversy == reviewID).map(comment => <Comment {...comment} key={comment._id} /> ) }
    </div>
  )
}
export default CommentList