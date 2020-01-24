import React, { Component } from 'react';
import a01d from '../assets/a01d.png';
import raindrop from '../assets/raindrop.png';
import wind from '../assets/wind.png';
import uv from '../assets/uv.png';
import sun from '../assets/sun.png';
import sunset from '../assets/sunset.png';
import sunraise from '../assets/sunraise.png';
import humidity from '../assets/humidity.png';

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
        return(
            <div>
                <div className="ui weatherCard-container">
                    <div className="weatherCard-date">
                        <p>10/12</p>
                        <p>Moderate Rain</p>
                    </div>
                    <div className="weatherCard-iconContainer">
                        <img src={a01d} alt="weatherIcon" />
                    </div>
                    <div className="weatherCard-temp">
                        33°
                    </div>
                    <div className="weatherCard-pop">
                        <img className="icon" src={raindrop} alt="raindrop" />
                        25%</div>
                </div>
                
                <div className="weatherCard-detail ui grid">
                    <div className="sixteen wide column">
                        <p>Moderate Rain, Low_Temp, max_temp</p>
                    </div>
                    <div className="four wide column">
                        <div className="weatherCard-row">
                            <span>
                            <img className="weather-icon" src={wind} alt="wind icon"/>
                            </span>
                            <span>
                                <b><p>Wind</p></b>
                            </span>
                        </div>
                        <p>win_cdir, win_spd, m/s</p>
                    </div>
                    <div className="four wide column">
                        <div className="weatherCard-row">
                            <span>
                            <img className="weather-icon" src={humidity} alt="wind icon"/>
                            </span>
                            <span>
                                <b><p>Humidity</p></b>
                            </span>
                        </div>
                        <p>rh</p>
                    </div>

                    <div className="four wide column">
                        <div className="weatherCard-row">
                            <span>
                            <img className="weather-icon" src={uv} alt="wind icon"/>
                            </span>
                            <span>
                                <b><p>uv</p></b>
                            </span>
                        </div>
                        <p>uv of 10</p>
                    </div>

                    <div className="four wide column">
                        <div className="weatherCard-row">
                            <span>
                            <img className="weather-icon" src={sun} alt="wind icon"/>
                            </span>
                            <span>
                                <b><p>sun</p></b>
                            </span>
                        </div>
                        <p><img className="weather-icon" src={sunraise} alt="weather-icon"/> sunrise_ts, <img className="weather-icon" src={sunset} alt="weather-icon" />sunset_ts</p>
                    </div>
                </div>
            </div>
        )};
    
}

export default WeatherCard;