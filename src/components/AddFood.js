import React, { Component } from 'react';

class AddFood extends Component {
  constructor(props){
      super(props);
    
      this.state = { 
        "name": "",
        "calories": 0,
        "image": "",
        "quantity": 0,
        "display" : false
        }
      }
  

  toggleForm = () => {
      this.setState({display: !this.state.display});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheFood(this.state);
    // Reset the state
    this.setState({"name": "","calories": 0,"image": "","quantity": 0,"display" : false });  	
  };

  handleChange = (event) =>{
    event.preventDefault();
    // All our inputs have same `name` as the `state` property name.
    let { name, value } = event.target;
    this.setState( { [name]: value } );
  }

  render(){
    return (
      <div className="field box">
      
      <button onClick={this.toggleForm} className="button is-link is-large">
      {this.state.display ? "Hide" : "Add Food"}
      </button>

      {
        this.state.display ? 
        (<form onSubmit={this.handleFormSubmit} style={this.display}>
            <label>Name:</label>
            <input className="input is-medium" name="name" type="text" value={this.state.name} onChange={(e) => this.handleChange(e)} />

            <label>Image:</label>
            <input  className="input is-medium" name="image" type="text" value={this.state.image} onChange={(e) => this.handleChange(e)} />

            <label>Calories:</label>
            <input  className="input is-medium" name="calories" type="number" value={this.state.calories} onChange={(e) => this.handleChange(e)} />
            
            <button className="button is-success is-large" type="submit" > Submit </button>
        </form>) 
        : null}
      </div>
    )
  }
}

export default AddFood;