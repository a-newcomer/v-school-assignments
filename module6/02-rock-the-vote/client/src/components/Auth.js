import React, { useState, useContext } from 'react'
import { ControversyContext } from '../context/ControversyProvider.js'
import { UserContext } from '../context/UserProvider.js'
import AuthForm from './AuthForm.js'

const initInputs = { username: "", password: "" }

function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

//Getting the data (which was sent out in object form) from the context provider using the context hook - 
//I'm just getting part of the data, destructured -ie userData.signup
  const {signup, login, getUserReviews, errMsg, resetAuthErr } = useContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
    login(inputs,getUserReviews)
  }
  function toggleForm() {
    setToggle(prev => !prev)
    resetAuthErr()
  }

  return (
    <div className="container auth-container">
      <h2>Enter to Review & Rant</h2>
      { !toggle ?
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Log In"
            errMsg={errMsg}
          />
          <button onClick={toggleForm}>Not a member yet?</button>
        </>
      :
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign Up"
            errMsg={errMsg}
          />
          <button onClick={toggleForm}>Already a member?</button>
        </>
      }
    </div>
  )
}
export default Auth