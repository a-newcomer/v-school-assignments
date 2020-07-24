import React from 'react';
import Header from './components/Header'
import Form from './components/state/Form'
import KittyHolder from './components/KittyHolder'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
     
        <Header />
        <main>
          <Form />
          <KittyHolder/>
        </main>
        <Footer />
    </div>
  );
}

export default App;


                
