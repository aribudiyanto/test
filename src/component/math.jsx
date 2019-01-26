import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name="larry"
    const showHello=true;
    const showMath = true;

    let math;
    if (showMath) {
      math = <h4> 1 + 1 = {1 + 1}</h4>;
    } else {
      math = null;
    }

    return (
      <div className="App">
      {showHello ? <h4>hello {name.toUpperCase()}</h4>:null}

       
      {math}
      </div>
    );
  }
}

export default App;