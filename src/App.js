import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero'

const HEROES_ENDPOINT = 'http://localhost:3000/api/heroes';

const fetchHeroes = async () => {
  try{
    const response = await fetch(HEROES_ENDPOINT);
    const body = await response.json();
    return body;
  } catch(e){
    console.warn('error loading endpoint', e);
  }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      heroes: [],
      filter: ''
    }
  }

  componentWillMount() {
    this.fetchHeroes();
  }

  fetchHeroes = async () => {
    const heroes = await fetchHeroes();
    this.setState({ heroes, filter: '' });
  }

  filterHeroes(evt) {
    this.setState({ filter: evt.target.value.toLowerCase() });
  }

  render() {
    const { heroes, filter } = this.state
    const filteredHeroes = filter.length > 0
      ? this.state.heroes.filter(hero => (hero.alias.toLowerCase().indexOf(filter) > -1))
      : heroes;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hero UI</h1>
          <input onChange={evt => this.filterHeroes(evt)} />
        </header>
        <div>
          {filteredHeroes.map((hero) => {
            return (<Hero key={hero.alias} hero={hero} />)
          })}
        </div>
      </div>
    );
  }
}

export default App;
