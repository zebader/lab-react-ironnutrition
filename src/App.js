import React, { Component } from 'react';
import data from './data/foods.json';
import 'bulma/css/bulma.css';
import './App.css';

import FoodBox from './components/FoodBox'

class App extends Component {

  state = {
    data: data
  }

  render() {
    return (
      <div className="App">
        <FoodBox />
      </div>
    );
  }
}

export default App;
