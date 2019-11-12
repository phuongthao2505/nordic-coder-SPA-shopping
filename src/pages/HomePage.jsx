import React, { Component } from 'react';

export default class HomePage extends Component {
  state = {
    weatherInfo: null,
  };

  componentDidMount() {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?appid=874c33a3a61f941493eeb28bd14211e2&units=metric&q=ho%20chi%20minh%20city'
    )
      .then((res) => res.json())
      .then((json) => {
        console.log('weather fetched', json);
        if (json.cod === 200) {
          this.setState({
            weatherInfo: json,
          });
        }
      })
      .catch((error) => {
        console.log('weather service errors');
      });
  }

  renderWeather = () => {
    const { weatherInfo } = this.state;
    if (!weatherInfo) return null;
    const {
      main,
      weather: [condition],
    } = weatherInfo;
    return (
      <div id="weather-widget" className="weather-widget">
        <strong className="weather-widget__city-name">Currently in {weatherInfo.name}</strong>
        <h4 className="weather-widget__temperature">
          <img
            className="weather-widget__img"
            src={`//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${
              condition.icon
            }.png`}
            alt={`Weather in ${weatherInfo.name}: ${condition.description}`}
            width="60"
            height="60"
          />
          {main.temp} °C
        </h4>
        <strong className="weather-widget__main">{condition.description}</strong>
      </div>
    );
  };

  render() {
    return (
      <section
        className="pt-200 pb-200 mt-80"
        style={{ backgroundImage: 'url(/assets/slider-1.jpg)', backgroundSize: 'cover' }}
      >
        <div className="container">
          <h1>Welcome to Nordic Shop</h1>
          {this.renderWeather()}
        </div>
      </section>
    );
  }
}
