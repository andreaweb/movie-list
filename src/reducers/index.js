import { combineReducers } from 'redux'

import {
  
} from '../actions'

const initialState = {
  
}

function movies (state = initialState, action) {
  switch (action.type) {
   
    default :
      return state
  }
}

export default combineReducers({
  movies
})