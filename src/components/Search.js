import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
      super(props);
    
      this.state = { 
        "name": ""
        }
      }

  handleChange = (event) =>{ 
    event.preventDefault();
    this.props.filterFood(event.target.value);

    let { name, value } = event.target;
    this.setState( { [name]: value } );
    
  }

  render(){
    return (
      <div className="field box">
      
        <form onSubmit={this.handleFormSubmit}>
            <input  className="input is-medium" name="name" type="text" value={this.state.name} onChange={(e) => this.handleChange(e)} />
        </form>
      </div>
    )
  }
}

export default Search;