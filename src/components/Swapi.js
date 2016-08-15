import React from 'react'
import {ajax} from 'jquery'
const Swapi = React.createClass({

 getInitialState(){
  return{
    person: {},
    enterInput : 1
  }
 },
  takeMyValue : function(event){
   this.setState({enterInput : event.target.value })

  },
 clickMe(){
  console.log("inside clicke me");
  ajax(`http://swapi.co/api/people/${this.state.enterInput}`)

       .done(person => {
        this.setState({person : person})
       })
       .fail(err =>{
        console.log("err" , err)
       })
 },
  componentDidUpdate(){
       console.log('this.state.enterInput', this.state.enterInput);
 
    //console.log('this.props.params',this.props.params)
     
    
  },

  render(){

    if(this.state.person){
    
    let {name,height,mass,birth_year} =this.state.person;

    return (
      <div>
        <h1>Welcome To Swapi Page</h1>
        <h3>Name:{name}</h3>
        <h3>Height:{height}</h3>
        <h3>Mass:{mass}</h3>
        <h3>BirthYear:{birth_year}</h3>
        <input type="number" value={this.state.enterInput} onChange = {this.takeMyValue}/>
        <button onClick={this.clickMe}>SUBMIT</button>
      </div>
    );
  }
  else{
    return (<h1>loading</h1>
  )
  }
}
})

export default Swapi;