import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import Hero from './components/Hero';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fetchedHeroes: [],
      filteredHeroes: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:3001/api/heroes').then(response => {
      this.setState({ fetchedHeros: response.data, filteredHeroes: response.data }, () => { console.log(this.state.fetchedHeros) })
    })
  }

  filterHeroes = (evt) => {
    let matchedHeroes = this.state.fetchedHeros.filter((hero) => {
      return hero.alias.toLowerCase().indexOf(evt.target.value.toLowerCase()) !== -1
    })

    this.setState({ filteredHeroes: matchedHeroes }, () => { console.log(this.state.filteredHeroes) });
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
