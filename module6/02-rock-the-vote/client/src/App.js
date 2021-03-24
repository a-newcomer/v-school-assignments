import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'

import { UserContext } from './context/UserProvider.js'

function App() {
  const { token, logout } = useContext(UserContext)
  //console.log("token in App is ",token)
  return (
    <div className="App">
     
    <Navbar logout={logout} token={token} />

    <Switch >

      <Route exact path="/" >
        { token ? <Redirect to="/profile" /> : <Auth /> }
      </Route>

      <ProtectedRoute 
      token={token}
      path="/profile"
      redirectTo="/"
      component={Profile} />
      {/* <Profile /> */}

      <Route path="/public">
        <Public />
      </Route>

    </Switch>
    </div>
  );
}

export default App;
