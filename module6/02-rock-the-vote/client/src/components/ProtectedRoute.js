import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute(props) {
const { token, path, redirectTo, component: C, ...theRest } = props

  return (
   <Route exact path={path} >
     {token ? <C {...theRest}/> : <Redirect to={redirectTo} />}
   </Route>
  )
}
export default ProtectedRoute
