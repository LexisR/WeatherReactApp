import React, {Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';

class App extends Component { //definiendo nuevo componente,  la receta, la carpeta teiene el mismo nombre qu ela
  render() {//muestra la informacion de las funciones realizadas
    return (
      <div className="App">
        <WeatherLocation />
      </div>
    );
  }
}

export default App;

/*
index.htlm 
id:'root'

index.js
Le da la partida  ala aplicacion 

React DOM
cambiar cosad del dom original 

ReactDOM.render(<App />, document.getElementById('root'));
instanciar componetes

*/ 