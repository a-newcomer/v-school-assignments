import React, { useState, useContext } from 'react'
import { ControversyContext } from '../context/ControversyProvider.js'
import CommentForm from './CommentForm.js'
import CommentList from './CommentList.js'
import VoteHolder from './VoteHolder.js'

//One way to keep this off the profile page is to detect the page and show conditionally.

function Controversy(props) {
const { usePathname } = useContext(ControversyContext)
  const [commentToggle, setCommentToggle ] = useState( false );
  
  const {title, statement, imgUrl, _id, upVotes, downVotes, user} = props
  //console.log(" props in individual controversy:", props)
  const page = usePathname()
  return (
    <div className="controversy" key={_id} >
      {imgUrl ? <img src={imgUrl} alt={statement} /> : null}


      
        {page == '/profile' ? 
        <h3>{title}</h3>
        :
        <h3>
          <span className="controversy-author">{user.username}</span>'s thoughts on {title}: 
        </h3>

      }
      <div className="controversyBox">
        <p>{statement}</p>
      </div>
      { upVotes !== undefined &&
      <VoteHolder likes={upVotes} dislikes={downVotes} postID={_id} userID={user._id} />
      }
      <div style={{marginLeft: "1rem", paddingTop: ".5rem",fontWeight: "200"}}>
        <CommentList reviewID={_id} />
        {
          !commentToggle ?
          <>
          {page =='/public' && <button onClick={()=>setCommentToggle(prevInput => !prevInput)}>Add Your Thoughts</button>}
          </>
          :
          <>
        <CommentForm reviewID={_id} />
          <button onClick={()=>setCommentToggle(prevInput => !prevInput)}>cancel</button>
        </>
        }
        </div>
    </div>
  )
}
export default Controversy