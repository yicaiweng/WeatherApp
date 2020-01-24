import React, { Component } from 'react';
import SearchBox from './searchBox';
import axios from 'axios';
import './weather.css';
import WeatherDetail from './weatherDetail';
import Spinner from './spinner';
import WeatherCard from './weatherCard';

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

  renderContent() {
    return <Spinner message="Loading Data"/>
  }

  render() {
    return (
      <div className="ui weather-container">
        <div>
        <SearchBox
          onSubmit={this.onSearchSubmit}/>
        </div>
        {/* { this.state.forecast.city_name ?  */}
        <div>
          <WeatherDetail city={this.state.forecast.city_name}/>
        </div>
        <div>
          <WeatherCard />
        </div>
        {/* : */}
          <div></div>
        {/* } */}
      </div> 

    );
  }
}

export default App;
