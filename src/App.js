
import './App.css';
import React from 'react';

import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Header/>
        <h1>Hello</h1>
        <MemeGenerator />
      </div>
    )
  }
}

export default App;
