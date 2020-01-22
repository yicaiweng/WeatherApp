import React, { Component } from 'react';
import SearchBox from './searchBox';
import './weather.css';
import geocoding from '../api/geocoding';

class App extends Component {
  state = {city: {}};
  onSearchSubmit = async term =>{

    const response = await geocoding
      .get('maps/api/geocode/json', {
        params: {
          address: term,
          key: 'AIzaSyBVNOHKX6EhL9NotrttjfN-57SreSwRoZg'
        },
      })
        this.setState({city: response.data.results});
        console.log(this.state.city);
        console.log(this.state.city[0].geometry.location);
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
