import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fetchedHeroes: [],
      filteredHeroes: []
    }
  }

  componentDidMount() {
    //TODO call API and set fetchedHeroes and filteredHeroes
  }

  filterHeroes(evt) {
    //TODO set filteredHeroes based on search parameters
  }

  render() {
    const { filteredHeroes } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hero UI</h1>
          <input onChange={evt => this.filterHeroes(evt)} />
        </header>
        <div>
          {filteredHeroes.map((hero) => {
            return (<Hero hero={hero} />)
          })}
        </div>
      </div>
    );
  }
}

export default App;
