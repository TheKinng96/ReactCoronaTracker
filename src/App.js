import React, { Component } from 'react';
import './App.css';
import Card from './components/cards/card.components';
import NationList from './components/NationList/NationList.components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      countries:[]
    }
  }

  componentDidMount() {
    fetch('https://corona.lmao.ninja/v2/countries')
      .then(res => res.json())
      .then(data => this.setState({ countries: data }))
    
  }

  render() {
    const { countries } = this.state;
    return (
      <div className="App">
        <Card data={countries} />
        <NationList data={countries} />
      </div>
    )
  }
}

export default App;
