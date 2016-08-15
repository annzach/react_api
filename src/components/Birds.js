import React from 'react'
const Birds = React.createClass({
  getInitialState : function(){
   return {birdname : this.props.params.type};
  },
  render(){
    return (
      <div>
        <h1>Birds Page</h1>
        <h4>Birdiee</h4>
        <h3>{this.state.birdname}</h3>
      </div>
    )
  }
})

export default Birds;