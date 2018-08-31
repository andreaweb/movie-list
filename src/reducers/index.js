import { combineReducers } from 'redux'

import {
	REQUEST_MOVIES,
	RECEIVE_MOVIES,
	SEARCH_MOVIES,
	GET_MOVIE_DETAILS  
} from '../actions'

function movies (state = {requesting: false, movies: []}, action) {
  switch (action.type) {
  	case REQUEST_MOVIES:
  		return Object.assign({}, state, {
  			requesting: true
  		})
  	case RECEIVE_MOVIES:
  		return Object.assign({}, state, {
  			requesting: false,
  			movies: action.movies,
  			lastUpdated: action.receivedAt
  		})
    default :
      return state
  }
}

const reducer = combineReducers({
  movies
})

export default reducer