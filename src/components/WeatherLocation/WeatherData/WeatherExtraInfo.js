import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind }) => (
    <div className='weatherExtraInfoCont'>
      <span  className='weatherExtraInfo'>{`humedad: ${humidity} % -`}</span>
      <span className='weatherExtraInfo'> {`Vientos: ${wind} wind`}</span>
    </div>
)

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;
