import React, { Component } from 'react';
import Contact from './component/contact.jsx';
import './App.css';

class App extends Component {
  render() {
  

    return (
      <div className="app">
        <h1>The App Component</h1>

        <Contact />

      
      </div>
    );
  }
}

export default App;
