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
   hadlerSelectionLocation = city =>{
    console.log('hadlerSelectionLocationClick')
  }

  render () {
    return (
      <MuiThemeProvider>
      <div className="App">
          <LocationList cities={cities} onSelectedLocation ={this.hadlerSelectionLocation}></LocationList>   
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
