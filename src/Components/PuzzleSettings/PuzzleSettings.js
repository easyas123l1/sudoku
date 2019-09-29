import React, { Component } from 'react';

import './PuzzleSettings.css';
import {Redirect} from 'react-router-dom';

class WordEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generatePuzzle: false
    };

    this.generatePuzzle = this.generatePuzzle.bind(this);
  }

  generatePuzzle(e) {
    if (!this.state.generatePuzzle) {
      this.setState({generatePuzzle: true});
    }
  }

  render() {
    if (this.state.generatePuzzle) {
      return <Redirect to="/Sudoku" push/>
    }
    return (
      <div>
        <button
        id="btnGeneratePuzzle"
        onClick={this.generatePuzzle}>
          Generate Puzzle
        </button>
      </div>
    );
  }

}




export default WordEntry;