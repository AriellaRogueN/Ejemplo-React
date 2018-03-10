import React, { Component } from 'react';
import {connect} from'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';  //reemplazo WeatherLocation
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions'
import './App.css';


const cities = [
  'Santiago,scl',
  'Buenos Aires,ar',
  'Bogotá,col',
  'Ciudad de México,mx',
]

//PRIMERA PARTE DE STORE REDUX

//const store = createStore (()=>{})   //configurarlo para agregar browser



  
  
  class App extends Component {
  constructor(){
    super()
    this.state = {
      city:null
  }
};

   hadlerSelectionLocation = city =>{
     this.setState({city});
    console.log(`hadlerSelectionLocationClick ${city}`);
    //const action = {type:'setState', value: city}
    //store.dispatch(setCity(city));

    this.props.setCity(city);
  }

  render () {
    const {city} = this.state;

    return (
     <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <AppBar/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities} onSelectedLocation={this.hadlerSelectionLocation}></LocationList>
            </Col>
            <Col xs={12} md={6}>
             <Paper zDepth>
               <div className="detail">
                 
                 {
                   city === null ? <h1>No se seleccionó Ciudad  
                     </h1> : <ForecastExtended city={city} />
                 }
                </div>
             </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>


      /*<MuiThemeProvider>
      <div className="App">
          <LocationList cities={cities} onSelectedLocation ={this.hadlerSelectionLocation}></LocationList>   
      </div>
      </MuiThemeProvider> */
    );
  }
}
//const mapDispatchToPropsActions = () => {};
//const componentConnected = connect(null,mapDispatchToPropsActions)(App)

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
})

const AppConnected = connect(null, mapDispatchToPropsActions)(App)

export default AppConnected;
