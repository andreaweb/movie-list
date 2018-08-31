import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import PropTypes from 'prop-types'
import MainPage from './MainPage.js';
import { MovieDetails } from './MovieDetails';
import { connect } from 'react-redux';
import {
 // searchMovies,
  fetchMovies,
  fetchMovieDetails
} from './actions'
import './App.css'

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React);
}

class App extends React.Component {
  componentDidMount(){
    const { dispatch } = this.props
    //There's no option to search by category or popularity, so I'm searching for a neutral word instead
    dispatch(fetchMovies('the'))

    //just a test
    dispatch(fetchMovieDetails('tt0138097'))
  }

  render() {
    return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={MainPage}>
        </Route>
        <Route path="/movieDetails" component={MovieDetails}>
        </Route>
      </Switch>
    </div>
    )
  }
}

function mapStateToProps(state){
  const { query, movies, requesting, lastUpdated } = state
  return { query, movies, requesting, lastUpdated }
}

export default connect(mapStateToProps)(App)