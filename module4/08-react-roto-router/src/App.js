import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'

import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Header />
        <Switch >
         <Route exact path="/" ><Home /></Route>
          <Route path="/about" ><About /></Route>
          <Route path="/services" ><Services /></Route>
        </Switch>
        
        <Footer />
    </div>
  );
}

export default App;


                
