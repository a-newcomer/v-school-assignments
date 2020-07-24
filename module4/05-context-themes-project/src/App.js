import React from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import {ThemeContextConsumer} from './components/themeContext'

function App() {
  return (
    <ThemeContextConsumer>
      {theme =>(
        <div className={theme.theme + " App"}>
          <Header />
          <Main />
          <Footer />
         </div>
      )}
    </ThemeContextConsumer>
    
  );
}

export default App;
