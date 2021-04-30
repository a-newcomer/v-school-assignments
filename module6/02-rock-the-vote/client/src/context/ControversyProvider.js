import React, { useState} from 'react'
import { useLocation } from 'react-router-dom'
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
  controversiesByCurrentUser: [],
  controversies: [],
  comments: []
}
const [ reviewState, setReviewState] = useState(initialState)

function getAllReviews() {
  //the userAxios has the token in it now
  userAxios.get("/api/controversies")
    .then(res => {
      setReviewState(prevState => ({
        ...prevState,
        controversies: res.data
      })
     )
    })
    .catch(err => console.log(err))
}

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
  .catch(err => console.log(err))
}

//* Get comments by review
// function getAllComments(reviewID) {
//   userAxios.get(`/api/comments/${reviewID}`)
//   .then(res => {setReviewState(prevState => ({
//       ...prevState,
//       comments: res.data
//     }))
//     console.log(res.data)
//   })
//   .catch(err => console.log(err.response.data.errMsg))
// }

//*get all comments
function getAllComments() {
  userAxios.get(`/api/comments`)
  .then(res => {
    setReviewState(prevState => ({
      ...prevState,
      comments: res.data
    })
   )
  })
  .catch(err => console.log(err.response.data.errMsg))
}
//*post or add new comment
function addComment(reviewID, newComment){
  userAxios.post(`/api/comments/${reviewID}`, newComment)
  .then(res => {
    setReviewState(prevState => ({
      ...prevState,
      comments: [...prevState.comments, newComment]
    }))
  })
  //.catch(err => console.log(err.response.data.errMsg
  .catch(err => console.log(err))
}

// A function that uses a built-in hook from react-router-dom to detect page path for conditional rendering according to what page we're on
const usePathname = () => {
  const location = useLocation()
  return location.pathname
}


//console.log("reviewState comments: ", reviewState.comments)

  return (
    <ControversyContext.Provider
      value={{
        ...reviewState,
        userAxios,
        getAllReviews,
        getUserReviews,
        addReview,
        getAllComments,
        addComment,
        usePathname
      }} >
      {props.children}
    </ControversyContext.Provider>
  )

}