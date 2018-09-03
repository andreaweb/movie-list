import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import PropTypes from 'prop-types'
import MainPage from '../pages/MainPage.js';
import MovieDetails from '../pages/MovieDetails.js';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux';
import './App.css'

if (process.env.NODE_ENV !== 'production') {
 // const {whyDidYouUpdate} = require('why-did-you-update');
 // whyDidYouUpdate(React);
}

const App = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>     
        <Route path='/' exact component={MainPage}/>
        <Route path='/movieDetails/' component={MovieDetails}/>
      </Switch>
    </BrowserRouter>
  </Provider>
)

function mapStateToProps(state){
  const { query, movies, requesting, lastUpdated, movieDetails } = state
  return { query, movies, requesting, lastUpdated, movieDetails }
}

export default connect(mapStateToProps)(App)