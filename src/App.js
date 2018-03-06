import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LocationList from './components/LocationList';  //reemplazo WeatherLocation

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
          <LocationList></LocationList>   
      </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
