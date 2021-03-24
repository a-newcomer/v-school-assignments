import React from 'react'

export default function AuthForm(props){
  const {
    handleChange, 
    handleSubmit, 
    btnText, 
    inputs: {
      username, 
      password
    },errMsg
  } = props
  
  return (
    <form onSubmit={handleSubmit} style={{border: errMsg && "5px red dotted" }} >
      <input 
        type="text" 
        value={username} 
        name="username" 
        onChange={handleChange} 
        placeholder="Username"/>
      <input 
        type="text" 
        value={password} 
        name="password" 
        onChange={handleChange} 
        placeholder="Password"/>
      <button>{ btnText }</button>
      <h6 className="errMsg" style={{color: "red"}}>{errMsg}</h6>
    </form>
  )
} 