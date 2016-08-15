import React from 'react'
import {ajax} from 'jquery'

const Weather = React.createClass({

getInitialState(){
    return {
     location:'',
     url : 'http://api.openweathermap.org/data/2.5/weather?q=',
     output : {}
    }
  },
changeMe: function(event){
 this.setState({location:event.target.value});

},
clickMe : function(event){

 ajax(`${this.state.url}${this.state.location}&APPID=087f53a509522010d6788bea14ee408e`)
   .done(data => {
    console.log("success");
    this.setState({ output : data});
   })
   .fail( f => {
      console.log("failed");
   });
},
render(){

  let s =this.state.output;
 
 return (
  <div>
    <h1>Weather Forecasting</h1>
      <div className ="field">
        <input id="inp_id" type="text" className = "form-control"value ={this.state.location} placeholder = "City,State" onChange={this.changeMe} />
        <button onClick ={this.clickMe} className = "btn btn-success">Click Me</button>
      </div>
    <div>
      <h3>Description:{s.weather && s.weather[0] ? s.weather[0].description : ""}</h3>
      <h3>Main:{s.weather && s.weather[0] ? s.weather[0].main : ""}</h3>
      <h3>Wind deg:{s.wind ? s.wind.deg : ""}</h3>
      <h3>Wind Speed:{s.wind  ? s.wind.speed: ""}</h3>
    </div>
  </div>
  )
}


})

export default Weather;