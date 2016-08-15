import React from 'react'
import {render} from 'react-dom'
import {Router, Route,IndexRoute, browserHistory} from 'react-router'
import App from'./components/App'
import About from './components/About'
import Welcome from './components/Welcome'
import Birds from './components/Birds'
import Swapi from './components/Swapi'
import Weather from './components/Weather'
import './css/style.css'


render(
  <Router history = {browserHistory}>
   <Route path = '/' component ={App}>
   <IndexRoute component = {Welcome}/>
    <Route path = 'about' component ={About}/>
    <Route path = 'welcome' component ={Welcome}/>
    <Route path = 'birds/:type' component ={Birds}/>
    <Route path = 'swapi/:id' component ={Swapi}/>
    <Route path = 'weather/:id' component ={Weather}/>
  
   </Route>
  </Router>,
  document.getElementById('root'));