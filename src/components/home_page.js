import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import Autocomplete from './search_complete';


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayCard: false,
      countryName: null,
      suggestions: [
        "Halifax",
        "Toronto",
        "Montreal",
        "Vancouver",
        
      ]
    }
  }

  handleOnSelect = (item) => {
    this.setState({
      ...this.state,
      displayCard: true,
      countryName: item
    })
  }

  render() {
    return (
      <div className="App">
        <Autocomplete suggestions={this.state.suggestions} handleOnSelect={this.handleOnSelect} /> 
      </div>
    );
  }
}


