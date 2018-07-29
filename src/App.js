import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={style}>
        <div>
        <h1>Demo</h1> 
          <button>Export to Excel</button> 
          <table>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
            <tr>
              <th>John</th>
              <th>Smith</th>
              <th>49</th>
            </tr>
            <tr>
              <th>David</th>
              <th>Mark</th>
              <th>34</th>
            </tr>
          </table> 
      </div>
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center',
}
export default App;
