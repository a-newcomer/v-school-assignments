import React, { useState, useContext } from 'react';
import { ControversyContext } from '../context/ControversyProvider.js'

const initInputs = {
  comment: ""
}

function CommentForm(props){
  const [commentInput, setCommentInput] = useState(initInputs)

  const { addComment } = useContext(ControversyContext)
  //console.log("review state", commentInput)
  function handleChange(e){
    const {name, value} = e.target
    setCommentInput(prevInput => ({
      ...prevInput,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    addComment(props.reviewID, commentInput)
    setCommentInput(initInputs)
  }

  const { comment } = commentInput
  return (
    <form
      name="commentForm"
      id="commentForm"
      onSubmit={handleSubmit}>
        <textarea
          name="comment" 
          value={comment} 
          onChange={handleChange} 
          placeholder="Add your thoughts..."
          rows={3} 
          cols={30} />

      <button>Done</button>
    </form>
  )
}
export default CommentForm