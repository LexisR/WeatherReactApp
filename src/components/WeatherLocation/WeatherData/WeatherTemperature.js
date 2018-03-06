import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import {CLOUD,CLOUDY,SUN,RAIN,WINDY,SNOW} from './../../../constant/Weather';

const stateToIconName = (weatherState) => {
  switch (weatherState){
    case CLOUD: 
    return 'cloud';
    case CLOUDY:
    return'cloudy';
    case SUN:
    return 'sun';
    case RAIN:
    return'rain';
    case SNOW:
    return'snow';
    case WINDY:
    return'windy';
    default:
    return 'day-sunny';
  }
}

const getWeatherIcon = (weatherState) => {
  return (
  <WeatherIcons name = {stateToIconName(weatherState)} size="2x" />)
}


const WeatherTemperature = ({temperature, weatherState }) => (
  <div>
   {getWeatherIcon(weatherState)}
    <span>{`${temperature}º C`}</span>
  </div>
)

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
}



export default WeatherTemperature;