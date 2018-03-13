import React, { Component } from 'react';
//import {connect} from'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationListContainer from './containers/LocationListContainer';  //reemplazo WeatherLocation//reemplazo LocationList
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
//import {setCity} from './actions'
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
  /*constructor(){
    super()
    this.state = {
      city:null
  }
}; */

   /*hadlerSelectionLocation = city =>{
     this.setState({city});
    console.log(`hadlerSelectionLocationClick ${city}`);
    //const action = {type:'setState', value: city}
    //store.dispatch(setCity(city));

    this.props.setCity(city);
  } */  //Manejaba estado antes de hacerelo con redux

  render () {
    //const {city} = this.state;    redux  

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
              <LocationListContainer cities={cities}>   
              </LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
             <Paper zDepth>
               <div className="detail">
                  <ForecastExtendedContainer>
                  </ForecastExtendedContainer>
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


/*const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
})

 export default connect(null, mapDispatchToPropsActions)(App) */ //Locambiamos a locationlistcontainer

export default App;
