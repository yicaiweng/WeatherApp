import React from 'react';
import lowTemp from '../assets/low_temp.png'
import highTemp from '../assets/high_temp.png'
import wind from '../assets/wind.png';
import uv from '../assets/uv.png';
import sun from '../assets/sun.png';
import sunset from '../assets/sunset.png';
import sunraise from '../assets/sunraise.png';
import humidity from '../assets/humidity.png';

const WeatherInfo = (props) => {
    let sunraiseDate = new Date(props.forecastInfo.sunrise_ts * 1000);
    sunraiseDate = sunraiseDate.getHours() + ':' + sunraiseDate.getMinutes() + 'am';
    let sunsetDate = new Date(props.forecastInfo.sunset_ts * 1000);
    sunsetDate = sunsetDate.getHours() + ':' + sunsetDate.getMinutes() + "pm";
    return(
        <div className="weatherCard-detail ui grid">
            <div className="sixteen wide column">
                <p className="row">{props.forecastInfo.weather.description}, 
                <img className="weather-icon" src={lowTemp} alt="lowTemp icon"/>{props.forecastInfo.low_temp}, 
                <img className="weather-icon" src={highTemp} alt="highTemp icon"/>{props.forecastInfo.max_temp}</p>
            <div className="ui grid">
                <div className="four wide column">
                    <div className="weatherCard-row">
                        <span>
                            <img className="weather-icon" src={wind} alt="wind icon"/>
                        </span>
                        <span>
                            <b>Wind</b>
                        </span>
                        </div>
                            <p>{props.forecastInfo.wind_cdir},{" "} {props.forecastInfo.wind_spd} m/s</p>
                        </div>
                        <div className="four wide column">
                            <div className="weatherCard-row">
                                <span>
                                <img className="weather-icon" src={humidity} alt="wind icon"/>
                                </span>
                                <span>
                                    <b>>Humidity</b>
                                </span>
                            </div>
                            <p>{props.forecastInfo.rh}</p>
                        </div>

                        <div className="four wide column">
                            <div className="weatherCard-row">
                                <span>
                                    <img className="weather-icon" src={uv} alt="wind icon"/>
                                </span>
                                <span>
                                    <b>UV</b>
                                </span>
                            </div>
                            <p>{props.forecastInfo.uv.toFixed(2)} of 10</p>
                        </div>

                        <div className="four wide column">
                            <div className="weatherCard-row">
                                <span>
                                    <img className="weather-icon" src={sun} alt="wind icon"/>
                                </span>
                                <span>
                                    <b>Sun</b>
                                </span>
                            </div>
                            <p><img className="weather-icon" src={sunraise} alt="weather-icon"/> {sunraiseDate}, <img className="weather-icon" src={sunset} alt="weather-icon" />{sunsetDate}</p>
                        </div>
                        </div>
                        </div>
                    </div>
    )
}

export default WeatherInfo;