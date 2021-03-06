import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './MainPage/MainPage.js';
import MovieDetails from './MovieDetails/MovieDetails.js';
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
        <Route path='/movieDetails/:id' component={MovieDetails}/>
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default connect()(App)