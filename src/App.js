import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename='/'>
      <div className='App'>
        <Route path='/' exact render={
          () => {
            return (
              <div>

              </div>
            )
          }
        } />
      </div>
    </Router>
  );
}

export default App;
