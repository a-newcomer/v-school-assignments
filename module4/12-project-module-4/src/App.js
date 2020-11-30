import React from 'react';
import {Route, Switch} from 'react-router-dom'
import EntryPage from './components/EntryPage'
import StatePage from './components/StatePage'
import StatesMenu from './components/StatesMenu'
//import StateNames from './states_titlecase'


function App() {

  return (
    <div className="App">
      <h2>COVID 19 Tracking USA</h2>
      <h1>Daily change in Hospitalizations</h1>
      <div className="contentHolder">
        <StatesMenu />
        <Switch>
          {/* THE HOME PAGE IS COMMENTED OUT, BECAUSE IT'S THE ONE THING I CAN'T GET ROUTED CORRECTLY - IT WON'T MOVE TO AN INDIVIDUAL STATE PAGE, ALTHOUGH YOU CAN SEE THE STATE PATH IN THE URL! HOPEFULLY I'M JUST FORGETTING SOMETHING OBVIOUS HERE*/}
          <Route exact path="/" component={EntryPage}>
           <EntryPage />
          </Route>
          <Route path="/individualStateDailyHosp/:stateParam">
            <StatePage />
          </Route>
        </Switch>
      </div>
      <footer>
        <p>The change in hospitalizations statistic was chosen in spite of its delay in reflecting the pandemic situation, as it is the least able to be influenced by political factors.</p>
        <p>Data is from <a href="https://api.covidtracking.com/data/api" rel="noopener noreferrer" target="_blank" >The COVID Tracking Project</a> at The Atlantic Magaizine, taken directly from the websites of local or state/territory public health authorities.</p>
        <p>The project uses <a href="https://formidable.com/open-source/victory/" rel="noopener noreferrer" target="_blank" >Victory by Formidable</a> to visualize the data.</p>
        <h3><a href="https://annssite.com/portfolio.html" rel="noopener noreferrer" target="_blank" >Ann's</a> React Project for VSchool's Module 4</h3>
      </footer>
      
  </div>
  );
}

export default App;
