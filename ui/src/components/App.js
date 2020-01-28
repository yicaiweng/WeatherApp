import React, { Component } from 'react';
import SearchBox from './searchBox';
import axios from 'axios';
import './weather.css';
import WeatherDetail from './weatherDetail';
import WeatherInfo from './weatherInfo';
import Spinner from './spinner';
import Error from './error'

// TODO moved to Redux store:
// selectedIndex
// centerIndex

// TODO move centerIndex to Redux and make incr and decr actions with that
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      city: [],
      forecast: [],
      centerIndex: 2,
      selectedIndex: 0,
      error: null,
      forecastInfo: []
    };

    // This binding is necessary to make `this` work in the callback
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.incrementCarouselIndex = this.incrementCarouselIndex.bind(this);
    this.decrementCarouselIndex = this.decrementCarouselIndex.bind(this);
    this.selectCard = this.selectCard.bind(this);
  }

  onSearchSubmit = term =>{
    axios.get('http://localhost:4000/getWeather', {
    params: {
          search: term
        }
      }).then((response) => {
        console.log('BFF response: ', response)
        let tempInfo = response.data.weatherData.data[0];
        console.log(tempInfo)
        this.setState({ 
          city: response.data.weatherData.city_name, 
          forecast: response.data.weatherData,
          forecastInfo: tempInfo
        })
      })
      .catch(err => {
        this.setState({error: err})
        console.log(err)
      })
  }

  incrementCarouselIndex = () => { 
    if (this.state.centerIndex < 13){
      let newIndex = this.state.centerIndex + 5;
      this.setState({ centerIndex: newIndex, selectedIndex: null });
    } 
  }


  decrementCarouselIndex = () => {
    if (this.state.centerIndex > 2){
      let newIndex = this.state.centerIndex - 5;
      this.setState({ centerIndex: newIndex, selectedIndex: null });
    }
  }

  selectCard = (index) => { 
    const tempInfo = Object.assign(this.state.forecast.data[index])
    this.setState({forecastInfo: tempInfo})
    if(index === this.state.selectedIndex){
      this.setState({ selectedIndex: null })
    } else { this.setState({ selectedIndex: index }) }
    console.log(this.state.forecastInfo)
    console.log(this.state.forecast.data[index])
  }
    

  renderContent() {
    return <Spinner message="Loading Data"/>
  }

  render() {
    return (
      <div className="ui container weather-container">
        <div>
          <SearchBox
            onSubmit={this.onSearchSubmit}/>
        </div>
        
        { this.state.error ? 
          <div>
            <Error errorMessage={this.state.error} />
          </div>
          : 
          <div></div>
        }
    
        { this.state.forecast.city_name ? 
        <div className="weather-city">
            <WeatherDetail 
              city={this.state.forecast.city_name}
              forecast={this.state.forecast}
              centerIndex={this.state.centerIndex}
              selectedIndex={this.state.selectedIndex}
              incrementCarouselIndex={this.incrementCarouselIndex}
              decrementCarouselIndex={this.decrementCarouselIndex}
              selectCard={this.selectCard}
            />
            <WeatherInfo 
              forecastInfo={this.state.forecastInfo}
            />
        </div>
        :
        <div></div>
    }
      </div> 

    );
  }
}

export default App;
