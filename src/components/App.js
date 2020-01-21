import React, { Component } from 'react';
import SearchBox from './searchBox';
import './weather.css';

class App extends Component {
  onSearchSubmit = term =>{
    console.log(term);
  }
  render() {
    return (
      <div className="ui weather-container">
        <SearchBox
          onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
