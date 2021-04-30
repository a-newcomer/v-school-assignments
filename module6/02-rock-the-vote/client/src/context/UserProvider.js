import React, {useState} from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

export default function UserProvider(props) {

//console.log('user provider context props:', props)

const initState = { 
  user:JSON.parse(localStorage.getItem("user")) || {}, 
  token: localStorage.getItem("token") || "",
  controversiesByCurrentUser: [],
  errMsg: ""
}
const [ userState, setUserState ] = useState(initState);

function signup(credentials) {
  axios.post("/auth/signup", credentials)
    .then(res => {
      const { user, token } = res.data
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("token", token)
      setUserState (prevUserState => ({
        ...prevUserState, 
        user, 
        token
      }))
    })
    .catch(err => handleAuthErr(err.response.data.errMsg))
}

function login(credentials, getUserReviews) {
  axios.post("/auth/login", credentials)
  .then(res => {
    const { user, token } = res.data
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("token", token);
      setUserState (prevUserState => ({
        ...prevUserState, 
        user, 
        token
      }))
  })
  .catch(err => handleAuthErr(err.response.data.errMsg)
   )
}

function logout() {
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  setUserState({
    user: {},
    token: "",
    controversiesByCurrentUser: []
  })
  //console.log("userstate at end of logout",userState.controversiesByCurrentUser)
}

function handleAuthErr(errMsg) {
  setUserState(prevState => ({
    ...prevState,
    errMsg
  }))
}

function resetAuthErr() {
  setUserState(prevState => ({
    ...prevState,
    errMsg: ""
  }))
}

  return  (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        //addReview,
        resetAuthErr
      }} >
      {props.children}
    </UserContext.Provider>
  )
}

