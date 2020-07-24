import React from 'react';
import Header from './components/Header'
import ReactShowcase from './components/ReactShowcase'
import WordPressShowcase from './components/WordPressShowcase'
import About from './components/About'
import Contact from './components/Contact'
import CreativeFlotsam from './components/CreativeFlotsam'
import Footer from './components/Footer'
import ProjectDetails from './components/pages/ProjectDetails'

import {Switch, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <div id="portfolio">
            <ReactShowcase />
            <WordPressShowcase />
            <CreativeFlotsam />
            <About />
            <Contact />
          </div>
        </Route>
          {/* <ProjectDetails /> */}
        <Route path="/projects/:projectId">
          <ProjectDetails />
        </Route>
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
