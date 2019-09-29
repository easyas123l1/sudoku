import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import PuzzleSettings from './Components/PuzzleSettings/PuzzleSettings';
import Sudoku from './Components/Sudoku/Sudoku';

class App extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <Router basename='/'>
        <div className='App'>
          <Route path='/' exact render={
            () => {
              return (
                <div>
                  <PuzzleSettings />
                </div>
              )
            }
          } />
          <Route path='/Sudoku' exact render={
            () => {
              return (
                <div>
                  <Sudoku />
                </div>
              )
            }
          } />
        </div>
      </Router>
    );
  }
}
export default App;
