import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
/*import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from './../../constant/weathers';*/
const api_key = '9458dc6884a325ca7ac96b2f3590bc09';
//const city = 'Santiago,slc';
const url= `http://api.openweathermap.org/data/2.5/weather`


/*const data1 = {
  temperature: 25,
  weatherState: SUN,
  humidity: 2,
  wind: '10km/h'
}

const WeatherLocation = () => (
<div>
 <Location city={`Barquisimeto`}/>
 <WeatherData data={data}/>
</div>
); */

class WeatherLocation extends Component {
  constructor({city}) {
    super();
    this.state = {
      city,
      data: null,
    }
  console.log('constructor');
  }  
  

  componentWillMount() {
    const {city} = this.state;
    const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`; //vamos hacer
    fetch(api_weather).then(data => {
      console.log(data);
      return data.json();
    }).then(weather_data => {
      const data = transformWeather(weather_data);
      this.setState({ data });
    });

  }
  
  render = () => {
    console.log('Render');
    const { city, data } = this.state;
    return (
      <div className='weatherLocation'>
        <Location city={ city } />
        { data !== null ? <WeatherData data={ data } 
        /> : <CircularProgress size={60} thickness={7} />
        }
        
      </div>
    )
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
}

export default WeatherLocation;