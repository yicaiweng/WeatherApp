import React, { Component } from 'react';
import raindrop from '../assets/raindrop.png';

class WeatherCard extends Component {
    // moonrise_ts: 1579872886
    // wind_cdir: "WNW"
    // rh: 71
    // pres: 1018.07
    // high_temp: 17.2
    // sunset_ts: 1579908667
    // ozone: 294.025
    // moon_phase: 0.0129913
    // wind_gust_spd: 12.6
    // snow_depth: 0
    // clouds: 33
    // ts: 1579845660
    // sunrise_ts: 1579870421
    // app_min_temp: 9
    // wind_spd: 4.51484
    // pop: 0
    // wind_cdir_full: "west-northwest"
    // slp: 1018.19
    // valid_date: "2020-01-24"
    // app_max_temp: 17.2
    // vis: 24.1
    // dewpt: 7.2
    // snow: 0
    // uv: 5.1818
    // weather:
    // icon: "c02d"
    // code: 802
    // description: "Scattered clouds"
    // __proto__: Object
    // wind_dir: 294
    // max_dhi: null
    // clouds_hi: 0
    // precip: 0
    // low_temp: 8.9
    // max_temp: 17.2
    // moonset_ts: 1579911749
    // datetime: "2020-01-24"
    // temp: 12.9
    // min_temp: 8.9
    // clouds_mid: 0
    // clouds_low: 33

    render() {
        const forecast = this.props.forecasts;
        const fahrenheit = forecast.temp * 9 / 5 + 32;
        return(
            <div className={this.props.selectedIndex === this.props.index ? "four wide column" : "three wide column"}>
                <div
                    className="ui weatherCard-container"
                    onClick={() => this.props.selectCard(this.props.index)}
                >
                    <div className="weatherCard-date">
                        <p>{forecast.valid_date}</p>
                        <p>{forecast.weather.description}</p>
                    </div>
                    <div className="weatherCard-iconContainer">
                        <img src={require(`../assets/${forecast.weather.icon}.png`)} alt="weatherIcon" />
                    </div>
                    <div className="weatherCard-temp">
                        {this.props.isFahrenheitSelected ? fahrenheit+ "F°" : forecast.temp + 'C°'}
                    </div>
                    <div className="weatherCard-pop">
                        <img className="icon" src={raindrop} alt="raindrop" />
                        {forecast.pop}%</div>
                </div>
            </div>
        )};
    
}

export default WeatherCard;