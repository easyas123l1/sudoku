import React, { Component } from 'react';
import './Sudoku.css';

class Sudoku extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: []
    }
    this.componentWillMount = this.componentWillMount.bind(this);

  }

  generatePuzzle() {
    for (let i = 0; 9 > i; i++) {
      let line = [];
      for (let j = 0; 9 > j; j++) {
        let numberID = `${i}, ${j}`;
        let number = '-'
        const newNumber = {
          text: number,
          id: numberID,
          i: i,
          j: j
        }
        line.push(newNumber);
        if (j + 1 === 9) {
          const newLine = {
            text: line,
            id: i
          }
          this.setState(state => ({
            lines: state.lines.concat(newLine)
          }))
        }
      }
    }

  }

  componentWillMount() {
    this.generatePuzzle();
  }

  render() {
    return (
      <div>
        <h1>Sudoku Puzzle</h1>
        <div className="numberSelector">
          <ul>
            <li>1</li>  
            <li>2</li> 
            <li>3</li> 
            <li>4</li> 
            <li>5</li> 
            <li>6</li> 
            <li>7</li> 
            <li>8</li> 
            <li>9</li> 
          </ul> 
        </div>
        <div className="Puzzle">
          <ul>
            {this.state.lines.map(line => (
              <li id="numberRow" key={line.id} className="numberRow">
                {line.text.map(number => (
                  <div id={number.id} key={number.id} className='numberDiv'>
                  <p id={number.id} key={number.id}>{number.id}</p>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

}

export default Sudoku;