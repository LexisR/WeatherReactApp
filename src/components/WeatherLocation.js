import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
  <div>
    <Location city = {'Kiev'}/>
    <WeatherData/>
  </div>
)


export default WeatherLocation; // para que el index recononazca 