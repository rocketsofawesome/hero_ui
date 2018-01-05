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

  componentWillMount() {
    fetch('http://localhost:3000/api/heroes')
      .then((response) => response.json())
      .then(this.setHeroes.bind(this))
      .catch(this.handleError.bind(this))
  }

  setHeroes (heroes) {
    this.setState({
      fetchedHeroes: heroes,
      filteredHeroes: heroes
    })
  }

  handleError (error) {
    console.error('Error fetching heroes :(', error)
  }

  filterHeroes(evt) {
    const query = evt.target.value.toLowerCase()
    const filteredHeroes = this.state.fetchedHeroes.filter((hero) => {
      return hero.alias.toLowerCase().indexOf(query) >= 0
    })
    this.setState({ filteredHeroes })
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
          {filteredHeroes.map((hero, index) => {
            return (<Hero hero={hero} key={index} />)
          })}
        </div>
      </div>
    );
  }
}

export default App;
