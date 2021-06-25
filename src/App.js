import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      heroes: []
    };
    this.filterHeroes = this.filterHeroes.bind(this);
  }

  componentDidMount() {
    // TODO call API and set heroes
  }

  filterHeroes(evt) {
    // TODO filter heroes based on the query
  }

  render() {
    const { heroes } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hero UI</h1>
          <input onChange={this.filterHeroes} />
        </header>
        <div>
          {
            heroes.map((hero, index) => <Hero hero={hero} key={index} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
