import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import IdeasContainer from './components/IdeasContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Drello-Put Your Ideas Together</h1>
        </div>
        <IdeasContainer />
      </div>
    );
  }
}

export default App
