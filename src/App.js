import React, {Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

class App extends Component { //definiendo nuevo componente,  la receta, la carpeta teiene el mismo nombre qu ela
  render() {//muestra la informacion de las funciones realizadas
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList />
        </div>
      </MuiThemeProvider>
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