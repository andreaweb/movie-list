import { combineReducers } from 'redux'
import {
	REQUEST_MOVIES,
	RECEIVE_MOVIES,
	SEARCH_MOVIES,
	REQUEST_MOVIE_DETAILS,
	RECEIVE_MOVIE_DETAILS, 
	LOCATION_CHANGE
} from '../actions'

const initialState = {
  pathname: '/',
  search: '',
  hash: '',
};

const routerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

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

function movieDetails (state = {requesting: false, movieDetails: []}, action) {
  switch (action.type) {
  	case REQUEST_MOVIE_DETAILS:
  		return Object.assign({}, state, {
  			requesting: true
  		})
  	case RECEIVE_MOVIE_DETAILS:
  		return Object.assign({}, state, {
  			requesting: false,
  			movieDetails: action.movieDetails,
  			lastUpdated: action.receivedAt
  		})
    default :
      return state
  }
}

const reducer = combineReducers({
  movies,
  movieDetails,
  routerReducer
})

export default reducer