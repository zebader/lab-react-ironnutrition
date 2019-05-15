import React, { Component } from 'react';
import data from './data/foods.json';
import AddFood from './components/AddFood';
import FoodBox from './components/FoodBox';
import Search from './components/Search'
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {

  state = {
    data: data,
    allFood: data
  }

  filterFood = (searchFood) =>{

    const foodFilter = [...this.state.allFood];

    let result= []; 

    foodFilter.forEach((elem)=>{

      if (elem.name.includes(searchFood)){
      result.push(elem)
    
      } 
    })

    this.setState({ data: result })

  }

  addFoodHandler = (newFood) => {
    const foodCopy = [...this.state.data];
    foodCopy.push(newFood);
    
    this.setState({ data: foodCopy })
  }

  render() {
    return (
      <div className="App">
        <Search filterFood={this.filterFood} />

        <AddFood addTheFood={this.addFoodHandler}/>
          {
            this.state.data.map((data,index) => <FoodBox {...data} key={index}/>)
          }
      </div>
    );
  }
}

export default App;
