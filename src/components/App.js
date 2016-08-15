import React from 'react'
import {Link} from 'react-router'
const App = React.createClass({
  componentDidMount : function(){
    console.log(this.props);
  },
  render(){
    return (
      <div>
        

        <button>
          <Link to = '/about'>About</Link>
        </button>

        <button>
          <Link to = '/'>Welcome</Link>
        </button>
          
        <button>
          <Link to = '/birds/eagle'>Birds</Link>
        </button>

         <button>
          <Link to = '/swapi/id'>swapi</Link>
        </button>

         <button>
          <Link to = '/weather/id'>Weather</Link>
        </button>

         {this.props.children}
         
      
      </div>

    )
  }
})

export default App;
