import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LocationList from './components/LocationList';  //reemplazo WeatherLocation


const cities = [
  'Santiago,scl',
  'Buenos Aires,ar',
  'Bogotá,col',
  'Ciudad de México,mx',
]


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
          <LocationList cities={cities}></LocationList>   
      </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
