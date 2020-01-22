import React, { Component } from 'react';
import SearchBox from './searchBox';
import './weather.css';
// import geocoding from '../api/geocoding';
import axios from 'axios';

class App extends Component {
  state = {city: [], forecast: []};

  onSearchSubmit = term =>{
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params: {
          address: term,
          key: process.env.REACT_APP_GEOCODING_API
        },
      }).then( response => {
        this.setState({city: response.data.results[0]});
        console.log(this.state.city)
        let lat = this.state.city.geometry.location.lat;
        let lon = this.state.city.geometry.location.lng;
        // https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=API_KEY

        axios.get('https://api.weatherbit.io/v2.0/forecast/daily', {
          params: {
            lat,
            lon,
            key: process.env.REACT_APP_WEATHER_API
          }
        }).then(res => {
          this.setState({forecast: res.data})
          console.log(this.state.forecast);
        })
        .catch(err => {
          console.log(err);
        })
      })
      .catch(err => {
        console.log(err);
      })
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
