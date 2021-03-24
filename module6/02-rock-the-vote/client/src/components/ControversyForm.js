import React, { useState } from 'react'

const initInputs = {
  title: "",
  statement: "",
  imgUrl: ""
}

function ControversyForm(props){
  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.addReview(inputs)
    setInputs(initInputs)
  }

  const { title, statement, imgUrl } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="Thing to Review"/>
      <textarea
        name="statement" 
        value={statement} 
        onChange={handleChange} 
        placeholder="Why Review It?"
        rows={6} 
        cols={30} />
      <input 
        type="text" 
        name="imgUrl" 
        value={imgUrl} 
        onChange={handleChange} 
        placeholder="Image Url"/>

      <button>Add Review</button>
    </form>
  )
}
export default ControversyForm