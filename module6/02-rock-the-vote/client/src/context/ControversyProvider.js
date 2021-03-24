import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const ControversyContext = React.createContext()


//Here we want to create a header to hold our token to get controversies by user
//we create our own instance of axios
const userAxios = axios.create()
//then we add the Authorization and bearer stuff to it, in the request
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
config.headers.Authorization = `Bearer ${token}`
return config
})



export default function ControversyProvider(props) {

const initialState = {
  controversiesByCurrentUser: []
  //controversies: [],
  // comments: [],
  // upVotes: 0,
  // downVotes: 0
}
const [ reviewState, setReviewState] = useState(initialState)
//console.log("in context controversies: ", reviewState.controversiesByCurrentUser)

//* we use the below in the login function to show reviews immediately, but we also need to use it in useEffect to persist them, because ... (?)
function getUserReviews() {
  //the userAxios has the token in it now
  userAxios.get("/api/controversies/user")
    .then(res => {
      setReviewState(prevState => ({
        ...prevState,
        controversiesByCurrentUser: res.data
      })
     )
    })
    .catch(err => console.log(err.response.data.errMsg))
}


function addReview(newReview) {
  //the userAxios has the token in it now
  userAxios.post("/api/controversies", newReview)
  .then(res => {
    setReviewState(prevState => ({
      ...prevState,
      controversiesByCurrentUser: [ ...prevState.controversiesByCurrentUser, newReview]
    }))
  })
  .catch(err => console.log(err.response.data.errMsg))
}


  return (
    <ControversyContext.Provider
      value={{
        ...reviewState,
        getUserReviews,
        addReview
      }} >
      {props.children}
    </ControversyContext.Provider>
  )

}