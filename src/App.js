import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as MoviesAPI from './MoviesAPI'
import './App.css'

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React);
}

export default class App extends React.Component {
  state = { 
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="app">
       
      </div>
    )
  }
}
